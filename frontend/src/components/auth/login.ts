import {AuthUtils} from "../../utils/auth-utils.js";
import {HttpUtils} from "../../utils/http-utils.js";
import {ValidationType} from "../../types/validation.type";

export class Login {
    readonly loginError: HTMLElement | null;
    private validations: ValidationType[];
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

        const loginButton: HTMLElement | null = document.getElementById('login-button');
        if (loginButton) {
            loginButton.onclick = () => {
                if (this.validateForm()) {
                    this.login().then();
                }
            }
        }
    }

    private initInputs(): void {
        this.validations.forEach((validation: ValidationType) => validation.element = <HTMLInputElement | null>document.getElementById(validation.id));
        let emailValidation: ValidationType | undefined = this.validations.find((validation: ValidationType) => validation.name === 'email');
        if (emailValidation) {
            emailValidation.element = <HTMLInputElement | null>document.getElementById(emailValidation.id);
            if (emailValidation.element) {
                emailValidation.element.onchange = () => {
                    if (this.loginError) {
                        this.loginError.classList.remove('d-block');
                        if (!emailValidation!.element!.value.match(emailValidation!.regex)) {
                            emailValidation!.element!.classList.add('is-invalid');
                            emailValidation!.valid = false;
                        } else {
                            emailValidation!.element!.classList.remove('is-invalid');
                            emailValidation!.valid = true;
                        }
                    }
                }
            }
        }
    }

    private validateForm(): boolean {
        let isValid: boolean = true;
        this.validations.forEach((validation: ValidationType) => {
            if (!validation.valid && validation.element) {
                validation.element.classList.add('is-invalid');
                isValid = false;
            }
        });
        return isValid;
    }

    private async login(): Promise<void> {
        const emailInputObj: ValidationType | undefined = this.validations.find((validation: ValidationType) => validation.name === 'email')
        let email: string | null = null;
        if (emailInputObj) {
            email = emailInputObj.element!.value;
        }
        const passwordInputObj: ValidationType | undefined = this.validations.find((validation: ValidationType) => validation.name === 'password');
        let password: string | null = null;
        if (passwordInputObj) {
            password = passwordInputObj.element!.value;
        }
        const rememberMeElement: HTMLInputElement | null = <HTMLInputElement | null>document.getElementById('remember-me');
        let rememberMe: boolean = false;
        if (rememberMeElement) {
            rememberMe = rememberMeElement.checked;
        }
        if (email && password) {
            let result = await HttpUtils.request('/login', 'POST', {
                email: email,
                password: password,
                rememberMe: rememberMe,
            });
            if (!result) {
                if (this.loginError) {
                    this.loginError.classList.add('d-block');
                }
            } else if (result && result.tokens && result.tokens.accessToken && result.tokens.refreshToken && result.user) {
                AuthUtils.setAuthInfo(result.tokens.accessToken, result.tokens.refreshToken);
                if (!AuthUtils.getAuthUserInfo()) {
                    AuthUtils.setUserInfo(result.user);
                }
                window.location.hash = '#/';
            } else {
                alert('Не удалось запросить данные');
            }
        } else {
            alert('Не удалось запросить данные');
        }
    }
}