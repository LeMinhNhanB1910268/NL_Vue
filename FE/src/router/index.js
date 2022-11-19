import { createWebHistory, createRouter } from "vue-router";
import ProductSport from "@/views/ProductSport.vue";
import aa from "@/views/2.vue";
import Discount from "@/views/Discount.vue";
import About from "@/views/About.vue";
const routes = [
    {
    path: "/", name: "home", component: ProductSport
    },
    {
    path: "/aa", name: "productsport1", component: aa
    },
    {
        path: "/promotion", name: "promotion", component: Discount
    },
    {
        path: "/about", name: "about", component: About
    },
    {
        path: "/productdetail/:id",
        name: "productdetail",
        component: () => import("@/views/ProductDetail.vue"),
        props: true
    },
    {
        path: "/productmanager",
        name: "productmanager",
        component: () => import("@/views/ProductDetail.vue"),
        props: true
    },
    {
        path: "/manager",
        name: "manager",
        component: () => import("@/views/Admin.vue"),
        children: [
            {
                path: "/productmanager",
                name: "productmanager",
                component: () => import("@/views/ProductManager.vue"),
            },
            {
                path: "/accountmanager",
                name: "accountmanager",
                component: () => import("@/views/AccountManager.vue"),
            },
            {
                path: "/ordertmanager",
                name: "ordermanager",
                component: () => import("@/views/OrderManager.vue"),
            }
        ]
    },
    {
        path: "/usermanager",
        name: "usermanager",
        component: () => import("@/views/User.vue"),
        props: true
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    // {
    //     path: "/products/:id",
    //     name: "product.edit",
    //     component: () => import("@/views/ProductEdit.vue"),
    //     props: true // Truyền các biến trong $route.params vào làm props
    // },
    {
        path: "/productclub",
        name: "productclub",
        component: () => import("@/views/ClubProduct.vue"),
    },
    {
        path: "/productteam",
        name: "productteam",
        component: () => import("@/views/TeamProduct.vue"),
    },
    {
        path: "/editAccount",
        name: "EditAccount",
        component: () => import("@/views/AccountForm.vue"),
        props: true
    }

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;