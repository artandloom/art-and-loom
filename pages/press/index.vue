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
          <h2 class="flex flex-row items-center uppercase text-3xl md:text-5xl lg:text-7xl z-10 px-15">
            Press
            <span class="flex ml-6 separator"></span>
          </h2>
        </div>
      </div>
    </section>
    <section class="flex flex-row flex-wrap pt-15 -mx-4">
      <div class="w-full md:w-1/2 lg:w-1/3 p-4 press-item" v-for="item in data" :key="item.id">
        <NuxtLink :to="'/press/' + item.slug">
          <!-- TODO: Add image component -->
          <img
            class="w-full"
            :alt="item.title"
            sizes="(max-width: 500px) 100vw, 500px"
            :srcset="
              baseUrl + item.cover.private_hash + imageSrc.xsmall +' 200w,' +
              baseUrl + item.cover.private_hash + imageSrc.small +' 602w,' +
              baseUrl + item.cover.private_hash + imageSrc.medium +' 861w,' +
              baseUrl + item.cover.private_hash + imageSrc.large +' 1080w'
            "
            :src="baseUrl + item.cover.private_hash + imageSrc.large"
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
      process.env.baseUrl + "/press?fields=*.*.*"
    );

    return { data };
  },
  data: () => ({
    baseUrl: "https://admin.artandloom.com/art-and-loom/assets/",
    imageSrc: {
      xsmall: "?w=200&h=250&q=72&f=crop",
      small: "?w=602&h=753&q=72&f=crop",
      medium: "?w=861&h=1076&q=72&f=crop",
      large: "?w=1080&h=1350&q=72&f=crop",
    },
  }),
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
