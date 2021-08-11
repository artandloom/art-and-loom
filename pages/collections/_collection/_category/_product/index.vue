<template>
  <div>
    <Header />
    <main class="px-15 pb-30">
      <section class="mb-30">
        <img class="w-full" :src="data.cover.data.full_url" alt="Collections" />
      </section>
      <section class="flex flex-row justify-end">
        <h2 class="text-7xl flex flex-row items-center uppercase">
          <span class="flex mr-6 separator"></span>
          {{ data.name }}
        </h2>
      </section>
      <section class="flex flex-row my-24">
        <div class="w-2/4">
          <img
            class="cover"
            :src="data.picture.data.full_url"
            alt="Collections"
          />
        </div>
        <div class="w-2/4">
          <h3 class="uppercase mt-16 mb-9">Collections shape.</h3>
          <div class="mb-4" v-html="data.information"></div>
          <p
            class="underline mb-4 cursor-pointer select-none"
            @click="request()"
          >
            Request information
          </p>
          <a class="underline" href="tel:+19177670078">Call Us 917.767.0078</a>
        </div>
      </section>
      <section class="-mx-15">
        <swiper class="swiper gallery" :options="swiperOptionsGallery">
          <swiper-slide :key="gallery.id" v-for="gallery in data.gallery">
            <img :src="gallery.directus_files_id.data.full_url" />
          </swiper-slide>
        </swiper>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      swiperOptionsGallery: {
        preventClicks: false,
        preventClicksPropagation: false,
        resistance: true,
        resistanceRatio: 0.65,
        slidesPerView: 1.1,
        spaceBetween: 40,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 60,
      },
      swiperOptionsItem: {
        slidesPerView: "auto",
        spaceBetween: 8,
        preventClicks: false,
        preventClicksPropagation: false,
        resistance: true,
        resistanceRatio: 0.65,
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  async asyncData({ $axios, route }) {
    const matcher = route.params.product.match(/-iid(\d+)/);

    let id = null;
    if (matcher && matcher.length > 1) {
      id = matcher[1];
    }
    const { data } = await $axios.$get(
      process.env.baseUrl + "/products/" + id + "?fields=*.*.*"
    );

    console.log("products", data);
    return { data };
  },
  methods: {
    request() {
      console.log("aaaa");
    },
  },
};
</script>
<style scoped>
.separator {
  border-top: 0.5px solid #000000;
  width: 100px;
}
</style>