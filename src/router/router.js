import { createWebHistory, createRouter } from "vue-router";
import { defineAsyncComponent } from "vue";

const Home = defineAsyncComponent(() => import("../pages/Home.vue"));

import TheAbout from "../components/HomeItems/About.vue";
import ThePortfolio from "../components/HomeItems/Portfolio.vue";
import TheProject from "../components/HomeItems/Projects.vue";
import TheGallery from "../components/HomeItems/Gallery.vue";
import TheContact from "../components/HomeItems/Contactus.vue";

const routes = [
    { 
        path: "/", 
        redirect: "/home" 
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/about",
        component: TheAbout
    },
    {
        path: "/portfolio",
        component: ThePortfolio
    },
    {
        path: "/project",
        component: TheProject
    },
    {
        path: "/gallery",
        component: TheGallery
    },
    {
        path: "/contact",
        component: TheContact
    }
];

const router = new createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
