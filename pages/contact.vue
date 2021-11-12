<template>
  <main>
    <Cover title="Connect with us" :image="cover.private_hash" />
    <section class="flex flex-col-reverse md:flex-row">
      <div class="w-full md:w-1/2 md:mx-15">
        <img
          class="min-w-full"
          :src="image.data.full_url"
          alt="Connect with us"
        />

        <section
          class="
            flex flex-col
            items-end
            justify-between
            pt-11
            md:px-15
            text-right
          "
        >
          <a
            v-if="configs.contact_phone"
            :href="
              'tel:' + (configs.contact_phone_link || configs.contact_phone)
            "
            target="_blank"
            rel="noopener"
            title="Call Us"
          >
            {{ configs.contact_phone }}
          </a>
          <a
            v-if="configs.contact_email"
            class="mt-2"
            :href="'mailto:' + configs.contact_email"
            target="_blank"
            rel="noopener"
            title="Send Email"
          >
            {{ configs.contact_email }}
          </a>
          <a
            v-if="configs.contact_address && configs.contact_address_link"
            class="mt-2"
            :href="configs.contact_address_link"
            target="_blank"
            rel="noopener"
            title="Open on Maps"
          >
            {{ configs.contact_address }}
          </a>
          <div class="flex flex-row mt-8">
            <a
              v-if="configs.contact_instagram"
              class="mr-7"
              :href="configs.contact_instagram"
              target="_blank"
              rel="noopener"
            >
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a
              v-if="configs.contact_whatsapp"
              :href="configs.contact_whatsapp"
              target="_blank"
              rel="noopener"
            >
              <img src="/icons/whatsapp.svg" alt="Whatsapp" />
            </a>
          </div>
        </section>
      </div>
      <div class="w-full md:w-1/2 mb-10 md:mb-0 md:px-20">
        <form class="flex flex-col" @submit.prevent="submitForm">
          <div class="mb-5">
            <label for="name" class="sr-only">Name</label>
            <input
              id="name"
              name="name"
              autocomplete="name"
              required
              v-model="form.name"
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
          <div class="mb-5">
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

          <div class="mb-5">
            <label for="comments" class="sr-only">Comments</label>
            <textarea
              id="comments"
              name="comments"
              type="comments"
              required
              v-model="form.comments"
              rows="4"
              class="
                resize-none
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
              placeholder="COMMENTS"
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
      configs: ({ configs }) => configs,
    }),
  },
  data: () => ({
    form: {
      email: null,
      name: null,
      phone: null,
      comments: null,
    },
    isLoading: false,
  }),
  methods: {
    async submitForm() {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;
      console.log("test");

      try {
        const resp = await this.$axios.$post(
          "https://www.artandloom.com/api/mail/contact",
          // "http://localhost:3000/api/mail/contact",
          {
            ...this.form,
          }
        );

        console.log("resp", resp);
        this.form = {
          email: null,
          name: null,
          phone: null,
          comments: null,
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
</style>