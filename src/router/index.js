import { createRouter, createWebHistory } from "vue-router";
import FormView from "../views/FormView.vue";
import itemsView from "../views/itemsView.vue";
import DepositView from "../views/DepositView.vue";
import WithdrawalView from "../views/WithdrawalView.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            component: itemsView,
        },
        {
            path: "/add-item",
            component: FormView,
        },
        {
            path: "/deposite",
            component: DepositView,
        },
        {
            path: "/withdrawal",
            component: WithdrawalView,
        },
    ],
});

export default router;