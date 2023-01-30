<template>
  <main class="d-flex flex-nowrap row w-100">
    <left-sidebar class="col-3"></left-sidebar>
    <router-view class="main-pg col-6"></router-view>
    <right-sidebar class="col-3"></right-sidebar>
  </main>
</template>

<script>
// import Item from "./components/item.vue";
import LeftSidebar from "./components/LeftSidebar.vue";
import RightSidebar from "./components/rightSidebar.vue";
export default {
  components: { LeftSidebar, RightSidebar },
};
</script>

<style></style>
