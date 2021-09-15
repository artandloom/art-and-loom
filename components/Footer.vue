<template>
  <footer>
    <SubscribeNewsletter />
    <section class="flex flex-row items-end justify-between pt-11 px-15">
      <div>
        <img src="/images/logo.svg" alt="Art and loom" />
      </div>
      <div class="flex flex-row">
        <a
          class="mr-7"
          href="https://www.instagram.com/artandloom/"
          target="_blank"
          rel="noopener"
        >
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+19177670078"
          target="_blank"
          rel="noopener"
        >
          <img src="/icons/whatsapp.svg" alt="Whatsapp" />
        </a>
      </div>
    </section>
    <section class="flex flex-row items-center justify-end mt-8 px-15">
      <div class="text-right">
        <p class="flex flex-row items-center">
          <span class="flex mr-6 separator"></span>
          For Interior Design
        </p>
        <p>igworkshop.com</p>
      </div>
    </section>
    <nav class="px-15 my-28">
      <ul class="flex flex-row list-none m-0 p-0 justify-end uppercase">
        <li class="mx-5">Contact</li>
        <li class="mx-5">+</li>
        <li class="mx-5">Rug Care</li>
        <li class="mx-5">+</li>
        <li class="mx-5">Material & Techniques</li>
        <li class="mx-5">+</li>
        <li class="mx-5">Trade</li>
      </ul>
    </nav>
    <section class="pb-15">
      <p class="text-center">
        Copyright © {{ year }} Art + Loom. All Rights Reserved.
      </p>
    </section>
  </footer>
</template>

<style scoped>
.separator {
  border-top: 0.5px solid #000000;
  width: 50px;
}
</style>

<script>
export default {
  data: () => ({
    year: new Date().getFullYear(),
  }),
};
</script>