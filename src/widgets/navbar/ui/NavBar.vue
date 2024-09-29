<template>
    <div class="navbar">
        <div class="navbar-buttons">
            <SwitchTheme class="switch-theme" />
            <LogoutButton />
        </div>
    </div>
</template>

<script setup lang="ts">
import { LogoutButton } from '@/features/logout';
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

.navbar-buttons {
    display: flex;
    gap: 10px;
    margin-left: auto;
}
</style>
