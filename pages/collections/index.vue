<template>
  <main>
    <Cover
      v-show="
        settings.collection_cover && settings.collection_cover.private_hash
      "
      title="Collections"
      :image="settings.collection_cover.private_hash"
    />
    <section class="mb-30">
      <div
        class="content-wyswyg"
        v-html="settings.collections_description"
      ></div>
    </section>
    <section class="mb-14">
      <span class="flex m-auto mb-30 separator separator-large"></span>
      <h3 class="text-3xl md:text-5xl lg:text-7xl uppercase">
        Our collections
      </h3>
    </section>
    <section class="flex flex-row justify-center md:justify-end -mx-4 md:-mx-0">
      <aside class="hidden md:flex md:flex-row w-1/5">
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
      <div class="flex flex-row flex-wrap w-full md:w-4/5 justify-end">
        <NuxtLink
          class="w-1/2 md:w-1/3 overflow-hidden mb-24 px-4"
          :key="collection.id"
          v-for="collection in data"
          :to="'/collections/' + collection.slug + '-iid' + collection.id"
          :title="collection.name"
        >
          <Item
            v-show="collection.picture && collection.picture.private_hash"
            :id="collection.picture.private_hash"
            :image="collection.picture.data.full_url"
            :name="collection.name"
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
    const fields = ["id,name,slug", "picture.data", "picture.private_hash"];
    const { data } = await $axios.$get(
      process.env.baseUrl + "/collections?fields=" + fields.join(",")
    );

    return { data };
  },
};
</script>
