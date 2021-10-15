<template>
  <footer>
    <section class="flex flex-row items-end justify-between pt-11 px-15">
      <div>
        <NuxtLink to="/" title="Home">
          <img src="/images/logo.svg" alt="Art and loom" />
        </NuxtLink>
      </div>
      <div class="flex flex-col items-end justify-between pt-11">
        <a
          v-if="configs.contact_phone"
          :href="'tel:' + (configs.contact_phone_link || configs.contact_phone)"
          target="_blank"
          rel="noopener"
        >
          {{ configs.contact_phone }}
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
      </div>
    </section>
    <section class="flex flex-row items-center justify-end mt-8 px-15">
      <div class="text-right">
        <p class="flex flex-row items-center">
          <span class="flex mr-6 separator"></span>
          For Interior Design
        </p>
        <a href="https://igworkshop.com" target="_blank">igworkshop.com</a>
      </div>
    </section>
    <nav class="px-5 md:px-10 lg:px-15 my-14 lg:my-28">
      <ul
        class="
          flex flex-col
          lg:flex-row
          text-center
          list-none
          m-0
          p-0
          justify-end
          uppercase
        "
      >
        <li class="mx-5">
          <NuxtLink title="Contact" to="/contact">Contact</NuxtLink>
        </li>
        <li class="mx-5">+</li>
        <li class="mx-5">
          <NuxtLink title="Rug Care" to="/rug-care">Rug Care</NuxtLink>
        </li>
        <li class="mx-5">+</li>
        <li class="mx-5">
          <NuxtLink title="Material and Techniques" to="/material"
            >Material & Techniques</NuxtLink
          >
        </li>
        <li class="mx-5">+</li>
        <li class="mx-5">
          <NuxtLink title="Trade" to="/trade">Trade</NuxtLink>
        </li>
        <li class="mx-5">+</li>
        <li class="mx-5">
          <NuxtLink title="Legal" to="/legal">Legal</NuxtLink>
        </li>
      </ul>
    </nav>
    <section class="pb-5 md:pb-15">
      <p class="text-center">
        Copyright © {{ year }} Art + Loom. All Rights Reserved.
      </p>
    </section>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid #e5e5e5;
}
.separator {
  border-top: 0.5px solid #000000;
  width: 50px;
}
</style>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      configs: ({ configs }) => configs,
    }),
  },
  data: () => ({
    year: new Date().getFullYear(),
  }),
};
</script>