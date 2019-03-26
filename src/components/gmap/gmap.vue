
<template>
  <div class="col-lg-6">
    <panel title="Visitors Origin"
           noBody="true"
           noButton="true">
      <template slot="outsideBody">
        <GmapMap class="bg-black"
                 style="height: 230px;"
                 v-bind:options="map"
                 :zoom="3"
                 :center="coord">

          <GmapMarker :title="'Nanterre'"
                      :position="nanterre"
                      :clickable="true"></GmapMarker>

        </GmapMap>
        <div class="list-group">
          <a href="javascript:;"
             class="list-group-item list-group-item-inverse d-flex justify-content-between align-items-center text-ellipsis">
            1. United State
            <span class="badge f-w-500 bg-gradient-teal f-s-10">20.95%</span>
          </a>
        </div>
      </template>
    </panel>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";

export default {
  name: "gmapComponent",
  data() {
    return {
      coord: { lat: 48.8534, lng: 2.3488 },
      nanterre: { lat: 48.892423, lng: 2.215331 },
      map: {
        zoomControl: true,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ saturation: 36 }, { lightness: 40 }]
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              { visibility: "on" },
              { color: "#000000" },
              { lightness: 16 }
            ]
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#2d353c" }, { lightness: 20 }]
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }]
          },
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d8d8d8" }]
          },
          {
            featureType: "administrative.neighborhood",
            elementType: "geometry.fill",
            stylers: [{ color: "#ff0000" }]
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "geometry.fill",
            stylers: [{ color: "#2d353c" }]
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 20 }]
          },
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{ color: "#2d353c" }]
          },
          {
            featureType: "landscape",
            elementType: "labels.text.fill",
            stylers: [{ color: "#00acac" }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#2d353c" }]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 21 }]
          },
          {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [{ color: "#2d353c" }]
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#575d63" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#348fe2" }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }, { lightness: 17 }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }]
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "geometry.fill",
            stylers: [{ color: "#575d63" }]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 18 }]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [{ color: "#575d63" }]
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 16 }]
          },
          {
            featureType: "road.local",
            elementType: "geometry.fill",
            stylers: [{ color: "#575d63" }]
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 19 }]
          },
          {
            featureType: "transit",
            elementType: "geometry.fill",
            stylers: [{ color: "#2d353c" }]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 17 }]
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#1a1f23" }]
          }
        ]
      }
    };
  },
  computed: {
    google: gmapApi
  }
};
</script>

