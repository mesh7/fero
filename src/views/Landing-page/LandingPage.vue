<script setup lang="ts">
import { useRouter } from "vue-router";
import Button from "primevue/button";
import ToggleSwitch from "primevue/toggleswitch";

const router = useRouter();

const navigateToPricePage = () => {
  router.push({ name: "CodePage" });
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
        src="../../assets/morseo_logo.SVG"
        alt="Morseo Logo"
        class="mr-2 w-6 h-6"
      />
      <h1 class="text-2xl font-bold">Fero</h1>
    </div>
    <nav class="space-x-4">
      <a href="#" class="text-gray-600 hover:text-blue-600">Fero1</a>
      <a href="#" class="text-gray-600 hover:text-blue-600">Fero2</a>
      <ToggleSwitch size="small" @click="toggleDarkMode" />
    </nav>
  </header>

  <!-- Hero Section -->
  <section
    class="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto"
  >
    <!-- Content -->
    <div class="md:w-1/2 text-center md:text-left">
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-red-400 md:text-5xl lg:text-6xl dark:text-white"
      >
        Track the price
      </h1>
      <h6 class="mb-4 text-2xl font-extrabold text-gray-500 dark:text-white">
        Track the price
      </h6>
      <p class="mt-6 text-lg text-gray-900 dark:text-white">Track the price</p>
      <div class="space-x-4">
        <div class="buttons mt-10">
          <Button
            class="mr-6"
            style="
              background-color: var(--color-indigo-400);
              border: 2px solid var(--color-indigo-400);
            "
            id="start-button"
            severity="primary"
            rounded
            size="large"
            @click="navigateToPricePage"
            ><p class="mx-3 font-semibold text-white">Let's start</p>
          </Button>
        </div>
      </div>
    </div>

    <!-- Hero Image -->
    <div class="card md:w-1/2 mb-10 md:ml-4 md:mb-0">
      <img
        src="../../assets/hero_image.SVG"
        alt="Morseo Hero Image"
        class="p-8 w-full h-auto"
      />
    </div>
  </section>
  <section>
    <footer class="flex flex-col mt-auto pt-4">
      <P class="text-center">Made with ❤️ by Mesh</P>
      <span class="flex justify-center">
        <Button
          icon="pi pi-github"
          style="color: var(--color-indigo-400)"
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
/* Glassmorphism card effect */
.card {
  backdrop-filter: blur(2px) saturate(99%);
  -webkit-backdrop-filter: blur(2px) saturate(99%);
  background-color: rgba(255, 255, 255, 0.26);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}

.glass-card {
  width: 240px;
  height: 360px;
  background: rgba(255, 255, 255, 0.11);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 20px 10px rgba(255, 255, 255, 1);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
}

.glass-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8),
    transparent,
    rgba(255, 255, 255, 0.3)
  );
}
</style>
