<template>
    <div class="auth">
        <p-input type="email" placeholder="Email" v-model="email" />
        <p-input type="password" placeholder="Password" v-model="password" />
        <p-input
            v-if="type === 'register'"
            type="password"
            placeholder="Confirm password"
            v-model="confirmPassword"
        />
        <p-button @click="handlerSubmit" class="btn-login" type="submit" :label="btnLabel" />
        <p-button @click="onChangePage" class="btn-auth" link :label="account" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../model/authStore';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const authStore = useAuthStore();
const router = useRouter();

const props = defineProps<{
    type: 'login' | 'register';
}>();

const account =
    props.type === 'login' ? "Don't have an account? Register" : 'Already have an account? Login';

const btnLabel = props.type === 'login' ? 'Login' : 'Register';

const handlerSubmit = () => {
    if (props.type === 'login') {
        onSignIn();
    } else {
        onSignUp();
    }
};

const onSignIn = () => {
    authStore.signIn(email.value, password.value);
};

const onSignUp = () => {
    authStore.signUp(email.value, password.value);
};

const onChangePage = () => {
    router.push(`/${props.type === 'login' ? 'registration' : 'login'}`);
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
</style>
