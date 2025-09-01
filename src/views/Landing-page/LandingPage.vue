<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import Button from "primevue/button";
import Carousel from "primevue/carousel";
import ToggleSwitch from "primevue/toggleswitch";

import SearchBar from "../../components/search-bar/SearchBar.vue";

const router = useRouter();

// Navigate to home page
const navigateToHomePage = () => {
  router.push({ name: "LandingPage" });
};

// Navigate to price details page
const navigateToPricePage = () => {
  router.push({ name: "PriceDetailsPage" });
};

// Navigate to favourites
const addFavourites = () => {
  router.push({ name: "PriceDetailsPage" });
};

// Navigate to github
const navigateToGithub = () => {
  window.location.href = "https://github.com/mesh7";
};

// Toggle dark mode
const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};

const products = ref([
  {
    name: "Watch",
    image:
      "https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg",
    price: 65,
  },
  {
    name: "Black Watch",
    image: "https://primefaces.org/cdn/primevue/images/product/black-watch.jpg",
    price: 72,
  },
  {
    name: "Blue Band",
    image: "https://primefaces.org/cdn/primevue/images/product/blue-band.jpg",
    price: 79,
  },
  // Add more items as needed
]);

const responsiveOptions = ref([
  {
    breakpoint: "1024px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "768px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<template>
  <!-- Navigation Header -->
  <header class="flex justify-between px-8 py-4">
    <div class="flex items-center">
      <img
        src="../../assets/logo_round.SVG"
        alt="Morseo Logo"
        class="mr-3 w-10 h-10"
      />
      <h1 class="text-3xl font-bold text-red-400">Fero</h1>
    </div>
    <nav class="flex items-center space-x-2">
      <Button
        icon="pi pi-search"
        severity="contrast"
        variant="text"
        rounded
        aria-label="Search"
        size="large"
        @click="navigateToHomePage()"
      />
      <Button
        icon="pi pi-user"
        severity="contrast"
        variant="text"
        rounded
        aria-label="User"
        size="large"
      />
      <Button
        icon="pi pi-heart"
        severity="contrast"
        variant="text"
        rounded
        aria-label="Heart"
        size="large"
        @click="addFavourites()"
      />
      <ToggleSwitch size="small" @click="toggleDarkMode" />
    </nav>
  </header>

  <!-- Hero Section -->
  <section
    class="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto"
  >
    <!-- Content -->
    <div class="md:h-1/2 text-center md:text-left">
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-red-400 md:text-5xl lg:text-6xl dark:text-white"
      >
        <span class="text-gray-600">Track the price using</span>
        Fero
      </h1>
      <h6 class="mt-8 text-2xl font-semibold text-gray-500 dark:text-white">
        This online tool Capture, Process & Stores all the price-related
        information. Price Tracker store & display this information in an
        organized & meaningful full way.
      </h6>
      <SearchBar></SearchBar>
    </div>

    <!-- Carousel -->
    <div class="md:h-1/2 text-center md:text-left">
      <Carousel
        :value="products"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        circular
        :autoplayInterval="3000"
      >
        <template #item="slotProps">
          <div
            class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4"
          >
            <div class="mb-4">
              <div class="relative mx-auto">
                <img
                  :src="slotProps.data.image"
                  :alt="slotProps.data.name"
                  class="w-full rounded"
                />
              </div>
            </div>
            <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
            <div class="mt-0 font-semibold text-xl">
              ${{ slotProps.data.price }}
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </section>

  <section>
    <footer class="flex-col mt-auto pt-4">
      <P class="text-center">Made with ❤️ by Mesh</P>
      <span class="flex justify-center">
        <Button
          icon="pi pi-github"
          style="color: var(--color-red-400)"
          variant="text"
          severity="secondary"
          rounded
          aria-label="github"
          @click="navigateToGithub()"
        />
      </span>
    </footer>
  </section>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
