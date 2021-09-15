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
            <li class="font-semibold uppercase">
              {{ category.name }}
            </li>
          </NuxtLink>
        </ul>
      </aside>
      <div class="flex flex-row flex-wrap w-4/5 justify-end">
        <NuxtLink
          class="w1/3 overflow-hidden"
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
          <Item :name="category.name" :image="category.picture.data.full_url" />
        </NuxtLink>
      </div>
    </section>
    <SubscribeNewsletter />
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
    const { data } = await $axios.$get(
      process.env.baseUrl + "/collections/" + id + "?fields=*.*.*"
    );

    console.log("data", data);

    return { data };
  },
};
</script>
<style scoped>
h2 {
  font-size: 6.875rem;
  z-index: 1;
}
.separator {
  border-top: 0.5px solid #000000;
  width: 50px;
}
.text-background:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 78.12%
  );
}
</style>