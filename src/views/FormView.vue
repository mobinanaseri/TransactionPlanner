<template>
  <div class="item-form col-5 d-flex flex-column mt-5">
    <div class="mb-3 m-5 row">
      <label for="inputPassword" class="col-sm-2 col-form-label"
        >Amount (dollar)</label
      >
      <div class="col-sm-10">
        <input
          type="number"
          class="form-control"
          id="inputAmount"
          v-model="itemAmount"
        />
      </div>
    </div>
    <div class="mb-3 m-5 row">
      <label for="inputPassword" class="col-sm-2 col-form-label"
        >Category</label
      >
      <div class="col-sm-10">
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="category"
          id="inputCategory"
        >
          <option selected value="">Open this select menu</option>
          <option value="food">food</option>
          <option value="clothing">clothing</option>
          <option value="health">health</option>
          <option value="payment">payment</option>
          <option value="another issues">another issues</option>
        </select>
      </div>
    </div>
    <div class="mb-3 m-5 d-flex justify-content-between">
      <label>Transaction Type </label>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input radioType"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="+"
          v-model="picked"
        />
        <label class="form-check-label" for="inlineRadio1">Deposit</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input radioType"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="-"
          v-model="picked"
        />
        <label class="form-check-label" for="inlineRadio2">Withdrawal</label>
      </div>
    </div>
    <div class="mb-3 m-5 row d-grid gap-2">
      <button class="btn btn-primary" type="button" @click="addItem()">
        submit
      </button>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import { useItemDetailStore } from "../stores/itemDetail";
export default {
  setup() {
    let itemDetailStore = useItemDetailStore();
    const toast = useToast();
    return {
      itemDetailStore,
      toast,
    };
  },
  data() {
    return {
      itemAmount: 0,
      category: "",
      picked: "",
    };
  },
  methods: {
    addItem() {
      if (this.itemAmount == 0) {
        this.toast.error("please fill the required fields");
        return;
      }
      if (this.category == "") {
        this.toast.error("please fill the required fields");
        return;
      }
      if (this.picked == "") {
        this.toast.error("please fill the required fields");
        return;
      }
      this.itemDetailStore.transactionList.push({
        title: this.category,
        amount: this.itemAmount,
        amountType: this.picked,
      });

      if (this.picked == "-") {
        this.itemDetailStore.withdrawal_sum += this.itemAmount;
      } else {
        this.itemDetailStore.deposite_sum += this.itemAmount;
      }

      this.toast.success("item added successfully");
      this.category = "";
      this.itemAmount = 0;
      this.picked = "";

      this.itemDetailStore.transactionGroupByCategory =
        this.itemDetailStore.transactionList.reduce((group, item) => {
          const { title } = item;
          group[title] = group[title] != null ? group[title] : [];
          group[title].push(item);
          return group;
        }, {});
    },
  },
};
</script>

<style></style>
