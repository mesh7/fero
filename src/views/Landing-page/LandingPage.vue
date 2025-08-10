<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToPriceDetails = () => {
    router.push({ name: 'PriceDetailsPage'})
}
</script>

<template>
    <a @click="navigateToPriceDetails">
    Landing page
    </a>
</template>

<style scoped>
</style>
