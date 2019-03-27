
<template>
  <div class="col-lg-3 col-md-6">
    <div :class="['widget widget-stats', background]">
      <div class="stats-icon stats-icon-lg"><i :class="['fa','fa-fw',icon]"></i></div>
      <div class="stats-content">
        <div class="stats-title">{{title | upperCase}}</div>
        <div class="stats-number">{{stats | statsFormat}}</div>
        <div class="stats-progress progress">
          <div class="progress-bar"
               :style="getProgress()"></div>
        </div>
        <!-- <div class="stats-desc">Better than last week (70.1%)</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "widgetComponent",
  props: {
    title: String,
    stats: Number,
    background: String,
    icon: String,
    progress: Number
  },
  filters: {
    upperCase(valeur) {
      return valeur.toUpperCase();
    },
    statsFormat(valeur) {
      return valeur.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  },
  methods: {
    getProgress(){
      return `width: ${this.progress}%;`;
    }
  }
};
</script>
