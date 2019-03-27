<template>
  <div class="col-lg-8">
    <graph-component :title="`Usagers du restaurant d’entreprise`"
                     :subtitle="'Année courante vs année précédente'">
      <!-- Put here the graph component -->
      <!-- <div class="widget-chart with-sidebar inverse-mode"> -->
      <div class=" bg-black nvd3-inverse-mode"
           style="margin: 0 -65px -15px -25px">
           <!-- style="padding: 0 0 0 0"> -->
        <!-- <div class="widget-chart-full-width nvd3-inverse-mode" -->
        <!-- style="height: 260px;margin: 0px 15px;"> -->
        <vn-stacked-area :model="model"
                         yFormat=",.0f"
                         :xFormat="formatDate"
                         :clipEdge="clipEdge"
                         :rightAlignYAxis="rightAlignYAxis"
                         :showControls="showControls"></vn-stacked-area>
      </div>
      <!-- </div> -->
      <!-- </div> -->

    </graph-component>
  </div>

</template>

<script>
import GraphComponent from "../components/graph/graph.vue";
export default {
  name: "conso-elec-widget",
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
      if (typeof this.config.clipEdge === "undefined") return true;
      return this.config.clipEdge;
    },
    rightAlignYAxis() {
      if (typeof this.config.rightAlignYAxis === "undefined") return true;
      return this.config.rightAlignYAxis;
    },
    showControls() {
      if (typeof this.config.showControls === "undefined") return true;
      return this.config.showControls;
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
