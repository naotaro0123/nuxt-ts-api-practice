<template lang="pug">
section.container
  .columns.is-multiline
    .column.is-2(v-for="(item, i) in breed_list", v-bind:key="i")
      nuxt-link.button(:to="{ path: 'dogs/' + i }") {{i}}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import dogApi from '~/api/DogApi';
import { mapState } from 'vuex';

@Component({
  computed: mapState(['breed_list'])
})
export default class extends Vue {
  async fetch({ store }: any) {
    const json = await dogApi.breeds();
    store.commit('breed_list_update', json);
  }
}
</script>
