import { defineStore } from 'pinia';
import { ref } from 'vue';
import { AuthApi } from '../api/auth.api';
import { useUserStore, type User } from '@/entities/user';

export const useAuthStore = defineStore('auth', () => {
    const isLoading = ref<boolean>(false);
    const errorMsg = ref<string>('');

    const userStore = useUserStore();

    /**
     * Авторизация пользователя
     * @param {string} email - адрес
     * @param {string} password - пароль
     */
    async function signIn(email: string, password: string) {
        isLoading.value = true;
        errorMsg.value = '';

        const { data, error } = await AuthApi.signIn(email, password);

        if (error) {
            errorMsg.value = error.message;
        } else {
            errorMsg.value = '';

            if (data) {
                userStore.setUser(data.user as User);
            }
        }
    }

    /**
     * Регистрация пользователя
     * @param {string} email - адрес
     * @param {string} password - пароль
     */
    async function signUp(email: string, password: string) {
        isLoading.value = true;
        errorMsg.value = '';

        const { data, error } = await AuthApi.signUp(email, password);

        if (error) {
            errorMsg.value = error.message;
        } else {
            errorMsg.value = '';

            if (data) {
                userStore.setUser(data.user as User);
            }
        }
    }

    /** Выход из аккаунта (удаление пользователя из хранилища) */
    function logout() {
        userStore.clearUser();
    }

    return { isLoading, errorMsg, signIn, signUp, logout };
});
