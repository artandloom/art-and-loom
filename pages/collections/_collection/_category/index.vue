<template>
  <main>
    <section class="mb-30">
      <div class="relative">
        <img class="cover" :src="data.cover.data.full_url" alt="Collections" />
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
          <h2 class="flex flex-row items-center uppercase">
            <span class="flex mr-6 separator"></span>
            {{ data.name }}
          </h2>
        </div>
      </div>
    </section>
    <section class="flex flex-row">
      <aside class="w-1/5">
        <ul>
          <NuxtLink
            class="m-7"
            :key="product.id"
            v-for="product in data.products"
            :to="
              '/collections/' +
              $route.params.collection +
              '/' +
              $route.params.category +
              '/' +
              product.slug +
              '-iid' +
              product.id
            "
            :title="product.name"
          >
            <li class="font-semibold uppercase">
              {{ product.name }}
            </li>
          </NuxtLink>
        </ul>
      </aside>
      <div class="flex flex-row flex-wrap w-4/5 justify-end">
        <NuxtLink
          class="w1/3 overflow-hidden	"
          :key="product.id"
          v-for="product in data.products"
          :to="
            '/collections/' +
            $route.params.collection +
            '/' +
            $route.params.category +
            '/' +
            product.slug +
            '-iid' +
            product.id
          "
          :title="product.name"
        >
          <Item :name="product.name" :image="product.picture.data.full_url" />
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $axios, route }) {
    const matcher = route.params.category.match(/-iid(\d+)/);

    let id = null;
    if (matcher && matcher.length > 1) {
      id = matcher[1];
    }
    const { data } = await $axios.$get(
      process.env.baseUrl + "/categories/" + id + "?fields=*.*.*"
    );

    console.log("data", data);

    return { data };
  },
};
</script>