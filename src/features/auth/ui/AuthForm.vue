<template>
    <div class="auth">
        <p-input type="email" placeholder="Email" v-model="email" />
        <p-input type="password" placeholder="Password" v-model="password" />
        <p-button class="btn-login" type="submit" label="Login" />
        <p-button class="btn-auth" link label="Don't have an account? Register" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
</script>

<style scoped>
.auth {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 0 20px;
    max-width: 350px;
}
</style>
