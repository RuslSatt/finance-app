const validateEmail = (email: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validatePassword = (password: string) => {
    return password.length >= 6;
};

const validateConfirm = (password: string, confirm?: string) => {
    if (confirm === undefined) {
        return true;
    }
    return password === confirm;
};

export interface IValidate {
    email: string;
    password: string;
    confirm?: string;
}

export interface IValidateResult {
    result: boolean;
    errors: IValidate;
}

export const validate = (props: IValidate): IValidateResult => {
    const { email, password, confirm } = props;

    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);
    const confirmValid = validateConfirm(password, confirm);

    const errors = {
        email: !emailValid ? 'Invalid email' : '',
        password: !passwordValid ? 'Invalid password' : '',
        confirm: !confirmValid ? 'Passwords do not match' : ''
    };

    return {
        result: emailValid && passwordValid && confirmValid,
        errors
    };
};
