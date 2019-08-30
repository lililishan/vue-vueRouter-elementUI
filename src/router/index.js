import Vue from 'vue'
import Router from 'vue-router'
// import Home from './../view/hello.vue'
// import About from './../view/about.vue'
// import layout from './../view/layout.vue'
// import Contaniner from './../view/container.vue'
// import checkbox from "./../view/checkbox.vue"
// import radio from "./../view/radio.vue"

import {menu} from '@/config/menu-config'

Vue.use(Router)
const routers = []
menu.forEach((item) => {
  item.sub.forEach((row) => {
    routers.push({
      path: `/${row.componentName}`,
      name: row.componentName,
      component: () => import(`@/view/${row.componentName}`)
    })
  })
})

export default new Router({ routers })

// export default new Router({
//   routes: [
//     {
//       path: '/BasicLyout',
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
