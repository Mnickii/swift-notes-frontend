import Vue from 'vue';
import Vuex from 'vuex';
import SuiVue from 'semantic-ui-vue';

import notes from './notes';

Vue.use(Vuex);
Vue.use(SuiVue);

export default new Vuex.Store({
  modules: {
    notes,
  },
});
