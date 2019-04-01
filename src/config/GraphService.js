import {SpinalGraphService} from 'spinal-env-viewer-graph-service';
import {spinalIO} from '../services/spinal-io';
var throttle = require('lodash.throttle');

export class GraphService {
  constructor() {
    this.SpinalGraphService = SpinalGraphService;
    this.initPromise = null;
    this.graphID = null;
    this.OccupantGrpSet = new Set();
  }
  init() {
    if (this.initPromise !== null) return this.initPromise;
    const func = async (resolve, reject) => {
      try {
        const forgefile = await spinalIO.getPathModel();
        this.graphID = await this.SpinalGraphService
          .setGraphFromForgeFile(forgefile);
        resolve(this.graphID);
      } catch (e) {
        reject(e);
      }
    };
    this.initPromise = new Promise(func);
    return this.initPromise;
  }

  async getOccupations(onChangeFunc) {
    await this.init();
    const context = await this.SpinalGraphService.getContext('Occupation');
    this.getOccupationsFuncBinded = throttle(() => {
      this.getOccupationsFunc().then((res) => {
        onChangeFunc(res);
      });
    }, 1000);

    context.bind(this.getOccupationsFuncBinded);
  }

  async getOccupationsFunc() {
    await this.init();
    const context = await this.SpinalGraphService.getContext('Occupation');
    const occupationId = context.info.id.get();
    const ocupationGrpLst = await this.SpinalGraphService
      .getChildrenInContext(occupationId, occupationId);

    const res = [];
    for (let idx = 0; idx < ocupationGrpLst.length; idx++) {
      const ocupationGrp = ocupationGrpLst[idx];
      if (!this.OccupantGrpSet.has(ocupationGrp)) {
        this.OccupantGrpSet.add(ocupationGrp);
        const nodeModel = this.SpinalGraphService.getRealNode(ocupationGrp.id.get());
        nodeModel.bind(this.getOccupationsFuncBinded);
      }
      const obj = {
        name: ocupationGrp.name.get(),
        promise: this.SpinalGraphService.getChildrenIds(ocupationGrp.id
          .get())
      };
      if (typeof ocupationGrp.color !== 'undefined') {
        obj.color = ocupationGrp.color.get();
      }
      res.push(obj);
    }
    const tmp = [];
    for (let idx = 0; idx < res.length; idx++) {
      // eslint-disable-next-line no-await-in-loop
      const children = await res[idx].promise;
      // const o = ;
      tmp.push({
        name: res[idx].name,
        color: res[idx].color,
        children: children
      });
    }
    return tmp;
  }

}

const graphService = new GraphService;

export default graphService;
