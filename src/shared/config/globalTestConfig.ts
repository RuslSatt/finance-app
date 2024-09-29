import { createTestingPinia } from '@pinia/testing';
import type { GlobalMountOptions } from 'node_modules/@vue/test-utils/dist/types';
import InputText from 'primevue/inputtext';
import { vi } from 'vitest';
import PrimeVue from 'primevue/config';

export const globalTestConfig: GlobalMountOptions = {
    plugins: [
        createTestingPinia({
            createSpy: vi.fn
        }),
        PrimeVue
    ],
    components: {
        'p-input': InputText
    }
};
