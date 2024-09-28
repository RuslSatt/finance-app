<template>
    <div class="home-page">
        <NavBar />
    </div>
</template>

<script setup lang="ts">
import { NavBar } from '@/widgets/navbar';
</script>

<style scoped>
.home-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
