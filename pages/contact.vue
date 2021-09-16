<template>
  <main>
    <section class="mb-30">
      <div class="relative -mx-15">
        <img class="cover" :src="cover.data.full_url" alt="Connect with us" />
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
            Connect with us
          </h2>
        </div>
      </div>
    </section>
    <section class="flex flex-row">
      <div class="w-1/2 mx-15">
        <img class="cover" :src="image.data.full_url" alt="Connect with us" />
      </div>
      <div class="w-1/2">To connect with form</div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "landing",
  computed: {
    ...mapState({
      cover: ({ configs }) => configs.contact_us_cover,
      image: ({ configs }) => configs.contact_us_image,
    }),
  },
};
</script>

<style scoped>
</style>