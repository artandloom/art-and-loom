<template>
  <article class="relative">
    <div class="name absolute inset-y-0 left-0 w-8 truncate">
      <p class="absolute inset-y-0 h-8 m-auto truncate">
        {{ name }}
      </p>
    </div>
    <img :src="image" :alt="name" />

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
  props: {
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
  width: 100%;
  height: auto;
}
</style>