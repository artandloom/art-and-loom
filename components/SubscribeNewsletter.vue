<template>
  <section class="text-center pt-14 pb-30">
    <h3 class="pb-12 text-4xl">Sign Up for our newsletter</h3>
    <p class="text-2xl mb-16">
      Stay up to date on exciting proyects and upcoming events from Art+Loom.
    </p>

    <form class="w-1/3 mx-auto">
      <div>
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
              px-3
              py-2
              border border-gray-300
              placeholder-gray-300
              text-gray-900
              rounded-sm
              focus:outline-none
              focus:ring-black
              focus:border-black
            "
            placeholder="Name"
          />
        </div>
        <div>
          <label for="email" class="sr-only">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            inputmode="email"
            autocomplete="email"
            required
            class="
              appearance-none
              block
              w-full
              px-3
              py-2
              border border-gray-300
              placeholder-gray-300
              text-gray-900
              rounded-sm
              focus:outline-none
              focus:ring-black
              focus:border-black
            "
            placeholder="Email"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="
            py-2
            px-4
            mt-12
            hover:bg-gray-300
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-gray-50
            rounded
          "
        >
          Stay In Touch
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped>
section {
  background: rgba(196, 196, 196, 0.1);
}
</style>