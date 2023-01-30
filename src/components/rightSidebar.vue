<template>
  <div class="col-3 rtl-sidebar d-flex flex-column text-bg-light border-start">
    <div class="mt-5">
      <VueApexCharts
        class="mt-4"
        width="350"
        type="pie"
        :options="chartOptions"
        :series="itemDetailStore.get_transaction_by_category"
      ></VueApexCharts>
      <p class="text-danger" v-if="itemDetailStore.withdrawal_sum > 0">
        Withdrawal : {{ itemDetailStore.withdrawal_sum }}
      </p>
      <p class="text-success" v-if="itemDetailStore.deposite_sum > 0">
        deposite : {{ itemDetailStore.deposite_sum }}
      </p>
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
