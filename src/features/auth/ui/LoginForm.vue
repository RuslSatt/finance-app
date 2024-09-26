<template>
    <form @submit.prevent="handlerSubmit" class="auth">
        <p-message v-if="authStore.errorMsg" severity="error">{{ authStore.errorMsg }}</p-message>
        <p-input type="email" placeholder="Email" v-model="email" />
        <p-message v-if="validateErrors.email" severity="error">{{
            validateErrors.email
        }}</p-message>
        <p-input type="password" placeholder="Password" v-model="password" />
        <p-message v-if="validateErrors.password" severity="error">{{
            validateErrors.password
        }}</p-message>
        <p-button class="btn-login" type="submit" label="Login" />
        <p-button
            @click="onChangePage"
            class="btn-auth"
            link
            label="Don't have an account? Register"
        />
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../model/authStore';
import { useRouter } from 'vue-router';
import { validate, type IValidate } from '../lib/validate';

const email = ref('');
const password = ref('');

const validateErrors = ref<IValidate>({
    email: '',
    password: ''
});

const authStore = useAuthStore();
const router = useRouter();

const handlerSubmit = () => {
    const { result, errors } = validate({
        email: email.value,
        password: password.value
    });

    if (!result) {
        validateErrors.value = errors;
        return;
    }

    authStore.signIn(email.value, password.value);
};

const onChangePage = () => {
    router.push(`/registration`);
};
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

:deep(.p-message-text) {
    font-size: 12px;
}
</style>
