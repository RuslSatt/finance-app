import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './app/styles/reset.css';
import './app/styles/main.css';

import App from './App.vue';
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';

import { usePrimeVue } from './shared/ui';
import { router } from './app/router/router';

const app = createApp(App);

// State Management
app.use(createPinia());
// UI Library
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    },
    ripple: true
});

usePrimeVue(app);

app.use(router);

app.mount('#app');
