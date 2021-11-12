<template>
  <main>
    <Cover
      title="Material & Techniques"
      :image="data.cover.private_hash"
      alt="Material and Techniques"
    />
    <section class="flex flex-col md:flex-row mb-14 md:mb-20 lg:mb-44">
      <div class="w-full md:w-2/5 mb-4 md:mb-0">
        <img
          class="min-w-full"
          :src="data.bespoke_image.data.full_url"
          :alt="data.bespoke_title"
        />
      </div>
      <div class="w-full md:w-3/5 pl-32 text-xl">
        <h3
          class="mb-2 text-2xl md:text-3xl lg:text-5xl"
          v-if="data.bespoke_title"
        >
          {{ data.bespoke_title }}
        </h3>
        <p v-if="data.bespoke_description">
          {{ data.bespoke_description }}
        </p>
      </div>
    </section>
    <section class="flex flex-col-reverse md:flex-row mb-14 md:mb-20 lg:mb-44">
      <div class="w-full md:w-2/5 pr-32 text-xl">
        <h3
          class="mb-2 text-2xl md:text-3xl lg:text-5xl"
          v-if="data.custom_title"
        >
          {{ data.custom_title }}
        </h3>
        <p v-if="data.custom_description">
          {{ data.custom_description }}
        </p>
      </div>
      <div class="w-full md:w-3/5">
        <img
          class="min-w-full mb-4 md:mb-0"
          :src="data.custom_image.data.full_url"
          :alt="data.custom_title"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: "landing",
  async asyncData({ $axios }) {
    const fields = [
      "*",
      "cover.private_hash",
      "bespoke_image.data",
      "custom_image.data",
    ];
    const { data } = await $axios.$get(
      process.env.baseUrl + "/material?single=1&fields=" + fields.join(",")
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