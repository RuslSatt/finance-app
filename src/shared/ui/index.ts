import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Password from 'primevue/password';
import type { App } from 'vue';

export const usePrimeVue = (app: App) => {
    app.component('p-input', InputText);
    app.component('p-number', InputNumber);
    app.component('p-password', Password);
};
