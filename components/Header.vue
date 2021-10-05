<template>
  <header class="flex flex-row items-center justify-between pb-24 pt-11 px-15">
    <div>
      <NuxtLink to="/" title="Home">
        <img src="/images/logo.svg" alt="Art and loom" />
      </NuxtLink>
    </div>
    <nav class="w-2/3 pt-6">
      <ul class="flex flex-row list-none m-0 p-0 justify-end uppercase">
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
  </header>
</template>