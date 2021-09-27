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
            Trade
          </h2>
        </div>
      </div>
    </section>
    <section>
      <form class="flex flex-row flex-wrap">
        <div class="w-1/2 px-4 mb-5">
          <label for="last-name" class="sr-only">First Name</label>
          <input
            id="first-name"
            name="first-name"
            autocomplete="given-name"
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
            placeholder="First Name"
          />
        </div>

        <div class="w-1/2 px-4 mb-5">
          <label for="last-name" class="sr-only">Last Name</label>
          <input
            id="last-name"
            name="last-name"
            autocomplete="family-name"
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
            placeholder="Last Name"
          />
        </div>

        <div class="w-1/2 px-4 mb-5">
          <label for="website" class="sr-only">Company Website</label>
          <input
            id="website"
            name="website"
            autocomplete="url"
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
            placeholder="Company Website"
          />
        </div>

        <div class="w-1/2 px-4 mb-5">
          <label for="company-type" class="sr-only">Company Type</label>
          <input
            id="company-type"
            name="company-type"
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
            placeholder="Company Type"
          />
        </div>

        <div class="w-1/2 px-4 mb-5">
          <label for="resale-number" class="sr-only"
            >Resale Certificate Number</label
          >
          <input
            id="resale-number"
            name="resale-number"
            type="resale-number"
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
            placeholder="Resale Certificate Number"
          />
        </div>

        <div class="w-1/2 px-4 mb-5">
          <label for="state" class="sr-only">State</label>
          <input
            id="state"
            name="state"
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
            placeholder="State"
          />
        </div>

        <div class="w-1/2 px-4 mb-5">
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

        <div class="w-1/2 px-4 mb-5">
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
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "landing",
  computed: {
    ...mapState({
      cover: ({ configs }) => configs.trade_cover,
    }),
  },
};
</script>

<style scoped>
</style>