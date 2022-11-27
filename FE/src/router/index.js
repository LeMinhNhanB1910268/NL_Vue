import { createWebHistory, createRouter } from "vue-router";
import ProductSport from "@/views/ProductSport.vue";
import aa from "@/views/2.vue";
import Discount from "@/views/Discount.vue";
import About from "@/views/About.vue";
import login from "../views/Login.vue";
import register from"../views/Register.vue";
const routes = [
    {
    path: "/", name: "home", component: ProductSport
    },
    {
    path: "/aa", name: "productsport1", component: aa
    },
    {
        path: "/:name", name: "home-client", component: ProductSport, props: true,
    },
    {
        path: "/login", name: "login", component: login
    },
    {
        path: "/register", name: "register", component: register
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
        path: "/manager/about", name: "about", component: About
    },
    {
        path: "/productmanager",
        name: "productmanager",
        component: () => import("@/views/ProductDetail.vue"),
        props: true
    },
    {
        path: "/manager/",
        name: "manager",
        component: () => import("@/views/Admin.vue"),
        props:true,
        children: [
            {
                path: "/manager/productmanager",
                name: "productmanager",
                component: () => import("@/views/ProductManager.vue"),
            },
            {
                path: "/manager/accountmanager",
                name: "accountmanager",
                component: () => import("@/views/AccountManager.vue"),
            },
            {
                path: "/manager/ordertmanager",
                name: "ordermanager",
                component: () => import("@/views/OrderManager.vue"),
            },
            {
                path: "/manager/promotionmanager",
                name: "promotionmanager",
                component: () => import("@/views/PromotionManager.vue"),
            },
            {
                path: "/manager/contactnmanager",
                name: "contactnmanager",
                component: () => import("@/views/PromotionManager.vue"),
            },
            

    {
        path: "/manager/statistical",
        name: "statistical",
        component: () => import("@/views/Statistical.vue"),
    },
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
        path: "/editAccount/:id",
        name: "EditUser",
        component: () => import("@/views/AccountFormEdit.vue"),
        props: true
    },
    {
        path: "/CreatAccount/",
        name: "AddUser",
        component: () => import("@/views/AccountFormAdd.vue"),
    },
    {
        path: "/editPromotion/:id",
        name: "EditPromotion",
        component: () => import("@/views/PromotionFormEdit.vue"),
        props: true
    },
    {
        path: "/CreatPromotion/",
        name: "AddPromotion",
        component: () => import("@/views/PromotionFormAdd.vue"),
    },
    {
        path: "/editProduct/:id",
        name: "EditProduct",
        component: () => import("@/views/ProductFormEdit.vue"),
        props: true
    },
    {
        path: "/CreatProduct/",
        name: "AddProduct",
        component: () => import("@/views/ProductFormAdd.vue"),
    }


];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'vue-active-link'
});
export default router;