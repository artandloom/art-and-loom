<template>
  <main>
    <section class="mb-30">
      <div class="relative">
        <img
          class="cover"
          :src="settings.collection_cover.data.full_url"
          alt="Collections"
        />
        <div
          class="
            text-background
            absolute
            bottom-0
            left-0
            right-0
            flex flex-row
            items-center
            justify-end
          "
        >
          <h2 class="flex flex-row items-center uppercase text-7xl">
            <span class="flex mr-6 separator"></span>
            Collections.
          </h2>
        </div>
      </div>
      <div v-html="settings.collections_description"></div>
    </section>
    <section class="mb-14">
      <span class="flex m-auto mb-30 separator separator-large"></span>
      <h3 class="text-7xl uppercase">Our collections.</h3>
    </section>
    <section class="flex flex-row">
      <aside class="w-1/5">
        <ul>
          <NuxtLink
            class="flex my-7"
            :key="collection.id"
            v-for="collection in data"
            :to="'/collections/' + collection.slug + '-iid' + collection.id"
            :title="collection.name"
          >
            <li class="uppercase">
              {{ collection.name }}
            </li>
          </NuxtLink>
        </ul>
      </aside>
      <div class="flex flex-row flex-wrap w-4/5 justify-end">
        <NuxtLink
          class="w-1/3 overflow-hidden mb-24 px-4"
          :key="collection.id"
          v-for="collection in data"
          :to="'/collections/' + collection.slug + '-iid' + collection.id"
          :title="collection.name"
        >
          <Item
            :name="collection.name"
            :image="collection.picture.data.full_url"
          />
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      settings: ({ configs }) => configs,
    }),
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      process.env.baseUrl + "/collections?fields=*.*.*"
    );

    return { data };
  },
};
</script>
