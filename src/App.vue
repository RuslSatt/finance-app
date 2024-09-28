<template>
    <div>
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/features/switch-theme';
import { onMounted } from 'vue';

const themeStore = useThemeStore();

onMounted(() => {
    themeStore.initTheme();
});
</script>

<style scoped></style>
