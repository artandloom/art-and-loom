<template>
  <div>
    <Header />
    Collection detail params: {{ $route.params }}
    <Footer />
  </div>
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
