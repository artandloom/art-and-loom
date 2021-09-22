<template>
  <main>
    <section class="mb-30">
      <div class="relative -mx-15">
        <img class="cover" :src="data.cover.data.full_url" :alt="data.name" />
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
          <h2 class="flex flex-row items-center uppercase text-7xl px-15">
            <span class="flex mr-6 separator"></span>
            {{ data.name }}
          </h2>
        </div>
      </div>
    </section>
    <section class="flex flex-row justify-end my-24">
      <div class="w-2/4 text-xl" v-if="data.biography">
        {{ data.biography }}
      </div>
    </section>
    <section class="-mx-15 mb-20" v-if="data.showcase.length > 0">
      <swiper class="swiper gallery" :options="swiperOptionsGallery">
        <swiper-slide :key="gallery.id" v-for="gallery in data.showcase">
          <img class="w-full" :src="gallery.directus_files_id.data.full_url" />
        </swiper-slide>
      </swiper>
    </section>

    <section class="flex flex-col" v-if="data.products.length > 0">
      <NuxtLink
        class="w-4/5 mb-44 flex flex-col"
        :key="product.id"
        v-for="(product, index) in data.products"
        :class="{
          'ml-auto justify-end': !(index % 2),
        }"
        :to="
          '/collaborations/' +
          data.slug +
          '/' +
          product.slug +
          '-iid' +
          product.id
        "
        :title="'View ' + product.name"
      >
        <!-- even: index % 2,
          odd: !(index % 2), -->
        <h3
          class="flex flex-row items-center uppercase text-5xl mb-20"
          :class="{ 'flex-row-reverse': !(index % 2) }"
        >
          {{ product.name }}
          <span
            class="flex separator"
            :class="{ 'ml-6': index % 2, 'mr-6': !(index % 2) }"
          ></span>
        </h3>
        <img :src="product.cover.data.full_url" :alt="product.name" />
      </NuxtLink>
    </section>
  </main>
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
        slidesPerView: 2.8,
        spaceBetween: 16,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 40,
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
    const matcher = route.params.artist.match(/-iid(\d+)/);

    let id = null;
    if (matcher && matcher.length > 1) {
      id = matcher[1];
    }
    const { data } = await $axios.$get(
      process.env.baseUrl + "/artists/" + id + "?fields=*.*.*"
    );

    console.log("artist", data);
    return { data };
  },
};
</script>