<template>
  <main>
    <Cover
      v-show="data.cover"
      :title="data.name"
      :image="data.cover.private_hash"
    />
    <section class="lg:mx-10">
      <NuxtLink title="Go Back" to="/collaborations"> ← Go Back </NuxtLink>
    </section>
    <section
      class="flex flex-col-reverse lg:flex-row justify-end my-14 mb-20 lg:mb-14"
    >
      <div class="w-full lg:w-1/4 text-xl px-10" v-if="data.picture">
        <img class="mt-2" :src="data.picture.data.full_url" :alt="data.name" />
      </div>
      <div class="w-full lg:w-2/4 text-xl mb-4 lg:mb-0" v-if="data.biography">
        {{ data.biography }}
      </div>
    </section>
    <section class="-mx-15 mb-20" v-if="data.showcase.length > 0">
      <swiper
        ref="swiperGallery"
        class="swiper gallery"
        :options="swiperOptionsGallery"
        @slideChange="slideChangeInstance('swiperGallery')"
      >
        <swiper-slide :key="gallery.id" v-for="gallery in data.showcase">
          <img class="w-full" :src="gallery.directus_files_id.data.full_url" />
        </swiper-slide>

        <div
          v-show="swiperGalleryPrev"
          class="swiper-gallery-button-prev swiper-button-prev shadow-md"
          slot="button-prev"
          @click="changePrevSlide('swiperGallery')"
        ></div>
        <div
          v-show="swiperGalleryNext"
          class="swiper-gallery-button-next swiper-button-next shadow-md"
          slot="button-next"
          @click="changeNextSlide('swiperGallery')"
        ></div>
      </swiper>
    </section>

    <section class="flex flex-col" v-if="data.products.length > 0">
      <NuxtLink
        class="w-4/5 mb-14 md:mb-20 lg:mb-44 flex flex-col"
        :key="product.id"
        v-for="(product, index) in data.products"
        :class="{
          'ml-auto justify-end text-right': !(index % 2),
        }"
        :to="
          '/collaborations/' +
          data.slug +
          '-iid' +
          data.id +
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
          class="
            flex flex-row
            items-center
            uppercase
            text-2xl
            md:text-3xl
            lg:text-5xl
            mb-4
            md:mb-10
            lg:mb-20
          "
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
import { mapState } from "vuex";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  computed: {
    ...mapState({
      isDesktop: ({ device }) => device.isDesktop,
    }),
  },
  data() {
    return {
      swiperGalleryPrev: false,
      swiperGalleryNext: false,
      swiperOptionsGallery: {
        navigation: {
          nextEl: ".swiper-gallery-button-next",
          prevEl: ".swiper-gallery-button-prev",
        },
        slideToClickedSlide: false,
        preventClicks: false,
        preventClicksPropagation: false,
        resistance: true,
        resistanceRatio: 0.65,
        mousewheel: true,
        slidesPerView: 2.8,
        spaceBetween: 16,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 40,
        on: {
          init: this.swiperInit,
        },
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

    const fields = [
      "*",
      "cover.private_hash",
      "picture.data",
      "showcase.id,showcase.directus_files_id.data",
      "products.id,products.name,products.slug,products.cover.data",
    ];
    const { data } = await $axios.$get(
      process.env.baseUrl + "/artists/" + id + "?fields=" + fields.join(",")
    );

    return { data };
  },
  methods: {
    changeNextSlide(refName) {
      this.$refs[refName].$swiper.slideNext();
    },
    changePrevSlide(refName) {
      this.$refs[refName].$swiper.slidePrev();
    },
    refreshSwiperInstance(refName) {
      this.$refs[refName].$swiper.update();

      this.$nextTick(() => {
        this.slideChangeInstance(refName);
      });
    },
    slideChangeInstance(refName) {
      if (this.isDesktop) {
        this[refName + "Prev"] = !this.$refs[refName].$swiper.isBeginning;
        this[refName + "Next"] = !this.$refs[refName].$swiper.isEnd;
      }
    },
    swiperInit() {
      this.$nextTick(() => {
        this.refreshSwiperInstance("swiperGallery");
      });
    },
  },
};
</script>