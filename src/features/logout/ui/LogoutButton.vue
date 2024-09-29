<template>
    <p-button @click="logout" icon="pi pi-sign-out" class="btn-logout" text raised />
</template>

<script setup lang="ts">
import { useAuthStore } from '@/features/auth';
import { AppRoutes } from '@/shared/router';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
    authStore.logout();
    router.push(AppRoutes.LOGIN);
};
</script>

<style scoped></style>
