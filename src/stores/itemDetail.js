import { defineStore } from "pinia";

export const useItemDetailStore = defineStore("itemDetail", {
    state: () => {
        return {
            transactionList: [],
        };
    },
});