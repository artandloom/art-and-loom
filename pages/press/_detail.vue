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
            justify-end
          "
        >
          <h2 class="flex flex-row items-center uppercase text-3xl md:text-5xl lg:text-7xl z-10 px-15">
            <span class="flex mr-6 separator"></span>
            {{ data.title }}
          </h2>
        </div>
      </div>
    </section>
    <section class="my-8">
      <NuxtLink title="Go Back" :to="'/press'">
        ← Go Back
      </NuxtLink>
    </section>
    <section class="flex flex-col md:flex-row pt-15">
      <div class="w-full md:w-1/2 md:pr-8">
        <!-- TODO: Add image component -->
        <img
          v-if="data.image"
          :src="data.image.data.full_url"
          :alt="data.title"
        />
      </div>
      <div class="w-full mt-10 md:mt-0 md:w-1/2 md:pl-8">
        <div
          class="mb-4 content-wyswyg"
          v-if="data.excerpt"
          v-html="data.excerpt"
        ></div>

        <a
          v-if="data.link"
          :href="data.link"
          class="underline text-xl font-semibold"
          target="_blank"
          >Visit Site</a
        >

        <img
          class="w-2/3 mt-10 md:w-2/5 md:mt-30"
          v-if="data.image_secondary"
          :src="data.image_secondary.data.full_url"
          :alt="data.title"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: "landing",
  async asyncData({ $axios, route }) {
    const { data } = await $axios.$get(
      process.env.baseUrl +
        "/press?single=1&filter[slug][eq]=" +
        route.params.detail +
        "&fields=title,link,excerpt,image.data,image_secondary.data"
    );

    return { data };
  },
};
</script>
<style scoped>
.press-item img {
  border: 1px solid #c4c4c4;
}
</style>