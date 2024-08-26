import {AuthUtils} from "../utils/auth-utils";
import {HttpUtils} from "../utils/http-utils";

export class Registration {
    constructor() {
        this.commonErrorElement = document.getElementById('common-error');

        this.validations = [
            {
                name: 'full-name',
                id: 'full-name',
                regex: /^\s*[А-Я][а-я]+\s[А-Я][а-я]+\s[А-Я][а-я]+\s*$/,
                valid: false,
                element: null,
            },
            {
                name: 'email',
                id: 'email',
                regex: /^\s*[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}\s*$/,
                valid: false,
                element: null,
            },
            {
                name: 'password',
                id: 'password',
                regex: /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                valid: false,
                element: null,
            },
            {
                name: 'repeat-password',
                id: 'repeat-password',
                regex: '',
                valid: false,
                element: null,
            },
        ];

        this.initInputs();

        document.getElementById('login-button').onclick = () => {
            if (this.validateForm()) {
                this.registration().then();
            }
        }
    }

    initInputs() {
        let repeatPasswordValidation = this.validations.find(validation => validation.name === 'password');
        this.validations.forEach(validation => {
            validation.element = document.getElementById(validation.id);
            validation.element.onchange = () => {
                if (validation.name === 'repeat-password') {
                    if (validation.element.value !== repeatPasswordValidation.element.value) {
                        validation.element.classList.add('is-invalid');
                        validation.valid = false;
                    } else {
                        validation.element.classList.remove('is-invalid');
                        validation.valid = true;
                    }
                } else {
                    if (!validation.element.value.match(validation.regex)) {
                        validation.element.classList.add('is-invalid');
                        validation.valid = false;
                    } else {
                        validation.element.classList.remove('is-invalid');
                        validation.valid = true;
                    }
                }
            }
        });
    }

    validateForm() {
        let isValid = true;
        this.validations.forEach(validation => {
            if (!validation.valid) {
                validation.element.classList.add('is-invalid');
                isValid = false;
            }
        });
        return isValid;
    }

    async registration() {
        let error = false;
        const name = this.validations.find(validation => validation.name === 'full-name').element.value.split(' ')[1];
        const lastName = this.validations.find(validation => validation.name === 'full-name').element.value.split(' ')[0];
        const email = this.validations.find(validation => validation.name === 'email').element.value;
        const password = this.validations.find(validation => validation.name === 'password').element.value;
        const repeatPassword = this.validations.find(validation => validation.name === 'repeat-password').element.value;
        let result = await HttpUtils.request('/signup', 'POST', {
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            passwordRepeat: repeatPassword,
        });
        if (result && result.user && result.user.id && result.user.email && result.user.name && result.user.lastName) {
            AuthUtils.setUserInfo(result.user);
        } else {
            error = true;
            this.commonErrorElement.classList.add('d-block');
        }

        if (!error) {
            result = await HttpUtils.request('/login', 'POST', {
                email: email,
                password: password,
                rememberMe: false,
            });
            if (result && result.tokens && result.tokens.accessToken && result.tokens.refreshToken && result.user) {
                AuthUtils.setAuthInfo(result.tokens.accessToken, result.tokens.refreshToken, result.user);
                window.location.hash = '#/';
            } else {
                alert('Не удалось запросить данные');
            }
        }
    }
}