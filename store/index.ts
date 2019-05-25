// eslint-disable-next-line no-unused-vars
import { RootState, Breed } from '~/types';
// eslint-disable-next-line no-unused-vars
import { MutationTree, ActionTree } from 'vuex';

export const state = (): RootState => ({
  breed_list: {}
});

export const mutations: MutationTree<RootState> = {
  breed_list_update(state: RootState, payload: any): void {
    state.breed_list = { ...payload };
  }
};

// export const actions: ActionTree<RootState, RootState> = {
//   async nuxtServerInit({ commit }, context) {
//     let people: Person[] = [];

//     // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
//     people = context.isStatic
//       ? localRandomData
//       : await context.app.$axios.$get('./random-data.json');

//     commit('setPeople', people.slice(0, 10));
//   }
// };
