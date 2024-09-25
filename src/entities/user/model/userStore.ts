import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface User {
    id: number;
    name: string;
    email: string;
    token: string;
}

export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null);

    /**
     * Установка пользователя
     * @param {User} data - данные пользователя
     */
    function setUser(data: User) {
        user.value = data;
        localStorage.setItem('user', JSON.stringify(data));
    }

    /** Выход, обнуление пользователя */
    function logout() {
        user.value = null;
        localStorage.removeItem('user');
    }

    /** Инициализация пользователя */
    function initUser() {
        const data = localStorage.getItem('user');
        if (data) user.value = JSON.parse(data);
    }

    return { user, setUser, logout, initUser };
});
