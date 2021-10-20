<template>
  <header
    class="
      flex flex-row
      items-center
      justify-between
      pb-24
      pt-11
      px-5
      md:px-10
      lg:px-15
    "
  >
    <div class="w-36 lg:w-48">
      <NuxtLink to="/" title="Home">
        <img src="/images/logo.svg" alt="Art and loom" />
      </NuxtLink>
    </div>
    <nav class="hidden lg:flex lg:flex-col w-2/3 pt-6">
      <ul
        class="
          flex flex-row
          list-none
          m-0
          p-0
          justify-end
          uppercase
          whitespace-nowrap
        "
      >
        <li class="mx-5">
          <NuxtLink title="Collections" to="/collections">Collections</NuxtLink>
        </li>
        <li class="mx-5">+</li>
        <li class="mx-5">
          <NuxtLink title="Collaborations" to="/collaborations">
            Collaborations
          </NuxtLink>
        </li>
        <li class="mx-5">+</li>
        <li class="mx-5">
          <NuxtLink title="Gallery" to="/gallery">Gallery</NuxtLink>
        </li>
        <li class="mx-5">+</li>
        <li class="mx-5">
          <NuxtLink title="Our Story" to="/our-story">Our Story</NuxtLink>
        </li>
        <li class="mx-5">+</li>
        <li class="mx-5">
          <NuxtLink title="Press" to="/press">Press</NuxtLink>
        </li>
      </ul>
      <SearchBar class="mt-4" />
    </nav>
    <a
      class="
        mx-2
        p-4
        rounded-full
        relative
        flex
        items-center
        justify-center
        hover:bg-gray-100
      "
      title="Menu"
      @click.prevent="toggleMenuOpen()"
      href="#"
    >
      <li class="absolute flex items-center justify-center">
        <img class="w-6" src="/icons/menu.svg" alt="Menu" />
      </li>
    </a>

    <transition
      enter-active-class="duration-300 ease-out"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isMenuOpen"
        @click.prevent="toggleMenuOpen()"
        class="fixed inset-0 z-50 cursor-pointer"
      >
        <div class="absolute inset-0 bg-black opacity-40"></div>
      </div>
    </transition>
    <transition
      enter-active-class="duration-300 ease-out"
      enter-class="translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="duration-300 ease-in"
      leave-class="translate-x-0 opacity-100"
      leave-to-class="translate-x-full opacity-0"
    >
      <div
        class="
          fixed
          inset-y-0
          right-0
          bg-white
          z-50
          w-full
          pt-11
          px-5
          md:px-10
          lg:px-15
          flex flex-col
        "
        v-show="isMenuOpen"
      >
        <a
          class="
            my-2
            p-4
            rounded-full
            relative
            flex
            items-center
            justify-center
            ml-auto
            hover:bg-gray-100
            z-10
          "
          title="Menu"
          @click.prevent="toggleMenuOpen()"
          href="#"
        >
          <li class="absolute flex items-center justify-center">
            <img
              class="w-3"
              src="/icons/close-button.svg"
              alt="Agregar a carrito"
            />
          </li>
        </a>
        <ul
          class="
            fixed
            flex flex-col
            items-center
            justify-center
            list-none
            m-0
            p-8
            h-full
            inset-0
          "
        >
          <li class="my-2">
            <NuxtLink
              class="text-4xl"
              @click.native="toggleMenuOpen()"
              title="Collections"
              to="/collections"
            >
              Collections
            </NuxtLink>
          </li>
          <li class="my-2">
            <NuxtLink
              class="text-4xl"
              @click.native="toggleMenuOpen()"
              title="Collaborations"
              to="/collaborations"
            >
              Collaborations
            </NuxtLink>
          </li>
          <li class="my-2">
            <NuxtLink
              class="text-4xl"
              @click.native="toggleMenuOpen()"
              title="Gallery"
              to="/gallery"
            >
              Gallery
            </NuxtLink>
          </li>
          <li class="my-2">
            <NuxtLink
              class="text-4xl"
              @click.native="toggleMenuOpen()"
              title="Our Story"
              to="/our-story"
            >
              Our Story
            </NuxtLink>
          </li>
          <li class="my-2">
            <NuxtLink
              class="text-4xl"
              @click.native="toggleMenuOpen()"
              title="Press"
              to="/press"
            >
              Press
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data: () => ({
    isMenuOpen: false,
  }),
  methods: {
    toggleMenuOpen() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>