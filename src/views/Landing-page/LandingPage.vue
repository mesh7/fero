<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToPriceDetails = () => {
    router.push({ name: 'PriceDetailsPage'})
}
</script>

<template>
    <a @click="navigateToPriceDetails">
    Price Details page
    </a>
</template>

<style scoped>
</style>
