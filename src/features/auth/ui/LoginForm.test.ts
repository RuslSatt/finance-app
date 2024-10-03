import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { LoginForm } from '..';
import { globalTestConfig } from '@/shared/config/globalTestConfig';

test('submit form', async () => {
    const wrapper = mount(LoginForm, {
        global: {
            ...globalTestConfig()
        }
    });

    const email = 'test@mail.ru';
    const password = 'test123';

    await wrapper.find('input[type="email"]').setValue(email);
    await wrapper.find('input[type="password"]').setValue(password);
    await wrapper.find('form').trigger('submit');

    expect(wrapper.emitted()).toHaveProperty('submit');
    expect(wrapper.emitted('login')).toHaveLength(1);
    expect(wrapper.emitted('login')?.[0][0]).toEqual([email, password]);
});
