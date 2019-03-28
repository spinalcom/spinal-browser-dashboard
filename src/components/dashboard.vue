
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
    const surface = 477*2.4;
    this.widgets = [
      {
        background: "bg-gradient-teal",
        icon: "fa-building",
        title: "Surface en m²",
        stats: surface,
        progress: 100
      },
      {
        background: "bg-gradient-blue",
        icon: "fa-kaaba",
        title: "Surface vitrées en m²",
        stats: surface * .4,
        progress: 50
      },
      {
        background: "bg-gradient-purple",
        icon: "fa-desktop",
        title: "Taux d’occupation (%)",
        stats: 76.3,
        progress: 76.3
      },
      {
        background: "bg-gradient-black",
        icon: "fa-clipboard-list",
        title: "Ordre de travaux d’entretien Ouvert",
        stats: 6,
        progress: 10
      }
    ];
    return {};
  }
};
</script>
