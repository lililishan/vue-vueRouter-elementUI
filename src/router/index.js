import Vue from 'vue'
import Router from 'vue-router'
// import Home from './../view/hello.vue'
// import About from './../view/about.vue'

import {menu} from '@/config/menu-config'

Vue.use(Router)
const routers = []
menu.forEach((item) => {
  item.sub.forEach((row) => {
    routers.push({
      path: `/${row.componentName}`,
      name: row.componentName,
      component: () => import(`./../view/${row.componentName}`)
    })
  })
})

export default new Router({ routers })

// import layout from './../view/BasicLayout'
// import Contaniner from './../view/BasicContainer'
// import checkbox from "./../view/FormCheckbox"
// import radio from "./../view/FormRadio"

// export default new Router({
//   routes: [
//     {
//       path: '/BasicLayout',
//       name: 'layout',
//       component: layout
//     },
//     {
//       path: '/BasicContainer',
//       name: 'contaniner',
//       component: Contaniner
//     },
//     {
//       path: '/FormCheckbox',
//       name: 'checkbox',
//       component: checkbox
//     },
//     {
//       path: '/FormRadio',
//       name: 'radio',
//       component: radio
//     }
//   ]
// })
