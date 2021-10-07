<template>
  <main>
    <Cover title="Our Story" :image="data.cover.private_hash" />
    <section class="flex flex-row mb-44">
      <div class="w-2/5">
        <img
          class="min-w-full"
          :src="data.picture.data.full_url"
          alt="Collections"
        />
      </div>
      <div class="w-3/5 pl-32 text-xl content-wyswyg" v-html="data.content"></div>
    </section>
    <section class="flex flex-row mb-44">
      <img class="full-width" :src="data.image.data.full_url" alt="Collections" />
    </section>
  </main>
</template>

<script>
export default {
  layout: "landing",
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      process.env.baseUrl + "/about_us?single=1&fields=*.*.*"
    );

    return { data };
  },
};
</script>

<style scoped>
.separator {
  border-top: 0.5px solid #000000;
  width: 50px;
}
</style>