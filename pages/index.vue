<template>
  <main>
    <section class="mb-10">
      <swiper class="swiper" :options="swiperOptionsMain">
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
          class="w-full"
          :src="data.collection_cover.data.full_url"
          alt="Collections"
        />
      </NuxtLink>
    </section>
    <section class="-mx-5 md:-mx-10 lg:-mx-15 mb-24 lg:mb-35 text-right">
      <swiper class="swiper mb-4" :options="swiperOptionsCollection">
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
          class="w-full"
          :src="data.collaboration_cover.data.full_url"
          alt="Collaborations"
        />
      </NuxtLink>
    </section>
    <!-- -mx-5 md:-mx-10 lg:-mx-15 -->
    <section class="-mx-5 md:-mx-10 lg:-mx-15 mb-24 lg:mb-35 text-right">
      <swiper class="swiper mb-4" :options="swiperOptionsCollaboration">
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
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      swiperOptionsMain: {
        centerInsufficientSlides: true,
        watchOverflow: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        preventClicks: false,
        preventClicksPropagation: false,
        resistance: true,
        resistanceRatio: 0.65,
      },
      swiperOptionsCollection: {
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
          1281: {
            slidesPerView: 5.8,
          },
          1537: {
            slidesPerView: 6.8,
          },
        },
      },
      swiperOptionsCollaboration: {
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

    const { data: collaborations } = await $axios.$get(
      process.env.baseUrl + "/artists?filter[featured][nempty]&fields=*.*.*"
    );

    return { data, collections, collaborations };
  },
};
</script>