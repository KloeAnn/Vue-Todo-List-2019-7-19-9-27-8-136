import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import WelCome from "../components/WelCome";
import User from "../components/User";
import ToDoList from "../components/ToDoList"

Vue.use(VueRouter)

const routes = [
  { path: '/', name:'welcome',component: WelCome},
  { path: '/home',name:'home', component: Home ,
    children:[
      {path: '/todo',name:'todo', component: ToDoList},
      {path: '/user',name:'user', component: User}
    ]
  },
  // { path:'/user',name:'user', component:User}
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router
