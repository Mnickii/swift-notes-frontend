import Vue from 'vue';
import Router from 'vue-router';
import Notes from '@/views/NotesView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Notes',
      component: Notes,
    },
  ],
});
