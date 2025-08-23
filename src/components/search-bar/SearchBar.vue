<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";

const getWordMeaning = () => {};
</script>

<template>
  <section>
    <div class="flex mt-12">
      <InputText
        type="text"
        class="mr-6 rounded-3xl w-sm"
        v-model="searchText"
        placeholder="Enter product link"
      />
      <div class="buttons">
        <Button
          style="
            background-color: var(--color-red-400);
            border: 2px solid var(--color-red-400);
          "
          id="start-button"
          severity="primary"
          rounded
          size="large"
          @click="navigateToPricePage"
          ><p class="mx-3 font-semibold text-white">Search</p>
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
