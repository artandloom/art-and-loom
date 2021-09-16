<template>
  <main>
    <section class="mb-30">
      <div class="relative -mx-15">
        <img class="cover" :src="data.cover.data.full_url" alt="Collections" />
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
            Rug Care & Maintenance
          </h2>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: "landing",
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      process.env.baseUrl + "/rug_care_maintenance?single=1&fields=*.*.*"
    );

    console.log("data", data);
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