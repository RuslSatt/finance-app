import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { globalTestConfig } from '@/shared/config/globalTestConfig';
import LogoutButton from './LogoutButton.vue';
import { useUserStore } from '@/entities/user';

test('submit form', async () => {
    const wrapper = mount(LogoutButton, {
        global: {
            ...globalTestConfig({
                user: {
                    user: {
                        id: '1',
                        app_metadata: {
                            provider: 'local',
                            roles: ['admin']
                        }
                    }
                }
            })
        }
    });

    const store = useUserStore();

    const button = wrapper.find('button');

    await button.trigger('click');

    expect(store.user).toBe(null);
});
