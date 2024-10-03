import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SwitchTheme from './SwitchTheme.vue';
import { globalTestConfig } from '@/shared/config/globalTestConfig';
import { useThemeStore } from '../model/themeStore';

test('submit form', async () => {
    const wrapper = mount(SwitchTheme, {
        global: {
            ...globalTestConfig({
                theme: {
                    theme: 'dark'
                }
            })
        }
    });

    const store = useThemeStore();

    const button = wrapper.find('button');

    await button.trigger('click');

    expect(store.theme).toBe('light');
    expect(document.documentElement.classList.contains('app-dark')).toBe(false);
});
