<template>
  <main>
    <Header />
    <section>
      <swiper class="swiper">
        <swiper-slide
          class="flex justify-center items-center"
          :key="banner.id"
          v-for="banner in data.banners"
        >
          <p
            class="absolute text-7xl uppercase"
            :class="banner.color === 'dark' ? 'text-black' : 'text-white'"
          >
            {{ banner.name }}
          </p>
          <img class="m-auto" :src="banner.image.data.full_url" />
        </swiper-slide>
      </swiper>
    </section>
    <section class="px-15">
      <h2 class="flex flex-row items-center uppercase">
        Collections.
        <span class="flex ml-6 separator"></span>
      </h2>
      <img
        class="w-4/5"
        :src="data.collection_cover.data.full_url"
        alt="Collections"
      />
    </section>
    <div class="mb-35">Slider</div>
    <section class="flex flex-col items-end px-15">
      <h2 class="flex flex-row items-center uppercase">
        <span class="flex mr-6 separator"></span>
        Collaborations.
      </h2>
      <img
        class="w-4/5"
        :src="data.collaboration_cover.data.full_url"
        alt="Collaborations"
      />
    </section>
    <div class="mb-35">Slider</div>
    <Footer />
  </main>
</template>
<script>
import { directive } from "vue-awesome-swiper";

export default {
  directives: {
    swiper: directive,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      process.env.baseUrl + "/home?single=1&fields=*.*.*"
    );
    console.log("data", data);
    console.log("process.env.baseUrl", process.env.baseUrl);
    return { data };
  },
};
</script>
<style scoped>
h2 {
  font-size: 6.875rem;
}
.separator {
  border-top: 0.5px solid #000000;
  width: 200px;
}
</style>