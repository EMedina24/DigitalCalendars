import Vue from 'vue'
import Router from 'vue-router'
import calendar from '@/components/Calendar'
import login from '@/components/login'
import register from '@/components/register'
import firebase from 'firebase';


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/calendar',
      name: 'calendar',
      component: calendar,
      meta:{
          requiresAuth:true
      }

    
    },
    {
      path: '/login',
      name: 'login',
      component: calendar,
      meta:{
        requiresGuest:true
    }
    },
    {
        path: '/register',
        name: 'register',
        component: register,
        meta:{
            requiresGuest:true
        }
      },
      {
        path: '/',
        name: 'home',
        component: calendar
      }

  ]
})

//
router.beforeEach((to,from,next) =>{
 
     if(to.matched.some(record=>record.meta.requiresAuth)){
         if(!firebase.auth().currentUser){
             next({
                 path:'/login',
                 query:{
                     redirect: to.fullPath
                 }
             })
         }else{
             next();
         }
     }else if(to.matched.some(record=>record.meta.requiresGuest)){
        if(firebase.auth().currentUser){
            next({
                path:'/calendar',
                query:{
                    redirect: to.fullPath
                }
            })
        }else{
            next();
        }
     }else{
         next();
     }

});

export default router;
