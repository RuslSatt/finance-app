import { HomePage } from '@/pages/home';
import { LoginPage, RegistrationPage } from '@/pages/login';
import type { VueElement } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

enum AppRoutes {
    HOME = '/',
    LOGIN = '/login',
    REGISTRATION = '/registration'
}

interface RouterPath {
    path: string;
    component: VueElement;
}

const routes: RouterPath[] = [
    { path: AppRoutes.HOME, component: HomePage },
    { path: AppRoutes.LOGIN, component: LoginPage },
    { path: AppRoutes.REGISTRATION, component: RegistrationPage }
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
