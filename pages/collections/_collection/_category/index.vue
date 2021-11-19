<template>
  <main>
    <Cover
      v-show="data.cover && data.cover.private_hash"
      class="px-15"
      :title="data.name"
      :image="data.cover.private_hash"
    />
    <section class="flex flex-row justify-center md:justify-end -mx-4 md:-mx-0">
      <aside class="hidden md:flex md:flex-row w-1/5">
        <ul>
          <NuxtLink
            class="flex mb-12"
            title="Go Back"
            :to="'/collections/' + $route.params.collection"
          >
            ← Go Back
          </NuxtLink>

          <!-- <NuxtLink
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
          </NuxtLink> -->
        </ul>
      </aside>
      <div class="flex flex-row flex-wrap w-full md:w-4/5 justify-end">
        <NuxtLink
          class="w-1/2 md:w-1/3 overflow-hidden mb-24 px-4"
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
          <Item
            v-show="product.picture && product.picture.private_hash"
            :id="product.picture.private_hash"
            :image="product.picture.data.full_url"
            :name="product.name"
            :tag="product.tag"
            :hideName="product.hide_on_list"
          />
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
    const fields = [
      "name",
      "cover.private_hash",
      "products.id,products.slug,products.name",
      "products.tag,products.hide_on_list",
      "products.picture.private_hash,products.picture.data.full_url",
    ];
    const { data } = await $axios.$get(
      process.env.baseUrl + "/categories/" + id + "?fields=" + fields.join(",")
    );

    return { data };
  },
};
</script>