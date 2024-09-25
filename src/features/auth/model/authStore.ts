import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const isLoading = ref<boolean>(false);
    const errorMsg = ref<string>('');

    /**
     * Авторизация пользователя
     * @param {string} email - адрес
     * @param {string} password - пароль
     */
    function signIn(email: string, password: string) {
        isLoading.value = true;
        errorMsg.value = '';
    }

    /**
     * Регистрация пользователя
     * @param {string} email - адрес
     * @param {string} password - пароль
     */
    function signUp(email: string, password: string) {
        isLoading.value = true;
        errorMsg.value = '';
    }

    return { isLoading, errorMsg, signIn, signUp };
});
