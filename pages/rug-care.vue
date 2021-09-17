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
    <section class="flex flex-row mb-44">
      <div class="w-2/5">
        <img
          v-if="data.image_left_first"
          class="cover"
          :src="data.image_left_first.data.full_url"
          alt="Collections"
        />
      </div>
      <div class="w-3/5 pl-32 text-xl">
        <p v-if="data.description">
          {{ data.description }}
        </p>
      </div>
    </section>
    <section class="flex flex-row mb-44">
      <div class="w-2/5 pr-32 text-xl">
        <h3 class="mb-2 text-5xl" v-if="data.padding_title">
          {{ data.padding_title }}
        </h3>
        <p v-if="data.padding_description" class="mb-16">
          {{ data.padding_description }}
        </p>
        <h3 class="mb-2 text-5xl" v-if="data.vacumming_title">
          {{ data.vacumming_title }}
        </h3>
        <p v-if="data.vacumming_description">
          {{ data.vacumming_description }}
        </p>
      </div>
      <div class="w-3/5">
        <img
          class="cover"
          :src="data.image_right_first.data.full_url"
          alt="Collections"
        />
      </div>
    </section>
    <section class="flex flex-row mb-44">
      <div class="w-2/5">
        <img
          class="cover"
          :src="data.image_left_second.data.full_url"
          alt="Collections"
        />
      </div>
      <div class="w-3/5 pl-32 text-xl">
        <h3 class="mb-2 text-5xl" v-if="data.fiber_pulls_title">
          {{ data.fiber_pulls_title }}
        </h3>
        <p v-if="data.fiber_pulls_description" class="mb-16">
          {{ data.fiber_pulls_description }}
        </p>
        <h3 class="mb-2 text-5xl" v-if="data.shedding_title">
          {{ data.shedding_title }}
        </h3>
        <p v-if="data.shedding_description">
          {{ data.shedding_description }}
        </p>
      </div>
    </section>
    <section class="flex flex-row">
      <div class="w-2/5 pr-32 text-xl">
        <h3 class="mb-2 text-5xl" v-if="data.wear_title">
          {{ data.wear_title }}
        </h3>
        <p v-if="data.wear_description" class="mb-16">
          {{ data.wear_description }}
        </p>
      </div>
      <div class="w-3/5">
        <img
          class="cover"
          :src="data.image_right_second.data.full_url"
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