<script setup>
import { useRouter } from "vue-router";

import Button from "primevue/button";
import ToggleSwitch from "primevue/toggleswitch";

import SearchBar from "../../components/search-bar/SearchBar.vue";

const router = useRouter();

const navigateToPricePage = () => {
  router.push({ name: "PriceDetailsPage" });
};

const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};

const navigateToGithub = () => {
  window.location.href = "https://github.com/mesh7";
};
</script>

<template>
  <!-- Navigation Header -->
  <header class="flex justify-between items-center px-8 py-4">
    <div class="flex">
      <img
        src="../../assets/logo_round.SVG"
        alt="Morseo Logo"
        class="mr-2 w-6 h-6"
      />
      <h1 class="text-2xl font-bold">Fero</h1>
    </div>
    <nav class="space-x-2">
      <Button
        icon="pi pi-search"
        severity="contrast"
        variant="text"
        rounded
        aria-label="Search"
        size="large"
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
      />
      <ToggleSwitch size="small" @click="toggleDarkMode" />
    </nav>
  </header>

  <!-- Hero Section -->
  <section
    class="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto"
  >
    <!-- Content -->
    <div class="md:w-1/2 text-center md:text-left">
      <p class="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
        Track and monitors the prices of products over time
      </p>
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-red-400 md:text-5xl lg:text-6xl dark:text-white"
      >
        <span class="text-gray-600">Track the</span>
        Price
      </h1>
      <h6 class="mb-4 text-2xl font-semibold text-gray-500 dark:text-white">
        This online tool Capture, Process & Stores all the price-related
        information. Price Tracker store & display this information in an
        organized & meaningful full way.
      </h6>
      <SearchBar></SearchBar>
    </div>

    <!-- Hero Image -->
    <div class="card md:w-1/2 mb-10 md:ml-4 md:mb-0">
      <div class="glass-card">
        <h2>Glassmorphism Card</h2>
        <p>This card has a frosted-glass effect and a soft bottom blend.</p>
      </div>
    </div>
  </section>
  <section>
    <footer class="flex flex-col mt-auto pt-4">
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
.glass-card {
  width: 400px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  padding: 20px;
  color: #fff;
}

.glass-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 0.05)
  );
}

.glass-card h2 {
  margin-top: 0;
}

.glass-card p {
  margin-bottom: 0;
}
</style>
