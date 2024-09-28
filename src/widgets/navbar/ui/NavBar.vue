<template>
    <div class="navbar">
        <SwitchTheme class="switch-theme" />
    </div>
</template>

<script setup lang="ts">
import { SwitchTheme } from '@/features/switch-theme';
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;

    padding: 0 10px;

    width: 100%;
    height: 40px;

    border-bottom: 1px solid var(--p-surface-200);
}

.switch-theme {
    margin-left: auto;
}
</style>
