<template>
  <div class="col-3 rtl-sidebar d-flex flex-column text-bg-dark">
    <div>
      <VueApexCharts
        class="mt-4"
        width="350"
        type="pie"
        :options="chartOptions"
        :series="series"
      ></VueApexCharts>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import { useItemDetailStore } from "../stores/itemDetail";
export default {
  components: { VueApexCharts },
  setup() {
    let itemDetailStore = useItemDetailStore();
    return {
      itemDetailStore,
    };
  },
  data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: "pie",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style></style>
