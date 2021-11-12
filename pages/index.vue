<template>
  <main>
    <section class="mb-10">
      <swiper
        ref="swiperMain"
        class="swiper"
        :options="swiperOptionsMain"
        @slideChange="slideChangeInstance('swiperMain')"
      >
        <swiper-slide
          class="flex justify-center items-center"
          :key="banner.id"
          v-for="banner in data.banners"
        >
          <p
            class="
              absolute
              text-3xl
              md:text-5xl
              lg:text-7xl
              uppercase
              text-center
            "
            :class="banner.color === 'dark' ? 'text-black' : 'text-white'"
          >
            {{ banner.name }}
          </p>
          <img class="m-auto" :src="banner.image.data.full_url" />
        </swiper-slide>

        <div
          v-show="swiperMainPrev"
          class="swiper-main-button-prev swiper-button-prev shadow-md"
          slot="button-prev"
          @click="changePrevSlide('swiperMain')"
        ></div>
        <div
          v-show="swiperMainNext"
          class="swiper-main-button-next swiper-button-next shadow-md"
          slot="button-next"
          @click="changeNextSlide('swiperMain')"
        ></div>
      </swiper>
    </section>
    <section class="mb-10 lg:mb-30">
      <h2
        class="
          flex flex-row
          items-center
          uppercase
          text-2xl
          md:text-5xl
          lg:text-7xl
          z-10
          mb-15
        "
      >
        Collections
        <span class="flex ml-6 separator separator-large"></span>
      </h2>
      <NuxtLink
        class="flex w-2/3 md:w-3/5"
        title="See all Collections"
        to="/collections"
      >
        <img
          loading="lazy"
          class="w-full"
          :src="data.collection_cover.data.full_url"
          alt="Collections"
        />
      </NuxtLink>
    </section>
    <section class="-mx-5 md:-mx-10 lg:-mx-15 mb-24 lg:mb-35 text-right">
      <swiper
        ref="swiperCollection"
        class="swiper mb-4"
        :options="swiperOptionsCollection"
        @slideChange="slideChangeInstance('swiperCollection')"
      >
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
              :id="collection.picture.private_hash"
              :image="collection.picture.data.full_url"
              :name="collection.name"
            />
          </NuxtLink>
        </swiper-slide>
        <div
          v-show="swiperCollectionPrev"
          class="swiper-collection-button-prev swiper-button-prev shadow-md"
          slot="button-prev"
          @click="changePrevSlide('swiperCollection')"
        ></div>
        <div
          v-show="swiperCollectionNext"
          class="swiper-collection-button-next swiper-button-next shadow-md"
          slot="button-next"
          @click="changeNextSlide('swiperCollection')"
        ></div>
      </swiper>
      <div class="px-15">
        <NuxtLink
          class="uppercase"
          title="See all Collections"
          to="/collections"
          >See all Collections.
        </NuxtLink>
      </div>
    </section>
    <section class="flex flex-col items-end mb-10 lg:mb-30">
      <h2
        class="
          flex flex-row
          items-center
          uppercase
          text-2xl
          md:text-5xl
          lg:text-7xl
          z-10
          mb-15
        "
      >
        <span class="flex mr-6 separator separator-large"></span>
        Collaborations
      </h2>

      <NuxtLink
        class="flex w-2/3 md:w-3/5"
        title="See all Collaborations"
        to="/collaborations"
      >
        <img
          loading="lazy"
          class="w-full"
          :src="data.collaboration_cover.data.full_url"
          alt="Collaborations"
        />
      </NuxtLink>
    </section>
    <!-- -mx-5 md:-mx-10 lg:-mx-15 -->
    <section class="-mx-5 md:-mx-10 lg:-mx-15 mb-24 lg:mb-35 text-right">
      <swiper
        ref="swiperCollaboration"
        class="swiper mb-4"
        :options="swiperOptionsCollaboration"
        @slideChange="slideChangeInstance('swiperCollaboration')"
      >
        <swiper-slide
          class="flex justify-center items-center item"
          :key="collaboration.id"
          v-for="collaboration in collaborations"
        >
          <NuxtLink
            :to="
              '/collaborations/' +
              collaboration.slug +
              '-iid' +
              collaboration.id
            "
          >
            <Item
              :id="collaboration.cover.private_hash"
              :image="collaboration.cover.data.full_url"
              :name="collaboration.name"
            />
          </NuxtLink>
        </swiper-slide>
        <div
          v-show="swiperCollaborationPrev"
          class="swiper-collaboration-button-prev swiper-button-prev shadow-md"
          slot="button-prev"
          @click="changePrevSlide('swiperCollaboration')"
        ></div>
        <div
          v-show="swiperCollaborationNext"
          class="swiper-collaboration-button-next swiper-button-next shadow-md"
          slot="button-next"
          @click="changeNextSlide('swiperCollaboration')"
        ></div>
      </swiper>
      <div class="px-15">
        <NuxtLink
          class="uppercase"
          title="See all Collaborations"
          to="/collaborations"
        >
          See all Collaborations.
        </NuxtLink>
      </div>
    </section>
    <section class="flex flex-col mb-15">
      <a
        class="mb-4 text-3xl md:text-5xl lg:text-7xl leading-none"
        href="https://www.instagram.com/artandloom/"
        target="_blank"
        rel="noopener"
      >
        <h2 class="flex flex-row items-center">
          @artandloom
          <span class="flex ml-6 separator separator-large"></span>
        </h2>
      </a>
      <p class="uppercase">Social media</p>
    </section>
    <section>
      <!-- LightWidget WIDGET -->
      <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
      <iframe
        src="https://cdn.lightwidget.com/widgets/da81cb722aca53069571ff4f70c852a8.html"
        scrolling="no"
        allowtransparency="true"
        class="lightwidget-widget"
        style="width: 100%; border: 0; overflow: hidden"
      ></iframe>
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
      collections: [],
      collaborations: [],
      swiperMainPrev: false,
      swiperMainNext: false,
      swiperOptionsMain: {
        navigation: {
          nextEl: ".swiper-main-button-next",
          prevEl: ".swiper-main-button-prev",
        },
        slideToClickedSlide: false,
        centerInsufficientSlides: true,
        watchOverflow: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        preventClicks: false,
        preventClicksPropagation: false,
        resistance: true,
        resistanceRatio: 0.65,
        on: {
          init: this.swiperInit,
        },
      },
      swiperCollectionPrev: false,
      swiperCollectionNext: false,
      swiperOptionsCollection: {
        navigation: {
          nextEl: ".swiper-collection-button-next",
          prevEl: ".swiper-collection-button-prev",
        },
        slideToClickedSlide: false,
        preventClicks: false,
        preventClicksPropagation: false,
        resistance: true,
        resistanceRatio: 0.65,
        spaceBetween: 20,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20,
        slidesPerView: 1.8,
        breakpoints: {
          641: {
            slidesPerView: 2.8,
          },
          769: {
            slidesPerView: 3.8,
            spaceBetween: 30,
            slidesOffsetAfter: 40,
            slidesOffsetBefore: 40,
          },
          1025: {
            slidesPerView: 4.8,
            spaceBetween: 40,
            slidesOffsetAfter: 60,
            slidesOffsetBefore: 60,
          },
        },
        on: {
          init: this.swiperInit,
        },
      },
      swiperCollaborationPrev: false,
      swiperCollaborationNext: false,
      swiperOptionsCollaboration: {
        navigation: {
          nextEl: ".swiper-collaboration-button-next",
          prevEl: ".swiper-collaboration-button-prev",
        },
        slideToClickedSlide: false,
        preventClicks: false,
        preventClicksPropagation: false,
        resistance: true,
        resistanceRatio: 0.65,
        spaceBetween: 20,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20,
        slidesPerView: 1.5,
        breakpoints: {
          769: {
            spaceBetween: 30,
            slidesOffsetAfter: 40,
            slidesOffsetBefore: 40,
          },
          1025: {
            slidesPerView: 2.5,
            spaceBetween: 40,
            slidesOffsetAfter: 60,
            slidesOffsetBefore: 60,
          },
        },
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
  async asyncData({ $axios }) {
    const homeFields = `
      banners.id,banners.sort,banners.color,banners.image.data,
      collection_cover.data,
      collaboration_cover.data,
    `;
    const { data } = await $axios.$get(
      process.env.baseUrl + "/home?single=1&fields=" + homeFields
    );

    return { data };
  },
  async mounted() {
    const collectionsFields = `
      id,name,slug,sort,
      picture.private_hash,picture.data.full_url
    `;
    const collaborationsFields = `
      id,name,slug,sort,
      cover.private_hash,cover.data.full_url
    `;
    this.$axios
      .$get(
        process.env.baseUrl +
          "/collections?filter[featured][nempty]&fields=" +
          collectionsFields
      )
      .then((res) => {
        this.collections = res.data;
      });

    this.$axios
      .$get(
        process.env.baseUrl +
          "/artists?filter[featured][nempty]&fields=" +
          collaborationsFields
      )
      .then((res) => {
        this.collaborations = res.data;
      });
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
        this.refreshSwiperInstance("swiperMain");
        this.refreshSwiperInstance("swiperCollection");
        this.refreshSwiperInstance("swiperCollaboration");
      });
    },
  },
};
</script>