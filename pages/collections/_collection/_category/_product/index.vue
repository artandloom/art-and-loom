<template>
  <div>
    <main>
      <Cover class="px-15" :image="data.cover.private_hash" :alt="data.name" />

      <section class="flex flex-row justify-end">
        <h2 class="flex flex-row items-center uppercase text-7xl z-10">
          <span class="flex mr-6 separator"></span>
          {{ data.name }}
        </h2>
      </section>
      <section class="flex flex-row mt-24">
        <div class="w-2/4 pr-4">
          <img
            class="min-w-full"
            :src="data.picture.data.full_url"
            alt="Collections"
          />
        </div>
        <div class="w-2/4 pl-4">
          <h3 v-if="data.category" class="uppercase mt-16 mb-9">
            Collections {{ data.category.collection.name }}
          </h3>
          <div class="mb-4 content-wyswyg" v-html="data.information" />
          <p
            class="underline mb-4 cursor-pointer select-none"
            @click="toggleModal()"
          >
            Request information
          </p>
          <a class="underline" href="tel:+19177670078">Call Us 917.767.0078</a>
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
      <section class="-mx-15">
        <swiper class="swiper gallery" :options="swiperOptionsGallery">
          <swiper-slide :key="gallery.id" v-for="gallery in data.gallery">
            <img :src="gallery.directus_files_id.data.full_url" />
          </swiper-slide>
        </swiper>
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
            w-4/5
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
          <section class="w-10/12 flex flex-row my-8 mx-auto">
            <div class="w-2/4 pr-4">
              <img
                class="min-w-full"
                :src="data.picture.data.full_url"
                alt="Collections"
              />
            </div>
            <div class="w-2/4 pl-4">
              <h2
                class="
                  text-4xl
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
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      showModal: false,
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

    return { data };
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