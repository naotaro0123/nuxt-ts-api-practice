/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { Breed, Dog } from '~/types';

export interface RootState {
  breed_list: Breed;
  dog_list: Dog[];
  page_count: number;
}
