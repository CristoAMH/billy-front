import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/login.vue"
import SecureComponent from "./views/secure.vue"
import InscriptionComponent from "./views/inscription.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        redirect: {
            name: "inscription"
        }
    },
    {
        path: "/inscription",
        name: "inscription",
        component: InscriptionComponent
    },
    {
        path: "/login",
        name: "login",
        component: LoginComponent
    },
    {
        path: "/secure",
        name: "secure",
        component: SecureComponent
    },
    {
      path: "/settings",
      name: "settings",
    }
  ]
})
