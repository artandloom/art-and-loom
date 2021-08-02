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
    <section class="mb-35">
      <swiper class="swiper" :options="swiperOptionItem">
        <swiper-slide
          class="flex justify-center items-center item"
          :key="collection.id"
          v-for="collection in collections"
        >
          <Item
            :name="collection.name"
            :image="collection.picture.data.full_url"
          />
          <!-- style="width: 300px" -->
        </swiper-slide>
      </swiper>
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
      <swiper class="swiper" :options="swiperOptionItem">
        <swiper-slide
          class="flex justify-center items-center item"
          :key="collection.id"
          v-for="collection in collections"
        >
          <Item
            :name="collection.name"
            :image="collection.picture.data.full_url"
          />
          <!-- style="width: 300px" -->
        </swiper-slide>
      </swiper>
    </section>
    <Footer />
  </main>
</template>
<script>
import { directive } from "vue-awesome-swiper";

export default {
  data() {
    return {
      swiperOptionItem: {
        slidesPerView: "auto",
        spaceBetween: 8,
      },
    };
  },
  directives: {
    swiper: directive,
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