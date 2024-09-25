import { defineStore } from 'pinia';
import { ref } from 'vue';

interface User {
    id: string;
    app_metadata: {
        provider?: string;
        roles?: string[];
    };
    created_at: string;
    email: string | null;
    family_name: string | null;
    given_name: string | null;
    user_metadata: {
        [key: string]: any;
    };
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

    /** Очистка пользователя */
    function clearUser() {
        user.value = null;
        localStorage.removeItem('user');
    }

    /** Инициализация пользователя */
    function initUser() {
        const data = localStorage.getItem('user');
        if (data) user.value = JSON.parse(data);
    }

    return { user, setUser, clearUser, initUser };
});
