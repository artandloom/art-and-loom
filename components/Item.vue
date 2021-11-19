<template>
  <article class="relative flex items-center justify-center h-full">
    <div class="name absolute inset-y-0 left-0 w-8 truncate">
      <p class="absolute inset-y-0 h-8 m-auto truncate uppercase">
        {{ hideName ? "" : name }}
      </p>
    </div>
    <img
      v-if="id"
      :alt="name"
      sizes="(max-width: 1400px) 100vw, 1400px"
      :srcset="
        baseUrl +
        id +
        imageSrc.xsmall +
        ' 200w,' +
        baseUrl +
        id +
        imageSrc.small +
        ' 788w,' +
        baseUrl +
        id +
        imageSrc.medium +
        ' 1204w,' +
        baseUrl +
        id +
        imageSrc.large +
        ' 1400w'
      "
      :src="baseUrl + id + imageSrc.large"
    />

    <div
      v-if="tag"
      class="absolute z-10 top-2 right-2 bg-gray-100 p-2 rounded text-sm"
    >
      {{ tag }}
    </div>
  </article>
</template>
<script>
export default {
  data: () => ({
    baseUrl: "https://admin.artandloom.com/art-and-loom/assets/",
    imageSrc: {
      xsmall: "?w=200&h=252&q=72&f=contain",
      small: "?w=741&h=935&q=72&f=contain",
      medium: "?w=1148&h=1448&q=72&f=contain",
      large: "?w=1400&h=1766&q=72&f=contain",
    },
  }),
  props: {
    id: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    tag: {
      type: String,
      default: null,
    },
    hideName: {
      type: Boolean,
      default: false,
    },
    // imageSrc: {
    //   type: Object,
    //   default: () => ({}),
    // },
  },
};
</script>


<style scoped>
article {
  padding-left: 30px;
}
.name p {
  transform-origin: 0 50%;
  transform: rotate(-90deg) translate(-50%, 50%);
  font-size: 1em;
  line-height: 2em;
}
img {
  /* width: 100%; */
  /* height: auto; */
  height: 100%;
  object-fit: contain;
  width: auto;
}
</style>