
<template>
  <div class="row">
    <widget-component v-for="(widget,index) in widgets"
                      :key="index"
                      :background="widget.background"
                      :icon="widget.icon"
                      :title="widget.title"
                      :stats="widget.stats"
                      :progress="widget.progress"
                      ></widget-component>
  </div>
</template>


<script>
import WidgetComponent from "./widgets/widget.vue";
export default {
  name: "dashboardComponent",
  components: {
    "widget-component": WidgetComponent
  },
  data() {
    this.widgets = [
      {
        background: "bg-gradient-teal",
        icon: "fa-globe",
        title: "SHON en m²",
        stats: 33400,
        progress: 70
      },
      {
        background: "bg-gradient-blue",
        icon: "fa-dollar-sign",
        title: "Surface vitrées en m²",
        stats: 22000,
        progress: 100
      },
      {
        background: "bg-gradient-purple",
        icon: "fa-archive",
        title: "Taux d’occupation (%)",
        stats: 76.3,
        progress: 76.3
      },
      {
        background: "bg-gradient-black",
        icon: "fa-comment-alt",
        title: "Ordre de travaux d’entretien",
        stats: 6,
        progress: 10
      }
    ];
    return {};
  }
};
</script>
