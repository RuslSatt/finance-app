import { LoginPage, RegistrationPage } from '@/pages/login';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: LoginPage },
    { path: '/login', component: LoginPage },
    { path: '/registration', component: RegistrationPage }
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
