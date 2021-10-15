<template>
  <div>
    <main>
      <Cover class="px-15" :image="data.cover.private_hash" :alt="data.name" />

      <section class="flex flex-row justify-end">
        <h2
          class="
            flex flex-row
            items-center
            uppercase
            text-3xl
            md:text-5xl
            lg:text-7xl
            z-10
            text-right
          "
        >
          <span class="flex mr-6 separator"></span>
          {{ data.name }}
        </h2>
      </section>
      <section class="flex flex-col lg:flex-row mt-24">
        <div class="w-full lg:w-2/4 lg:pr-4">
          <img
            class="min-w-full"
            :src="data.picture.data.full_url"
            :alt="data.name"
          />
        </div>
        <div class="w-full lg:w-2/4 lg:pl-4">
          <h3 v-if="data.category" class="uppercase mt-16 mb-9">
            {{ data.category.collection.name }} Collection
          </h3>
          <div class="mb-4 content-wyswyg" v-html="data.information" />
          <p
            class="underline mb-4 cursor-pointer select-none"
            @click="toggleModal()"
          >
            Request information
          </p>
          <a
            class="underline"
            v-if="configs.contact_phone"
            :href="
              'tel:' + (configs.contact_phone_link || configs.contact_phone)
            "
            target="_blank"
            rel="noopener"
          >
            {{ configs.contact_phone }}
          </a>
        </div>
      </section>
      <section class="mt-8 mb-24">
        <NuxtLink
          title="Go Back"
          :to="
            '/collections/' +
            $route.params.collection +
            '/' +
            $route.params.category
          "
        >
          ← Go Back
        </NuxtLink>
      </section>
      <section
        class="-mx-5 md:-mx-10 lg:-mx-15 mb-24 lg:mb-35"
        v-if="data.gallery.length > 0"
      >
        <swiper class="swiper gallery" :options="swiperOptionsGallery">
          <swiper-slide :key="gallery.id" v-for="gallery in data.gallery">
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              :srcset="
                baseUrl +
                gallery.directus_files_id.private_hash +
                imageSrc.xsmall +
                ' 200w,' +
                baseUrl +
                gallery.directus_files_id.private_hash +
                imageSrc.small +
                ' 788w,' +
                baseUrl +
                gallery.directus_files_id.private_hash +
                imageSrc.medium +
                ' 1204w,' +
                baseUrl +
                gallery.directus_files_id.private_hash +
                imageSrc.large +
                ' 1400w'
              "
              :src="
                baseUrl +
                gallery.directus_files_id.private_hash +
                imageSrc.large
              "
            />
          </swiper-slide>
        </swiper>
      </section>
      <section
        class="-mx-5 md:-mx-10 lg:-mx-15 mb-24 lg:mb-35 text-right"
        v-if="recommendedProducts.length > 0"
      >
        <swiper
          class="swiper products-recommended mb-4"
          :options="swiperOptionsProducts"
        >
          <swiper-slide
            class="flex justify-center items-center item"
            :key="product.id"
            v-for="product in recommendedProducts"
          >
            <!-- '/collections/' +
            $route.params.collection +
            '/' +
            $route.params.category -->
            <NuxtLink
              :title="product.name"
              :to="
                '/collections/' +
                $route.params.collection +
                '/' +
                $route.params.category +
                '/' +
                product.slug +
                '-iid' +
                product.id
              "
            >
              <Item
                :id="product.picture.private_hash"
                :image="product.picture.data.full_url"
                :name="product.name"
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
    </main>

    <div
      v-show="showModal"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block
          sm:p-0
        "
      >
        <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
        <div
          class="
            inline-block
            bg-white
            overflow-scroll
            transform
            transition-all
            sm:my-8
            w-full
            md:w-4/5
          "
        >
          <header class="p-4 flex flex-row-reverse">
            <button
              @click="toggleModal()"
              type="button"
              class="
                rounded-full
                p-2
                focus:outline-none
                hover:bg-gray-200
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-gray-50
              "
            >
              <img src="/icons/close-button.svg" alt="Instagram" />
            </button>
          </header>
          <section class="w-10/12 flex flex-col md:flex-row my-8 mx-auto">
            <div class="w-full md:w-2/4 md:pr-4">
              <img
                class="min-w-full"
                :src="data.picture.data.full_url"
                :alt="data.name"
              />
            </div>
            <div class="w-full md:w-2/4 md:pl-4">
              <h2
                class="
                  text-2xl
                  md:text-3xl
                  lg:text-4xl
                  flex flex-row
                  items-center
                  justify-end
                  uppercase
                  mb-10
                "
              >
                <span class="flex mr-6 separator"></span>
                {{ data.name }}
              </h2>

              <form>
                <div class="mb-5 text-right">
                  <label for="name" class="sr-only">Name</label>
                  <input
                    id="name"
                    name="email"
                    autocomplete="name"
                    required
                    class="
                      lining-nums
                      appearance-none
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      placeholder-gray-300
                      text-gray-900
                      rounded-sm
                      focus:outline-none
                      focus:ring-black
                      focus:border-black
                    "
                    placeholder="Name"
                  />
                </div>
                <div class="mb-5">
                  <label for="email-address" class="sr-only"
                    >Email address</label
                  >
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    class="
                      lining-nums
                      appearance-none
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      placeholder-gray-300
                      text-gray-900
                      rounded-sm
                      focus:outline-none
                      focus:ring-black
                      focus:border-black
                    "
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label for="message" class="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="8"
                    class="
                      appearance-none
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      placeholder-gray-300
                      text-gray-900
                      rounded-sm
                      focus:outline-none
                      focus:ring-black
                      focus:border-black
                    "
                    placeholder="Message"
                  />
                </div>

                <button
                  type="submit"
                  class="
                    py-2
                    px-4
                    mt-12
                    hover:bg-gray-300
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-gray-50
                    rounded
                    uppercase
                  "
                >
                  Send
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  computed: {
    ...mapState({
      configs: ({ configs }) => configs,
    }),
  },
  data() {
    return {
      baseUrl: "https://admin.artandloom.com/art-and-loom/assets/",
      imageSrc: {
        xsmall: "?w=200&h=252&q=72&f=contain",
        small: "?w=741&h=935&q=72&f=contain",
        medium: "?w=1148&h=1448&q=72&f=contain",
        large: "?w=1400&h=1766&q=72&f=contain",
      },
      showModal: false,
      swiperOptionsGallery: {
        watchOverflow: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        preventClicks: false,
        preventClicksPropagation: false,
        resistance: true,
        resistanceRatio: 0.65,
        spaceBetween: 20,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20,
        slidesPerView: 2.1,
        breakpoints: {
          769: {
            slidesOffsetAfter: 40,
            slidesOffsetBefore: 40,
          },
          1025: {
            slidesPerView: 3.1,
            spaceBetween: 40,
            slidesOffsetAfter: 60,
            slidesOffsetBefore: 60,
          },
        },
      },
      swiperOptionsProducts: {
        watchOverflow: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
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
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  async asyncData({ $axios, route }) {
    const productMatcher = route.params.product.match(/-iid(\d+)/);

    let productId = null;
    if (productMatcher && productMatcher.length > 1) {
      productId = productMatcher[1];
    }
    const { data } = await $axios.$get(
      process.env.baseUrl + "/products/" + productId + "?fields=*.*.*"
    );

    const artistMatcher = route.params.category.match(/-iid(\d+)/);

    let artistId = null;
    if (artistMatcher && artistMatcher.length > 1) {
      artistId = artistMatcher[1];
    }
    const { data: artistProducts } = await $axios.$get(
      process.env.baseUrl + "/categories/" + artistId + "?fields=products.*.*"
    );

    const recommendedProducts = artistProducts.products.filter(
      (product) => product.id !== Number(productId)
    );

    return { data, recommendedProducts };
  },
  methods: {
    request() {
      this.showModal = !this.showModal;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>