// eslint-disable-next-line no-unused-vars
import { RootState } from '~/types';
// eslint-disable-next-line no-unused-vars
import { MutationTree } from 'vuex';

export const strict = false;

export const state = (): RootState => ({
  breed_list: {},
  dog_list: [],
  page_count: 1
});

export const mutations: MutationTree<RootState> = {
  breed_list_update(state: RootState, payload: any): void {
    state.breed_list = { ...payload };
  },
  dog_list_update(state: RootState, payload: any): void {
    state.dog_list = { ...payload };
  },
  page_count_update(state: RootState, payload: any): void {
    state.page_count = Number(payload);
  }
};
