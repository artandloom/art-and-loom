<template>
  <main>
    <Cover title="Trade" :image="cover.private_hash" />
    <section>
      <form class="flex flex-row flex-wrap" @submit.prevent="submitForm">
        <div class="w-full md:w-1/2 px-4 mb-5">
          <label for="last-name" class="sr-only">First Name</label>
          <input
            id="first-name"
            name="first-name"
            autocomplete="given-name"
            required
            v-model="form.firstName"
            class="
              lining-nums
              appearance-none
              block
              w-full
              px-0
              py-2
              uppercase
              border-b border-gray-300
              placeholder-black
              text-black
              focus:outline-none focus:ring-black focus:border-black
            "
            placeholder="First Name"
          />
        </div>

        <div class="w-full md:w-1/2 px-4 mb-5">
          <label for="last-name" class="sr-only">Last Name</label>
          <input
            id="last-name"
            name="last-name"
            autocomplete="family-name"
            required
            v-model="form.lastName"
            class="
              lining-nums
              appearance-none
              block
              w-full
              px-0
              py-2
              uppercase
              border-b border-gray-300
              placeholder-black
              text-black
              focus:outline-none focus:ring-black focus:border-black
            "
            placeholder="Last Name"
          />
        </div>

        <div class="w-full md:w-1/2 px-4 mb-5">
          <label for="website" class="sr-only">Company Website</label>
          <input
            id="website"
            name="website"
            autocomplete="url"
            required
            v-model="form.companyWebsite"
            class="
              lining-nums
              appearance-none
              block
              w-full
              px-0
              py-2
              border-b border-gray-300
              placeholder-black
              text-black
              focus:outline-none focus:ring-black focus:border-black
            "
            placeholder="COMPANY WEBSITE"
          />
        </div>

        <div class="w-full md:w-1/2 px-4 mb-5">
          <label for="company-type" class="sr-only">Company Type</label>
          <select
            required
            v-model="form.companyType"
            class="
              appearance-none
              block
              w-full
              px-0
              py-2
              pr-10
              uppercase
              border-b border-gray-300
              placeholder-black
              text-black
              focus:outline-none focus:ring-black focus:border-black
              bg-no-repeat
            "
          >
            <option disabled selected :value="null" hidden>Company Type</option>
            <option
              v-for="(company, index) in companyType"
              :key="index"
              :value="company.type"
            >
              {{ company.type }}
            </option>
          </select>
        </div>

        <div class="w-full md:w-1/2 px-4 mb-5">
          <label for="resale-number" class="sr-only"
            >Resale Certificate Number</label
          >
          <input
            id="resale-number"
            name="resale-number"
            type="resale-number"
            required
            v-model="form.resaleCertificateNumber"
            class="
              lining-nums
              appearance-none
              block
              w-full
              px-0
              py-2
              uppercase
              border-b border-gray-300
              placeholder-black
              text-black
              focus:outline-none focus:ring-black focus:border-black
            "
            placeholder="Resale Certificate Number"
          />
        </div>

        <div class="w-full md:w-1/2 px-4 mb-5">
          <label for="state" class="sr-only">State</label>
          <select
            required
            v-model="form.state"
            class="
              appearance-none
              block
              w-full
              px-0
              py-2
              pr-10
              uppercase
              border-b border-gray-300
              placeholder-black
              text-black
              focus:outline-none focus:ring-black focus:border-black
              bg-no-repeat
            "
          >
            <option disabled selected :value="null" hidden>State</option>
            <option
              v-for="state in states"
              :key="state.abbreviation"
              :value="state.name"
            >
              {{ state.name }}
            </option>
          </select>
        </div>

        <div class="w-full md:w-1/2 px-4 mb-5">
          <label for="email" class="sr-only">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            inputmode="email"
            autocomplete="email"
            required
            v-model="form.email"
            class="
              lining-nums
              appearance-none
              block
              w-full
              px-0
              py-2
              uppercase
              border-b border-gray-300
              placeholder-black
              text-black
              focus:outline-none focus:ring-black focus:border-black
            "
            placeholder="Email"
          />
        </div>

        <div class="w-full md:w-1/2 px-4 mb-5">
          <label for="phone" class="sr-only">Phone</label>
          <input
            id="phone"
            name="phone"
            autocomplete="phone"
            inputmode="tel"
            required
            v-model="form.phone"
            class="
              lining-nums
              appearance-none
              block
              w-full
              px-0
              py-2
              uppercase
              border-b border-gray-300
              placeholder-black
              text-black
              focus:outline-none focus:ring-black focus:border-black
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
            focus:ring-2
            focus:ring-offset-2
            focus:ring-gray-50
            rounded
            flex
            items-center
            justify-center
          "
          :class="{ 'bg-gray-300': isLoading }"
          :disabled="isLoading"
        >
          <Spinner v-if="isLoading" />
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
      companyType: ({ configs }) => configs.company_type,
    }),
  },
  async asyncData({ $axios }) {
    let states;

    if (process.server) {
      states = await $axios.$get(
        "http://" + process.env.VERCEL_URL + "/api/states"
      );
    } else {
      states = await $axios.$get("https://artandloom.com/api/states");
    }

    // states = await $axios.$get("http://localhost:3000/api/states");

    return { states };
  },
  data: () => ({
    form: {
      firstName: null,
      lastName: null,
      companyWebsite: null,
      companyType: null,
      resaleCertificateNumber: null,
      state: null,
      email: null,
      phone: null,
    },
    isLoading: false,
  }),
  methods: {
    async submitForm() {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;

      try {
        const resp = await this.$axios.$post(
          "https://artandloom.com/api/mail/tarde",
          // "http://localhost:3000/api/mail/trade",
          {
            ...this.form,
          }
        );

        console.log("resp", resp);
        this.form = {
          firstName: null,
          lastName: null,
          companyWebsite: null,
          companyType: null,
          resaleCertificateNumber: null,
          state: null,
          email: null,
          phone: null,
        };
      } catch (error) {
        console.log("error", error);
      }

      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
select {
  background-image: url("/icons/select-icon.svg");
  background-position: right 0.5rem center;
  background-size: 21px 13px;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}
</style>