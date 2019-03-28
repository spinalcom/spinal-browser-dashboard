<template>
  <div>
    <div id="header"
         class="header navbar-default">
      <!-- begin navbar-header -->
      <div class="navbar-header" style="padding: 5px;">
        <img src="./assets/logo_medium.png" alt="SpinalCom" width="auto" height="42">
      <h1 class="page-header" style="position: absolute;
    right: 10px;
    top: 11px;">Dashboard</h1>
        <!-- <router-link to="/dashboard/v2"
                     class="navbar-brand"><span class="navbar-logo"></span> <b>Color</b>
          Admin</router-link> -->
      </div>
    </div>

    <div class="container-fluid" style="margin-top: 8px;">

      <dashboard-component></dashboard-component>

      <div class="row">
        <conso-elec-widget :config="areaChart"></conso-elec-widget>
        <gmap-component>
        </gmap-component>
      </div>

      <div class="row">
        <usage-resto-widget :config="restoChart"></usage-resto-widget>
        <occupation-m2-widget :config="barChart"></occupation-m2-widget>
      </div>

      <!-- <vue-ins-progress-bar></vue-ins-progress-bar> -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import PageOptions from "./config/PageOptions.vue";
import DashboardComponent from "./components/dashboard.vue";
// import GraphComponent from "./components/graph/graph.vue";
import GmapComponent from "./components/gmap/gmap.vue";
import consoElecWidget from "./widgets/consoElec.vue";
import usageRestoWidget from "./widgets/usageResto.vue";
import occupationM2Widget from "./widgets/occupationM2.vue";
// import { areaChartData } from "./config/areaChartData";
import restoChart from "./config/restoChart.js";
import areaChartData from "./config/surfaceChart.js";
import barChartData from "./config/occupationPlotChart.js";

export default Vue.extend({
  components: {
    "dashboard-component": DashboardComponent,
    // "graph-component": GraphComponent,
    "gmap-component": GmapComponent,
    "conso-elec-widget": consoElecWidget,
    "usage-resto-widget": usageRestoWidget,
    "occupation-m2-widget": occupationM2Widget
  },
  data() {
    return {
      restoChart,
      pageOptions: PageOptions,
      areaChart: areaChartData,
      barChart: {
        data: barChartData,
        staggerLabels: false
      }
    };
  },
  methods: {
    handleScroll: function() {
      PageOptions.pageBodyScrollTop = window.scrollY;
    }
  },
  mounted() {
    // this.$insProgress.finish();
  },
  created() {
    PageOptions.pageBodyScrollTop = window.scrollY;

    window.addEventListener("scroll", this.handleScroll);

    // // this.$insProgress.start();

    // this.$router.beforeEach((to, from, next) => {
    //   this.$insProgress.start();
    //   next();
    // });
    // this.$router.afterEach(() => {
    //   // this.$insProgress.finish();
    // });
  }
});
</script>

