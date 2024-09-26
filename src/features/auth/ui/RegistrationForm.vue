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
        <p-input type="password" placeholder="Confirm password" v-model="confirm" />
        <p-message v-if="validateErrors.confirm" severity="error">{{
            validateErrors.confirm
        }}</p-message>
        <p-button class="btn-login" type="submit" label="Register" />
        <p-button
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

const handlerSubmit = () => {
    const { result, errors } = validate({
        email: email.value,
        password: password.value,
        confirm: confirm.value
    });

    if (!result) {
        validateErrors.value = errors;
        return;
    }

    authStore.signUp(email.value, password.value);
};

const onChangePage = () => {
    router.push(`/login`);
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
