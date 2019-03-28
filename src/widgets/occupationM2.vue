<template>
  <div  class="col-lg-4">
    <graph-component :title="`Occupation en m² par service`">
      <!-- Put here the graph component -->
      <!-- <div class="widget-chart" style="margin: 0 30px 0px 0;"> -->
        <!-- <div class=" bg-black"> -->
          <!-- <div class="widget-chart-full-width nvd3-inverse-mode"
               style="height: 260px;"> -->
        <!-- <div class=" bg-black nvd3-inverse-mode "
        style="height: 300px; margin: 0 -65px -15px -25px"> -->
      <div class=" bg-black nvd3-inverse-mode"
           style="width: 100%; padding: 0 33px 0 0;">
            <vn-bar style="fill:rgba(255, 255, 255, 0.75);" :model="model"
                             yFormat=",.0f"
                             :xFormat="formatDate"
                             :clipEdge="clipEdge"
                             :rightAlignYAxis="rightAlignYAxis"
                             :tooltips="tooltips"
                             :showControls="showControls"></vn-bar>
          </div>
        <!-- </div> -->
      <!-- </div> -->

    </graph-component>
  </div>

</template>

<script>
import GraphComponent from '../components/graph/graph.vue';
export default {
  name: "occupation-m2-widget",
  components: {
    "graph-component": GraphComponent
  },
  data() {
    return {};
  },
  props: ["config"],
  computed: {
    model() {
      if (!this.config.data) return [];
      return this.config.data;
    },
    clipEdge() {
      return false;
      // if (typeof this.config.clipEdge === 'undefined') return true;
      // return this.config.clipEdge;
    },
    rightAlignYAxis() {
      if (typeof this.config.rightAlignYAxis === 'undefined') return true;
      return this.config.rightAlignYAxis;
    },
    showControls() {
      if (typeof this.config.showControls === 'undefined') return true;
      return this.config.showControls;
    },
    tooltips(){
      return true;
    }
  },
  methods: {
    formatDate(d) {
      var monthsName = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      d = new Date(d);
      d = monthsName[d.getMonth()] + " " + d.getDate();
      return d;
    }
  }
};
</script>

<style >
  .nvd3 .nv-discretebar .nv-groups text, .nvd3 .nv-multibarHorizontal .nv-groups text {
    fill: white !important;
  }
</style>
