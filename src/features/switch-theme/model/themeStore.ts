import { defineStore } from 'pinia';
import { ref } from 'vue';

export type Theme = 'light' | 'dark';

export const useThemeStore = defineStore('theme', () => {
    const theme = ref<'light' | 'dark'>('light');

    function initTheme() {
        const storageTheme = localStorage.getItem('theme');

        if (storageTheme) {
            theme.value = storageTheme as 'light' | 'dark';
        }

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme.value = 'dark';
        }

        if (theme.value === 'dark') {
            document.documentElement.classList.add('app-dark');
        }
    }

    function toggleTheme() {
        theme.value = theme.value === 'light' ? 'dark' : 'light';

        if (theme.value === 'dark') {
            document.documentElement.classList.add('app-dark');
        } else {
            document.documentElement.classList.remove('app-dark');
        }

        localStorage.setItem('theme', theme.value);
    }

    return { theme, initTheme, toggleTheme };
});
