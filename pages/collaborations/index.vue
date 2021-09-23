<template>
  <main>
    <section class="mb-30">
      <div class="relative -mx-15">
        <img class="cover" :src="cover.data.full_url" alt="Collaborations" />
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
            Collaborations
          </h2>
        </div>
      </div>
    </section>
    <section class="flex flex-col">
      <NuxtLink
        class="w-4/5 mb-44 flex flex-col"
        :key="collaboration.id"
        v-for="(collaboration, index) in collaborations"
        :class="{
          'ml-auto justify-end': index % 2,
        }"
        :to="
          '/collaborations/' + collaboration.slug + '-iid' + collaboration.id
        "
        :title="'View ' + collaboration.name"
      >
        <!-- even: index % 2,
          odd: !(index % 2), -->
        <h3
          class="flex flex-row items-center uppercase text-5xl mb-20"
          :class="{ 'flex-row-reverse': index % 2 }"
        >
          {{ collaboration.name }}
          <span
            class="flex separator"
            :class="{ 'mr-6': index % 2, 'ml-6': !(index % 2) }"
          ></span>
        </h3>

        <img
          :src="collaboration.cover.data.full_url"
          :alt="collaboration.name"
        />
      </NuxtLink>
    </section>
  </main>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      cover: ({ configs }) => configs.collaboration_cover,
    }),
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      process.env.baseUrl + "/artists?fields=*.*.*"
    );

    console.log("data", data);
    return { collaborations: data };
  },
};
</script>
