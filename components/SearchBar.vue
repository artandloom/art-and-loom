<template>
  <div class="relative w-64 ml-auto z-50">
    <form class="pt-2 relative text-gray-800" @submit.prevent="submitForm">
      <input
        class="
          bg-gray-100
          placeholder-gray-800
          w-full
          h-10
          px-5
          pl-10
          rounded-lg
          text-sm
          focus:outline-none
          uppercase
        "
        @input="changeSearch"
        v-model="search"
        type="search"
        name="search"
        autocomplete="off"
        placeholder=""
      />
      <button type="submit" class="absolute left-0 top-0 mt-5 ml-4">
        <svg
          class="text-black h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style="enable-background: new 0 0 56.966 56.966"
          xml:space="preserve"
          width="512px"
          height="512px"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      </button>
    </form>
    <ul
      v-show="showResults"
      class="absolute divide-y w-64 shadow-md rounded my-2 bg-white uppercase"
    >
      <NuxtLink
        class="flex px-4 py-2"
        :key="'collection-' + collection.id"
        v-for="collection in collections"
        :to="'/collections/' + collection.slug + '-iid' + collection.id"
        :title="'View ' + collection.name"
        @click.native="clearSearch()"
      >
        <li class="flex flex-row items-center">
          <img
            class="w-10 mr-4"
            :src="collection.picture.data.full_url"
            :alt="collection.name"
          />
          <p>{{ collection.name }}</p>
        </li>
      </NuxtLink>
      <NuxtLink
        class="flex px-4 py-2"
        :key="'artist-' + artist.id"
        v-for="artist in artists"
        :to="'/collaborations/' + artist.slug + '-iid' + artist.id"
        :title="'View ' + artist.name"
        @click.native="clearSearch()"
      >
        <li class="flex flex-row items-center">
          <img
            class="w-10 mr-4"
            :src="artist.cover.data.full_url"
            :alt="artist.name"
          />
          <p>{{ artist.name }}</p>
        </li>
      </NuxtLink>
      <NuxtLink
        class="flex px-4 py-2"
        :key="'product-' + product.id"
        v-for="product in products"
        :to="getProductLink(product)"
        :title="product.name"
        @click.native="clearSearch()"
      >
        <li class="flex flex-row items-center">
          <img
            class="w-10 mr-4"
            :src="product.picture.data.full_url"
            :alt="product.name"
          />
          <p>{{ product.name }}</p>
        </li>
      </NuxtLink>
    </ul>
  </div>
</template>


<script>
export default {
  data: () => ({
    search: null,
    searchedTerm: null,
    showResults: false,
    artists: [],
    collections: [],
    products: [],
  }),
  methods: {
    getProductLink(product) {
      if (product.artist) {
        return (
          "/collaborations/" +
          product.artist.slug +
          "-iid" +
          product.artist.id +
          "/" +
          product.slug +
          "-iid" +
          product.id
        );
      }
      if (product.category) {
        return (
          "/collections/" +
          product.category.collection.slug +
          "-iid" +
          product.category.collection.id +
          "/" +
          product.category.slug +
          "-iid" +
          product.category.id +
          "/" +
          product.slug +
          "-iid" +
          product.id
        );
      }
      return '';
    },
    async submitForm() {
      console.log("form", this.search);
      this.searchedTerm = this.search;
    },
    clearSearch() {
      this.showResults = false;
      this.search = null;
      this.searchedTerm = null;
    },
    changeSearch() {
      console.log("form", this.search);
      if (!this.search) {
        this.showResults = false;
        return;
      }

      if (this.searchedTerm !== this.search) {
        this.searchedTerm = this.search;
        this.doSearch();
      }
    },
    async doSearch() {
      // Entre collections, products y artists
      console.log("this.searchedTerm", this.searchedTerm);
      const collectionsEndpoint =
        process.env.baseUrl +
        "/collections?fields=*.*.*&filter[name][contains]=";

      const artistsEndpoint =
        process.env.baseUrl + "/artists?fields=*.*.*&filter[name][contains]=";
      const productsEndpoint =
        process.env.baseUrl + "/products?fields=*.*.*&filter[name][contains]=";

      const collectionsRequest = this.$axios.$get(
        collectionsEndpoint + this.searchedTerm
      );
      const artistsRequest = this.$axios.$get(
        artistsEndpoint + this.searchedTerm
      );
      const productsequest = this.$axios.$get(
        productsEndpoint + this.searchedTerm
      );

      const [collectionsResp, artistsResp, productsResp] = await Promise.all([
        collectionsRequest,
        artistsRequest,
        productsequest,
      ]);
      console.log("collectionsResp", collectionsResp.data);
      this.artists = artistsResp.data;
      this.collections = collectionsResp.data;
      this.products = productsResp.data;

      if (
        this.collections.length > 0 ||
        this.artists.length > 0 ||
        this.products.length > 0
      ) {
        this.showResults = true;
      }
    },
  },
};
</script>