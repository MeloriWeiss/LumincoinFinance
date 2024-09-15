import {AuthUtils} from "../../utils/auth-utils";
import {HttpUtils} from "../../utils/http-utils";
import {
    AuthErrorResponseType,
    LoginResponseType,
    RegistrationResponseType
} from "../../types/http-response.type";
import {ValidationType} from "../../types/validation.type";

export class Registration {
    private commonErrorElement: HTMLElement | null;
    private validations: ValidationType[];
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
                regex: /.*/,
                valid: false,
                element: null,
            },
        ];

        this.initInputs();

        const loginButton: HTMLElement | null = document.getElementById('login-button');
        if (loginButton) {
            loginButton.onclick = () => {
                if (this.validateForm()) {
                    this.registration().then();
                }
            }
        }
    }

    private initInputs(): void {
        let repeatPasswordValidation: ValidationType | undefined = this.validations.find((validation: ValidationType) => validation.name === 'password');
        this.validations.forEach((validation: ValidationType) => {
            const validationInput: HTMLInputElement | null = <HTMLInputElement | null>document.getElementById(validation.id);
            if (validationInput && validation.element) {
                validation.element = validationInput;
                validation.element.onchange = () => {
                    if (validation.name === 'repeat-password') {
                        if (repeatPasswordValidation && repeatPasswordValidation.element) {
                            if (validation.element!.value !== repeatPasswordValidation.element.value) {
                                validation.element!.classList.add('is-invalid');
                                validation.valid = false;
                            } else {
                                validation.element!.classList.remove('is-invalid');
                                validation.valid = true;
                            }
                        } else {
                            alert('Не удалось распознать данные');
                        }
                    } else {
                        if (!validation.element!.value.match(validation.regex)) {
                            validation.element!.classList.add('is-invalid');
                            validation.valid = false;
                        } else {
                            validation.element!.classList.remove('is-invalid');
                            validation.valid = true;
                        }
                    }
                }
            }
        });
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

    private async registration(): Promise<void> {
        let error: boolean = false;
        const nameInputObj: ValidationType | undefined = this.validations.find((validation: ValidationType) => validation.name === 'full-name');
        let name: string | null = null;
        if (nameInputObj) {
            name = nameInputObj.element!.value.split(' ')[1];
        }
        const lastNameInputObj: ValidationType | undefined = this.validations.find((validation: ValidationType) => validation.name === 'full-name');
        let lastName: string | null = null;
        if (lastNameInputObj) {
            lastName = lastNameInputObj.element!.value.split(' ')[0];
        }
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
        const repeatPasswordObj: ValidationType | undefined = this.validations.find((validation: ValidationType) => validation.name === 'repeat-password');
        let repeatPassword: string | null = null;
        if (repeatPasswordObj) {
            repeatPassword = repeatPasswordObj.element!.value;
        }
        if (name && lastName && email && password && repeatPassword) {
            let result: RegistrationResponseType | AuthErrorResponseType = await HttpUtils.request('/signup', 'POST', {
                name: name,
                lastName: lastName,
                email: email,
                password: password,
                passwordRepeat: repeatPassword,
            });
            if (result as RegistrationResponseType !== undefined) {
                AuthUtils.setUserInfo((result as RegistrationResponseType).user);
            } else {
                error = true;
                if (this.commonErrorElement) {
                    this.commonErrorElement.classList.add('d-block');
                }
            }

            if (!error) {
                let result: LoginResponseType | AuthErrorResponseType = await HttpUtils.request('/login', 'POST', {
                    email: email,
                    password: password,
                    rememberMe: false,
                });
                if (result as LoginResponseType !== undefined) {
                    AuthUtils.setAuthInfo((result as LoginResponseType).tokens.accessToken, (result as LoginResponseType).tokens.refreshToken);
                    window.location.hash = '#/';
                } else {
                    alert('Не удалось запросить данные');
                }
            }
        } else {
            alert("Не удалось зарегистрироваться");
        }
    }
}