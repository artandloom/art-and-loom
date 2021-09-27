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
          <h2 class="flex flex-row items-center uppercase text-7xl z-10 px-15">
            <span class="flex mr-6 separator"></span>
            Legal
          </h2>
        </div>
      </div>
    </section>
    <section
      class="flex flex-row flex-wrap pt-15 -mx-4"
      v-html="data.content"
    ></section>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      process.env.baseUrl + "/legal?single=1&fields=*.*.*"
    );

    console.log("data", data);
    return { data };
  },
};
</script>