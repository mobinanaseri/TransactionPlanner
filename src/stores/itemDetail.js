import { defineStore } from "pinia";

export const useItemDetailStore = defineStore("itemDetail", {
    state: () => {
        return {
            transactionList: [],
            transactionGroupByCategory: {},
            withdrawal_sum: 0,
            deposite_sum: 0,
        };
    },
    getters: {
        get_transaction_by_category(state) {
            let list = [];
            Object.values(state.transactionGroupByCategory).forEach((tranaction) => {
                list.push(tranaction.length);
            });
            return list;
        },
    },
});