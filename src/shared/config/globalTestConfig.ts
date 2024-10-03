import { createTestingPinia } from '@pinia/testing';
import type { GlobalMountOptions } from 'node_modules/@vue/test-utils/dist/types';
import InputText from 'primevue/inputtext';
import { vi } from 'vitest';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Password from 'primevue/password';
import { router } from '@/app/router/router';

export function globalTestConfig(initialState = {}): GlobalMountOptions {
    return {
        plugins: [
            createTestingPinia({
                createSpy: vi.fn,
                initialState,
                stubActions: false
            }),
            PrimeVue,
            router
        ],
        components: {
            'p-input': InputText,
            'p-password': Password,
            'p-button': Button
        }
    };
}
