<script setup>
import { ref } from "vue";

import PriceCard from "../../components/price-card/PriceCard.vue";

const count = ref(0);
</script>

<template>
  <p>
    Price tracker page
    <PriceCard></PriceCard>
  </p>
</template>

<style scoped></style>
