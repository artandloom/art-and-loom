<template>
  <main>
    <section class="mb-30">
      <div class="relative -mx-15">
        <img
          class="cover"
          :src="data.cover.data.full_url"
          alt="Material and Techniques"
        />
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
          <h2 class="flex flex-row items-center uppercase text-7xl z-10 px-15">
            <span class="flex mr-6 separator"></span>
            Material & Techniques
          </h2>
        </div>
      </div>
    </section>
    <section class="flex flex-row mb-44">
      <div class="w-2/5">
        <img
          class="cover"
          :src="data.bespoke_image.data.full_url"
          alt="Collections"
        />
      </div>
      <div class="w-3/5 pl-32 text-xl">
        <h3 class="mb-2 text-5xl" v-if="data.bespoke_title">
          {{ data.bespoke_title }}
        </h3>
        <p v-if="data.bespoke_description">
          {{ data.bespoke_description }}
        </p>
      </div>
    </section>
    <section class="flex flex-row mb-44">
      <div class="w-2/5 pr-32 text-xl">
        <h3 class="mb-2 text-5xl" v-if="data.custom_title">
          {{ data.custom_title }}
        </h3>
        <p v-if="data.custom_description">
          {{ data.custom_description }}
        </p>
      </div>
      <div class="w-3/5">
        <img
          class="cover"
          :src="data.custom_image.data.full_url"
          alt="Collections"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: "landing",
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      process.env.baseUrl + "/material?single=1&fields=*.*.*"
    );

    return { data };
  },
};
</script>

<style scoped>
.separator {
  border-top: 0.5px solid #000000;
  width: 50px;
}
</style>