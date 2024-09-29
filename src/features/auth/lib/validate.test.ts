import { describe, expect, test } from 'vitest';

import { validate, type IValidate } from './validate';

describe('validate auth form', () => {
    test('valid email and password', () => {
        const data: IValidate = {
            email: 'test@mail.ru',
            password: 'test123'
        };

        expect(validate(data)).toEqual({
            result: true,
            errors: {
                email: '',
                password: '',
                confirm: ''
            }
        });
    });

    test('invalid email', () => {
        const data: IValidate = {
            email: 'test',
            password: 'test123'
        };

        expect(validate(data)).toEqual({
            result: false,
            errors: {
                email: 'Invalid email',
                password: '',
                confirm: ''
            }
        });
    });

    test('invalid password', () => {
        const data: IValidate = {
            email: 'test@mail.ru',
            password: 'test'
        };

        expect(validate(data)).toEqual({
            result: false,
            errors: {
                email: '',
                password: 'Invalid password',
                confirm: ''
            }
        });
    });

    test('invalid confirm', () => {
        const data: IValidate = {
            email: 'test@mail.ru',
            password: 'test123',
            confirm: 'test12'
        };

        expect(validate(data)).toEqual({
            result: false,
            errors: {
                email: '',
                password: '',
                confirm: 'Passwords do not match'
            }
        });
    });

    test('valid confirm', () => {
        const data: IValidate = {
            email: 'test@mail.ru',
            password: 'test123',
            confirm: 'test123'
        };

        expect(validate(data)).toEqual({
            result: true,
            errors: {
                email: '',
                password: '',
                confirm: ''
            }
        });
    });
});
