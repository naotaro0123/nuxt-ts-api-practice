<template lang="pug">
section.container
  .columns.is-multiline
    .column.is-2(v-for="(item, i) in dog_list", v-bind:key="i")
      img(:src="item.url")
      span.tag.is-danger(v-if="i < 3") NEW
      a.button.is-warning.is-small(@click="item.like += 1")
        span いいね！{{item.like}}件
  nav.pagination(role="navigation", aria-label="pagination")
    ul.pagination-list
      li(v-for="count in page_count", :key="count")
        nuxt-link.pagination-link(:class="{'is-current': current === count }", :to="{path: '?page=' + count }" append) {{ count }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import dogApi from '~/api/DogApi';
import { mapState } from 'vuex';

@Component({
  computed: mapState(['page_count', 'dog_list']),
  watchQuery: ['page']
})
export default class extends Vue {
  public current!: number;

  validate({ params }: any) {
    return /^[a-z]+$/.test(params.breed);
  }

  asyncData(context: any) {
    return {
      current: Number(context.query.page) || 1
    };
  }

  async fetch({ store, params, query }: any) {
    const page = Number(query.page) || 1;
    const start = 20 * (page - 1);
    const end = start + 20;
    const json = await dogApi.dogs(params.breed);
    store.commit('page_count_update', Math.ceil(json.length / 20));
    store.commit('dog_list_update', json.slice(start, end));
  }
}
</script>
