<template>
  <main>
    <Cover class="px-15" :title="data.name" :image="data.cover.private_hash" />
    <section class="flex flex-row justify-center md:justify-end -mx-4 md:-mx-0">
      <aside class="hidden md:flex md:flex-row w-1/5">
        <ul>
          <NuxtLink class="flex mb-12" title="Go Back" to="/collections">
            ← Go Back
          </NuxtLink>

          <NuxtLink
            class="flex my-7"
            :key="category.id"
            v-for="category in data.categories"
            :to="
              '/collections/' +
              $route.params.collection +
              '/' +
              category.slug +
              '-iid' +
              category.id
            "
            :title="category.name"
          >
            <li class="uppercase">
              {{ category.name }}
            </li>
          </NuxtLink>
        </ul>
      </aside>
      <div class="flex flex-row flex-wrap w-full md:w-4/5 justify-end">
        <NuxtLink
          class="w-1/2 md:w-1/3 overflow-hidden mb-24 px-4"
          :key="category.id"
          v-for="category in data.categories"
          :to="
            '/collections/' +
            $route.params.collection +
            '/' +
            category.slug +
            '-iid' +
            category.id
          "
          :title="category.name"
        >
          <Item
            :id="category.picture.private_hash"
            :image="category.picture.data.full_url"
            :name="category.name"
          />
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $axios, route }) {
    const matcher = route.params.collection.match(/-iid(\d+)/);

    let id = null;
    if (matcher && matcher.length > 1) {
      id = matcher[1];
    }
    const fields = [
      "name",
      "cover.private_hash",
      "categories.id,categories.slug,categories.name,categories.picture.private_hash,categories.picture.data.full_url",
    ];
    const { data } = await $axios.$get(
      process.env.baseUrl + "/collections/" + id + "?fields=" + fields.join(",")
    );

    return { data };
  },
};
</script>
