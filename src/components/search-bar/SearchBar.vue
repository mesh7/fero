<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";

const getWordMeaning = () => {};
</script>

<template>
  <section class="">
    <div class="input-container flex justify-center">
      <InputText type="text" v-model="searchText" placeholder="Search..." />
      <div class="buttons mt-10">
        <Button
          class="mr-6"
          style="
            background-color: var(--color-red-400);
            border: 2px solid var(--color-red-400);
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
  </section>
</template>

<style scoped></style>
