<template>
  <main>
    <Header />
    <section>
      <swiper class="swiper" :options="swiperOptionsMain">
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
    <section class="px-15 mb-30">
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
    <section class="px-15 mb-35 text-right">
      <swiper class="swiper mb-4" :options="swiperOptionsItem">
        <swiper-slide
          class="flex justify-center items-center item"
          :key="collection.id"
          v-for="collection in collections"
        >
          <NuxtLink
            :title="collection.name"
            :to="'/collections/' + collection.slug + '-iid' + collection.id"
          >
            <Item
              :name="collection.name"
              :image="collection.picture.data.full_url"
            />
          </NuxtLink>
        </swiper-slide>
      </swiper>
      <NuxtLink class="uppercase" title="Collections" to="/collections"
        >See all Collections.</NuxtLink
      >
    </section>
    <section class="flex flex-col items-end px-15 mb-30">
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
    <section class="mb-35">
      <swiper class="swiper" :options="swiperOptionsItem">
        <swiper-slide
          class="flex justify-center items-center item"
          :key="collection.id"
          v-for="collection in collections"
        >
          <NuxtLink
            :to="'/collections/' + collection.slug + '-iid' + collection.id"
          >
            <Item
              :name="collection.name"
              :image="collection.picture.data.full_url"
            />
          </NuxtLink>
        </swiper-slide>
      </swiper>
    </section>
    <Footer />
  </main>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      swiperOptionsMain: {
        preventClicks: false,
        preventClicksPropagation: false,
        resistance: true,
        resistanceRatio: 0.65,
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
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      process.env.baseUrl + "/home?single=1&fields=*.*.*"
    );

    const { data: collections } = await $axios.$get(
      process.env.baseUrl + "/collections?filter[featured][nempty]&fields=*.*.*"
    );

    // const { data: collaborations } = await $axios.$get(
    //   process.env.baseUrl +
    //     "/collaborations?filter[featured][nempty]&fields=*.*.*"
    // );
    console.log("data", collections);
    // collaborations
    return { data, collections };
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
.item {
  width: 25% !important;
}
</style>