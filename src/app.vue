<template>
  <div class="container-fluid">
    <dashboard-component></dashboard-component>

    <div class="row">
      <graph-component :title="`coût consommation electricité`">
        <!-- Put here the graph component -->
      </graph-component>
      <gmap-component></gmap-component>
    </div>

    <div class="row">
      <graph-component :title="`usagers du restaurent`">
        <!-- Put here the graph component -->
      </graph-component>
      <graph-component :title="`occupation en m² par service`">
        <!-- Put here the graph component -->
      </graph-component>
    </div>

    <!-- <vue-ins-progress-bar></vue-ins-progress-bar> -->
  </div>
</template>

<script>
import Vue from "vue";
import PageOptions from "./config/PageOptions.vue";
import DashboardComponent from "./components/dashboard.vue";
import GraphComponent from "./components/graph/graph.vue";
import GmapComponent from "./components/gmap/gmap.vue";

export default Vue.extend({
  components: {
    "dashboard-component": DashboardComponent,
    "graph-component": GraphComponent,
    "gmap-component": GmapComponent
  },
  data() {
    return {
      pageOptions: PageOptions
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

