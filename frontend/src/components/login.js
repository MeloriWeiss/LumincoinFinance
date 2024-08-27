import {AuthUtils} from "../utils/auth-utils.js";
import {HttpUtils} from "../utils/http-utils.js";

export class Login {
    constructor() {
        this.loginError = document.getElementById('login-error');
        this.validations = [
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
                valid: true,
                element: null,
            },
        ];

        this.initInputs();

        document.getElementById('login-button').onclick = () => {
            if (this.validateForm()) {
                this.login();
            }
        }
    }

    initInputs() {
        this.validations.forEach(validation => validation.element = document.getElementById(validation.id));
        let emailValidation = this.validations.find(validation => validation.name === 'email');
        emailValidation.element = document.getElementById(emailValidation.id);
        emailValidation.element.onchange = () => {
            this.loginError.classList.remove('d-block');
            if (!emailValidation.element.value.match(emailValidation.regex)) {
                emailValidation.element.classList.add('is-invalid');
                emailValidation.valid = false;
            } else {
                emailValidation.element.classList.remove('is-invalid');
                emailValidation.valid = true;
            }
        }
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

    async login() {
        const email = this.validations.find(validation => validation.name === 'email').element.value;
        const password = this.validations.find(validation => validation.name === 'password').element.value;
        const rememberMe = document.getElementById('remember-me').checked;
        let result = await HttpUtils.request('/login', 'POST', {
            email: email,
            password: password,
            rememberMe: rememberMe,
        });
        if (!result) {
            this.loginError.classList.add('d-block');
        } else if (result && result.tokens && result.tokens.accessToken && result.tokens.refreshToken && result.user) {
            AuthUtils.setAuthInfo(result.tokens.accessToken, result.tokens.refreshToken);
            if (!AuthUtils.getAuthUserInfo()) {
                AuthUtils.setUserInfo(result.user);
            }
            window.location.hash = '#/';
        } else {
            alert('Не удалось запросить данные');
        }
    }
}