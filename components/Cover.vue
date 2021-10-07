<template>
  <section v-if="image || title" class="mb-30">
    <div class="relative -mx-15">
      <img
        v-if="image"
        class="cover"
        :alt="alt || title"
        sizes="(max-width: 1400px) 100vw, 1400px"
        :srcset="
          baseUrl + image + imageSrc.xsmall +' 200w,' +
          baseUrl + image + imageSrc.small +' 788w,' +
          baseUrl + image + imageSrc.medium +' 1204w,' +
          baseUrl + image + imageSrc.large +' 1400w'
        "
        :src="baseUrl + image + imageSrc.large"
      />
      <div
        v-if="title"
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
        <h2 class="flex flex-row items-center uppercase text-7xl z-10 px-15">
          <span class="flex mr-6 separator"></span>
          {{ title }}
        </h2>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    baseUrl: "https://art-and-loom-admin.thinkapp.dev/art-and-loom/assets/",
    imageSrc: {
      xsmall: "?w=200&h=90&q=72&f=contain",
      small: "?w=741&h=333&q=72&f=contain",
      medium: "?w=1102&h=496&q=72&f=contain",
      large: "?w=1400&h=630&q=72&f=contain",
    },
  }),
  props: {
    alt: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
  },
};
</script>


<style scoped>
.cover {
    width: 100%;
}
</style>