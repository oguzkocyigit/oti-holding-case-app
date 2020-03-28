import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import('@/views/Home/HomePage'),
    },
    {
      path: '/list',
      name: 'book.list',
      component: () => import('@/views/Book/BookListPageView.vue'),
    },
    {
      path: '/create',
      name: 'book.create',
      component: () => import('@/views/Book/BookCreate.vue'),
    },
    {
      path: '/update/:id',
      name: 'book.update',
      component: () => import('@/views/Book/BookCreate.vue'),
      props: true,
    },
    {
      path: '/detail/:id',
      name: 'book.detail',
      component: () => import('@/views/Book/BookDetailView.vue'),
      props: true,
    },
  ]
})