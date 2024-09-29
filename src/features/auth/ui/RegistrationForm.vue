<template>
    <form @submit.prevent="handlerSubmit" class="auth">
        <p-message v-if="authStore.errorMsg" severity="error">{{ authStore.errorMsg }}</p-message>
        <p-input :readonly="authStore.isLoading" type="email" placeholder="Email" v-model="email" />
        <p-message v-if="validateErrors.email" severity="error">{{
            validateErrors.email
        }}</p-message>
        <p-input
            :readonly="authStore.isLoading"
            type="password"
            placeholder="Password"
            v-model="password"
        />
        <p-message v-if="validateErrors.password" severity="error">{{
            validateErrors.password
        }}</p-message>
        <p-input
            :readonly="authStore.isLoading"
            type="password"
            placeholder="Confirm password"
            v-model="confirm"
        />
        <p-message v-if="validateErrors.confirm" severity="error">{{
            validateErrors.confirm
        }}</p-message>
        <p-button :loading="authStore.isLoading" class="btn-login" type="submit" label="Register" />
        <p-button
            :disabled="authStore.isLoading"
            @click="onChangePage"
            class="btn-auth"
            link
            label="Already have an account? Login"
        />
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../model/authStore';
import { useRouter } from 'vue-router';
import { validate, type IValidate } from '../lib/validate';
import { AppRoutes } from '@/shared/router';

const email = ref('');
const password = ref('');
const confirm = ref('');

const validateErrors = ref<IValidate>({
    email: '',
    password: '',
    confirm: ''
});

const authStore = useAuthStore();
const router = useRouter();

const handlerSubmit = async () => {
    const { result, errors } = validate({
        email: email.value,
        password: password.value,
        confirm: confirm.value
    });

    if (!result) {
        validateErrors.value = errors;
        return;
    }

    const response = await authStore.signUp(email.value, password.value);

    if (response) {
        router.push(AppRoutes.LOGIN);
    }
};

const onChangePage = () => {
    router.push(AppRoutes.LOGIN);
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
