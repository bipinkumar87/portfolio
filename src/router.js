import{
    createRouter,
    createWebHistory

}from "vue-router";
import ContactUs from "./components/ContactUs.vue";
import FooterPage from "./components/FooterPage.vue";
import TailwindVue from "./components/TailwindVue.vue";
import JavaSpring from "./components/JavaSpring.vue";
import HtmlcssJs from "./components/HtmlcssJs.vue";
const routes=[{
    path: "/contact",
    component: ContactUs
},
{
    path :"/footer",
    component:FooterPage
    
},
{
    path:"/tailwindVue",
    component:TailwindVue,
    name:'TailwindVue'
},
{
    path:"/javaSpringBoot",
    component:JavaSpring,
    name:'JavaSpring'
},
{
    path:'/HTMLCSSJS',
    name:'Htmlcss',
    component:HtmlcssJs,
    
}



]
const router=createRouter({
    history:createWebHistory(),
    routes:routes
});export default router;