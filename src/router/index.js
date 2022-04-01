// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// import Resume from '../pages/resume.vue';

// 2. 定义路由
const routes = [
  // { path: '/', component: Helloworld }, 表示未传入地址默认页面
  { 
    path: '/', 
    component: () => import('../pages/login/index.vue'),
    name:'Login',
    meta: { title: 'YGO-CS 登录' }
  },
  
  {
    path: '/A',
    component:() => import('../pages/cssystem.vue'),
    children:[
      { 
        path: '/hello', 
        component:() => import('../pages/hello.vue'),
        name: 'Hello',
        meta: { title: 'YGO卡查系统' }
      },
      { 
        path: '/cardsea', 
        component:() => import('../pages/search/cardsea.vue'),
        name: 'CardSea',
        meta: { title: '游戏王卡片在线查询' }
      },
      { 
        path: '/card_search', 
        component:() => import('../pages/search/card_search.vue'),
        name: 'CardSearch',
        meta: { title: '高级查询' }
      },
      { 
        path: '/card_info', 
        component:() => import('../components/card_info.vue'),
        name: 'CardInfo',
        meta: { title: '卡片信息' }
      },
      { 
        path: '/update_log', 
        component:() => import('../pages/updateLog.vue'),
        name: 'Update_log',
        meta: { title: '更新日志' }
      },
      { 
        path: '/deck/edit', 
        component:() => import('../pages/deck/edit.vue'),
        name: 'Edit',
        meta: { title: '修改卡组' }
      },
      { 
        path: '/deck/hano', 
        component:() => import('../pages/deck/hano.vue'),
        name: 'Hano',
        meta: { title: '预组卡组' }
      },
      { 
        path: '/testVue', 
        component:() => import('../pages/ts.vue'),
        name: 'Test',
        meta: { title: '测试样例' }
      },
    ]
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
export const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 路由卫士
router.beforeEach((to, from, next) => {
  // 验证是否登录，做检查
  if(to.name!=="Login" && (localStorage.getItem('login')!=="Local")){
    next({ name: 'Login' })
  }
  // 根据路由设置标题
  window.document.title = to.meta.title;
  next();
})