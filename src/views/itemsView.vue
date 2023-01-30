<template>
  <div class="items col-6 d-flex flex-column mt-4">
    <div
      v-for="(item, index) in itemDetailStore.transactionList"
      :key="index"
      class="col-sm-12 col-lg-10 mb-1 mx-5 mt-3"
    >
      <div class="item border border-1 rounded-4 p-1">
        <figure class="p-2 mb-0">
          <blockquote class="blockquote">
            <h4 class="mx-3">{{ item.title }}</h4>
          </blockquote>
          <div class="d-flex">
            <svg
              v-if="item.amountType == '+'"
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-down"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#00b341"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="16" y1="15" x2="12" y2="19" />
              <line x1="8" y1="15" x2="12" y2="19" />
            </svg>
            <svg
              v-if="item.amountType == '-'"
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-up"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ff2825"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="16" y1="9" x2="12" y2="5" />
              <line x1="8" y1="9" x2="12" y2="5" />
            </svg>
            <figcaption
              :style="{
                color: item.amountType == '+' ? 'green' : 'red',
              }"
              class="fs-5 mb-0"
            >
              {{ item.amountType }} {{ item.amount }}
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import { useItemDetailStore } from "../stores/itemDetail";
export default {
  setup() {
    let itemDetailStore = useItemDetailStore();
    return {
      itemDetailStore,
    };
  },
};
</script>

<style></style>
