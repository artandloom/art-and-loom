<template>
  <main>
    <CoolLightBox
      :items="images"
      :index="sliderIndex"
      @close="sliderIndex = null"
    >
    </CoolLightBox>

    <section>
      <div class="relative -mx-15">
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
          <h2
            class="
              flex flex-row
              items-center
              uppercase
              text-3xl
              md:text-5xl
              lg:text-7xl
              z-10
              px-15
            "
          >
            <span class="flex mr-6 separator"></span>
            Gallery
          </h2>
        </div>
      </div>
    </section>
    <section class="flex flex-row flex-wrap pt-15 -mx-4">
      <div
        class="w-full md:w-1/2 lg:w-1/3 p-4 press-item"
        v-for="(item, index) in data"
        :key="item.id"
        @click="updateIndexImage(index)"
      >
        <!-- TODO: Add image component -->
        <img
          class="w-full"
          :alt="item.name"
          sizes="(max-width: 500px) 100vw, 500px"
          :srcset="
            baseUrl +
            item.image.private_hash +
            imageSrc.xsmall +
            ' 200w,' +
            baseUrl +
            item.image.private_hash +
            imageSrc.small +
            ' 458w,' +
            baseUrl +
            item.image.private_hash +
            imageSrc.medium +
            ' 500w'
          "
          :src="baseUrl + item.image.private_hash + imageSrc.medium"
        />
      </div>
    </section>
  </main>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
  components: {
    CoolLightBox,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      process.env.baseUrl +
        "/gallery?fields=id,name,image.private_hash,image.data"
    );

    const images = [];

    data.map((item) => {
      images.push(item.image.data.full_url);
    });

    return { data, images };
  },
  data: () => ({
    baseUrl: "https://admin.artandloom.com/art-and-loom/assets/",
    imageSrc: {
      xsmall: "?w=200&h=200&q=72&f=crop",
      small: "?w=458&h=458&q=72&f=crop",
      medium: "?w=500&h=500&q=72&f=crop",
    },
    sliderIndex: null,
  }),
  methods: {
    updateIndexImage(index) {
      this.sliderIndex = index;
    },
  },
};
</script>
<style scoped>
a {
  display: block;
}
.press-item img {
  border: 1px solid #c4c4c4;
}
</style>