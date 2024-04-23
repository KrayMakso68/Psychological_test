import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'results', component: () => import('pages/ResultsPage.vue') },
      { path: 'test1', component: () => import('pages/Test1Page.vue') },
      { path: 'test2', component: () => import('pages/Test1Page.vue') },
      { path: 'test3', component: () => import('pages/Test1Page.vue') },
      { path: 'test4', component: () => import('pages/Test1Page.vue') },
      { path: 'test5', component: () => import('pages/Test1Page.vue') },
      { path: 'test6', component: () => import('pages/Test1Page.vue') },
      { path: 'test7', component: () => import('pages/Test1Page.vue') },
      { path: 'test8', component: () => import('pages/Test1Page.vue') },
      { path: 'test9', component: () => import('pages/Test1Page.vue') }

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
