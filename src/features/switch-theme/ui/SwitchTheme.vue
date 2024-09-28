<template>
    <p-button @click="themeStore.toggleTheme" :icon="icon" class="btn-theme" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '@/features/switch-theme/model/themeStore';

const themeStore = useThemeStore();

const icon = computed(() => (themeStore.theme === 'dark' ? 'pi pi-moon' : 'pi pi-sun'));
</script>

<style scoped></style>
