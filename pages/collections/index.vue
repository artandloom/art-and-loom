<template>
  <main>
    <section class="mb-30 pb-30">
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
          <h2 class="flex flex-row items-center uppercase">
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
            class="m-7"
            :key="collection.id"
            v-for="collection in data"
            :to="'/collections/' + collection.slug + '-iid' + collection.id"
            :title="collection.name"
          >
            <li class="font-semibold uppercase">
              {{ collection.name }}
            </li>
          </NuxtLink>
        </ul>
      </aside>
      <div class="flex flex-row flex-wrap w-4/5">
        <NuxtLink
          class="w1/3"
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
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      process.env.baseUrl + "/collections?fields=*.*.*"
    );

    const { data: settings } = await $axios.$get(
      process.env.baseUrl + "/settings?single=1&fields=*.*.*"
    );

    console.log("data", settings);
    return { data, settings };
  },
};
</script>
<style scoped>
h2 {
  font-size: 6.875rem;
  z-index: 1;
}
.separator {
  border-top: 0.5px solid #000000;
  width: 50px;
}
.separator-large {
  width: 200px;
}
.text-background:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 78.12%
  );
}
</style>