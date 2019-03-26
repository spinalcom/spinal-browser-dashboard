
<template>
  <div class="row">
    <widget-component v-for="(widget,index) in widgets"
                      :key="index"
                      :background="widget.background"
                      :icon="widget.icon"
                      :title="widget.title"
                      :stats="widget.stats"></widget-component>
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
        title: "SHON",
        stats: 7842900
      },
      {
        background: "bg-gradient-blue",
        icon: "fa-dollar-sign",
        title: "Surface vitrées",
        stats: 180200
      },
      {
        background: "bg-gradient-purple",
        icon: "fa-archive",
        title: "taux d'occupation",
        stats: 38900
      },
      {
        background: "bg-gradient-black",
        icon: "fa-comment-alt",
        title: "ordre de travaux",
        stats: 3988
      }
    ];
    return {};
  }
};
</script>