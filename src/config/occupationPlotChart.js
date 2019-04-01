const surface = 477 * 2.4;


import GraphService from './GraphService';




function getData(onChangeFunc) {
  GraphService.getOccupations((OccupationNodeInfo) => {
    var barChartData = [{
      key: "Occupation",
      values: OccupationNodeInfo.map(e => {
        return {
          label: e.name,
          value: e.children.length * 17.4,
          color: e.color
        };
      })
    }];
    onChangeFunc(barChartData);
  });




  // const OccupationNodeInfo = await GraphService.getOccupations();

  // var barChartData = [{
  //   key: "Occupation",
  //   values: OccupationNodeInfo.map(e=> {
  //     return {
  //       label : e.name,
  //       value: e.children.length * 20
  //     };
  //   })
  // }];

  // return barChartData;
}

export default getData;
