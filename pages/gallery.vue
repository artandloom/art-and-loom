<template>
  <main>
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
          <h2 class="flex flex-row items-center uppercase text-7xl px-15">
            <span class="flex mr-6 separator"></span>
            Gallery
          </h2>
        </div>
      </div>
    </section>
    <section class="flex flex-row pt-15 -mx-4">
      <div
        class="w-1/3 m-4 press-item flex flex-row justify-center"
        v-for="item in data"
        :key="item.id"
      >
        <!-- TODO: Add image component -->
        <img :src="item.image.data.full_url" :alt="item.name" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      process.env.baseUrl + "/gallery?fields=*.*.*"
    );

    console.log("data", data);
    return { data };
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