<template lang="pug">
  div
    nav.navbar
      .navbar-brand
        nux-link.navbar-item(to="/breeds") イヌコロ
        span.navbar-burger.burger(data-target="navbarMenu")
          span
          span
          span
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import dogApi from '~/api/dog';
// import { Breed } from '~/types';
// eslint-disable-next-line no-unused-vars
import { State } from 'vuex-class';
// eslint-disable-next-line no-unused-vars
// import { Person } from '~/types';
// import Card from '~/components/Card.vue';

@Component({
  components: {
    // Card
  }
})
export default class extends Vue {
  // @State people!: Person;
  async fetch({ store }: any) {
    const json = await dogApi.breeds();
    this.$store.commit('breed_list_update', json);
  }
}
</script>

<style scoped>
.header {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
