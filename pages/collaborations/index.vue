<template>
  <main>
    <Cover
      v-show="cover"
      class="mb-10 md:mb-20"
      title="Collaborations"
      :image="cover.private_hash"
    />
    <section class="flex flex-row">
      <aside class="hidden md:flex md:flex-row w-1/5">
        <ul>
          <NuxtLink
            class="flex my-7"
            :key="collaboration.id"
            v-for="collaboration in collaborations"
            :to="
              '/collaborations/' +
              collaboration.slug +
              '-iid' +
              collaboration.id
            "
            :title="collaboration.name"
          >
            <li class="uppercase">
              {{ collaboration.name }}
            </li>
          </NuxtLink>
        </ul>
      </aside>
      <section
        class="flex flex-row flex-wrap w-full md:w-4/5 justify-end md:mt-20"
      >
        <div class="flex flex-col">
          <NuxtLink
            class="w-4/5 mb-14 md:mb-20 lg:mb-44 flex flex-col"
            :key="collaboration.id"
            v-for="(collaboration, index) in collaborations"
            :class="{
              'ml-auto justify-end text-right': index % 2,
            }"
            :to="
              '/collaborations/' +
              collaboration.slug +
              '-iid' +
              collaboration.id
            "
            :title="'View ' + collaboration.name"
          >
            <!-- even: index % 2,
              odd: !(index % 2), -->
            <h3
              class="
                flex flex-row
                items-center
                uppercase
                text-2xl
                md:text-3xl
                lg:text-5xl
                mb-4
                md:mb-10
                lg:mb-20
              "
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
        </div>
      </section>
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
    const fields = ["id,name,slug,", "cover.data"];
    const { data } = await $axios.$get(
      process.env.baseUrl + "/artists?fields=" + fields.join(",")
    );

    return { collaborations: data };
  },
};
</script>
