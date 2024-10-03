<template>
    <div class="home-page">
        <SideBar />
        <NavBar />
    </div>
</template>

<script setup lang="ts">
import { NavBar } from '@/widgets/navbar';
import { SideBar } from '@/widgets/sidebar';
</script>

<style scoped>
.home-page {
    display: flex;
    min-height: 100vh;
}
</style>
