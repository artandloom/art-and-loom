<template>
  <article class="relative">
    <div class="absolute inset-y-0 left-0 w-8 truncate">
      <p class="absolute inset-y-0 h-8 m-auto truncate">
        {{ name }}
      </p>
    </div>
    <img :src="image" :alt="name" />
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
    // imageSrc: {
    //   type: Object,
    //   default: () => ({}),
    // },
  },
};
</script>


<style scoped>
p {
  transform-origin: 0 50%;
  transform: rotate(-90deg) translate(-50%, 50%);
  font-size: 1em;
  line-height: 2em;
}
img {
  margin-left: 30px;
}
</style>