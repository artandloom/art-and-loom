<template>
  <main>
    <section>
      <div class="relative -mx-15">
        <div
          class="
            text-background
            absolute
            bottom-0
            left-0
            right-0
            flex flex-row
            items-center
            justify-start
          "
        >
          <h2 class="flex flex-row items-center uppercase text-7xl z-10 px-15">
            Press
            <span class="flex ml-6 separator"></span>
          </h2>
        </div>
      </div>
    </section>
    <section class="flex flex-row flex-wrap pt-15 -mx-4">
      <div class="w-1/3 m-4 press-item" v-for="item in data" :key="item.id">
        <NuxtLink :to="'/press/' + item.slug">
          <!-- TODO: Add image component -->
          <img :src="item.cover.data.full_url" :alt="item.title" />
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      process.env.baseUrl + "/press?fields=*.*.*"
    );

    return { data };
  },
};
</script>
<style scoped>
a {
  display: block;
}
.press-item img {
  border: 1px solid #c4c4c4;
}
</style>
