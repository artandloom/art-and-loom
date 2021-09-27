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
          <h2 class="flex flex-row items-center uppercase text-7xl z-10 px-15">
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
      <div class="w-1/2 px-20">
        <form class="flex flex-col">
          <div class="mb-5">
            <label for="name" class="sr-only">Name</label>
            <input
              id="name"
              name="name"
              autocomplete="name"
              required
              class="
                appearance-none
                block
                w-full
                px-0
                py-2
                uppercase
                border-b border-gray-300
                placeholder-black
                text-black
                focus:outline-none
                focus:ring-black
                focus:border-black
              "
              placeholder="Name"
            />
          </div>
          <div class="mb-5">
            <label for="phone" class="sr-only">Phone</label>
            <input
              id="phone"
              name="phone"
              autocomplete="phone"
              inputmode="tel"
              required
              class="
                appearance-none
                block
                w-full
                px-0
                py-2
                uppercase
                border-b border-gray-300
                placeholder-black
                text-black
                focus:outline-none
                focus:ring-black
                focus:border-black
              "
              placeholder="Phone"
            />
          </div>
          <div class="mb-5">
            <label for="email" class="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              inputmode="email"
              required
              class="
                appearance-none
                block
                w-full
                px-0
                py-2
                uppercase
                border-b border-gray-300
                placeholder-black
                text-black
                focus:outline-none
                focus:ring-black
                focus:border-black
              "
              placeholder="Email"
            />
          </div>

          <div class="mb-5">
            <label for="comments" class="sr-only">Comments</label>
            <textarea
              id="comments"
              name="comments"
              type="comments"
              inputmode="comments"
              required
              rows="4"
              class="
                resize-none
                appearance-none
                block
                w-full
                px-0
                py-2
                uppercase
                border-b border-gray-300
                placeholder-black
                text-black
                focus:outline-none
                focus:ring-black
                focus:border-black
              "
              placeholder="Comments"
            />
          </div>

          <button
            type="submit"
            class="
              bg-black
              text-white
              ml-auto
              py-2
              px-14
              mt-5
              hover:bg-gray-300
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-gray-50
              rounded
            "
          >
            Submit
          </button>
        </form>
      </div>
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