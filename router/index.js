import Vue from 'vue'
import VueRouter from 'vue-router'


// import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes=[
    {
        path:'/',
        name:'Main',
        component:()=>import ('../views/Main.vue'),
        children:[
       
        ]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/Login/login.vue')
    },

    
]
const router=new VueRouter({
    path: '/home',
    mode:'history',
    routes

})

// router.beforeEach((to,from,next) =>{
//     document.title = to.matched[0].meta.title
//     console.log(to);
//     next()
// })

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router


