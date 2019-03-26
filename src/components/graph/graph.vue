
<template>
  <div class="col-lg-6">
    <div class="widget-chart  with-sidebar inverse-mode">
      <div class="bg-black">
        <h4 class="chart-title">
          {{title | upperCase}}
          <small>{{subtitle}}</small>
        </h4>
        <div class="widget-chart-full-width nvd3-inverse-mode"
             style="height: 260px">

          <slot></slot>

          <!-- <vn-stacked-area :model="areaChart.data"
                           yFormat=",.0f"
                           :xFormat="formatDate"
                           :clipEdge="areaChart.clipEdge"
                           :rightAlignYAxis="areaChart.rightAlignYAxis"
                           :showControls="areaChart.showControls"></vn-stacked-area> -->
        </div>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: "graphComponent",
  props: {
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" }
  },
  data() {
    return {};
  },
  filters: {
    upperCase(valeur) {
      return valeur[0].toUpperCase() + valeur.substr(1);
    }
  }
};
</script>