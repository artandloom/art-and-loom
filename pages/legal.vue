<template>
  <main>
    <section>
      <section class="flex flex-row justify-end">
        <h2
          class="
            text-3xl
            md:text-5xl
            lg:text-7xl
            flex flex-row
            items-center
            uppercase
            text-right
          "
        >
          <span class="flex mr-6 separator"></span>
          Legal
        </h2>
      </section>
    </section>
    <section
      class="flex flex-row flex-wrap pt-15 content-wyswyg"
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

    return { data };
  },
};
</script>