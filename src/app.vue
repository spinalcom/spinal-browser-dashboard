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
        <usage-resto-widget :config="areaChart"></usage-resto-widget>
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
import { areaChartData } from "./config/areaChartData";
var barChartData = [
  {
    key: "Cumulative Return",
    values: [
      { label: " ", value: 2211, color: "#ff5b57" },
      { label: "  ", value: 1095, color: "#f59c1a" },
      { label: "   ", value: 2450, color: "#00ACAC" },
      { label: "    ", value: 15523, color: "#5AC8FA" },
      { label: "     ", value: 3407, color: "#348fe2" },
      { label: "      ", value: 771, color: "#727cb6" }
    ]
  }
];

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

