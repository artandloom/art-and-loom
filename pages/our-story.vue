<template>
  <main>
    <Cover
      v-show="data.cover"
      title="Our Story"
      :image="data.cover.private_hash"
    />
    <section class="flex flex-col md:flex-row mb-14 md:mb-20 lg:mb-44">
      <div class="w-full md:w-2/5 mb-6 md:mb-0">
        <img
          class="min-w-full"
          :src="data.picture.data.full_url"
          alt="Our Story"
        />
      </div>
      <div
        class="w-full md:w-3/5 md:pl-32 text-xl content-wyswyg"
        v-html="data.content"
      ></div>
    </section>
    <section class="flex flex-row mb-14 md:mb-20 lg:mb-44">
      <img class="min-w-full" :src="data.image.data.full_url" alt="Our Story" />
    </section>
  </main>
</template>

<script>
export default {
  layout: "landing",
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      process.env.baseUrl +
        "/about_us?single=1&fields=content,cover.private_hash,picture.data,image.data"
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