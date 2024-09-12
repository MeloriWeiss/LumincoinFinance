import {AuthUtils} from "../utils/auth-utils";
import {HttpUtils} from "../utils/http-utils";
import {BalanceType} from "../types/http-response.type";

export class Layout {
    readonly sidebar: HTMLElement | null;
    readonly sidebarToggler: HTMLElement | null;
    readonly balanceElement: HTMLElement | null;
    readonly changeBalanceInput: HTMLInputElement | null;

    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.sidebarToggler = document.querySelector('.sidebar_toggler');
        this.balanceElement = document.getElementById('balance');
        this.changeBalanceInput = <HTMLInputElement | null>document.getElementById('edit-balance');

        this.initLayout();
    }

    private initLayout(): void {
        const logoutButton: HTMLElement | null = document.getElementById('logout');
        if (logoutButton) {
            logoutButton.onclick = () => this.logout();
        }

        if (AuthUtils.getAuthUserInfo()) {
            const fullNameElement: HTMLElement | null = document.getElementById('full-name');
            if (fullNameElement) {
                fullNameElement.innerHTML = `${AuthUtils.getAuthUserInfo().name} ${AuthUtils.getAuthUserInfo().lastName}`;
            }
        }

        if (this.sidebarToggler && this.sidebar) {
            this.sidebarToggler.addEventListener('click', () => {
                this.sidebar!.classList.toggle('show');
                this.sidebarToggler!.classList.toggle('sidebar-is-active');
            });
        }

        window.addEventListener('resize', () => {
            this.toggleSidebar();
        });

        $('#balance-element').magnificPopup({type: 'inline'});

        this.toggleSidebar();
        this.getBalance().then();

        const saveBalanceButton: HTMLElement | null = document.getElementById('save-balance');
        if (saveBalanceButton) {
            saveBalanceButton.onclick = () => this.changeBalance();
        }
    }

    private toggleSidebar(): void {
        if (this.sidebar && this.sidebarToggler) {
            const screenWidth: number = window.screen.width;
            if (screenWidth < 992) {
                this.sidebar.classList.remove('show');
                this.sidebarToggler.classList.remove('sidebar-is-active');
            } else {
                this.sidebar.classList.add('show');
                this.sidebarToggler.classList.add('sidebar-is-active');
            }
        }
    }

    private async logout(): Promise<void> {
        let refreshToken: string | null = AuthUtils.getAuthTokensInfo().refreshToken;
        if (refreshToken) {
            let result = await HttpUtils.request('/logout', 'POST', {
                refreshToken: refreshToken,
            });
            if (result) {
                AuthUtils.resetAuthInfo();
                window.location.hash = '#/login';
                return;
            } else {
                alert('Ошибка выхода');
                return;
            }
        } else {
            alert('Ошибка выхода');
            return;
        }
    }

    private async getBalance(): Promise<void> {
        if (this.balanceElement && this.changeBalanceInput) {
            let result: BalanceType = await HttpUtils.request('/balance', 'GET');
            if (result && result.hasOwnProperty('balance')) {
                this.balanceElement.innerText = result.balance.toString();
                this.changeBalanceInput.value = result.balance.toString();
            }
        }
    }

    private async changeBalance(): Promise<void> {
        if (this.changeBalanceInput) {
            let result: BalanceType = await HttpUtils.request('/balance', 'PUT', {
                newBalance: this.changeBalanceInput.value
            });
            if (result && this.balanceElement) {
                this.balanceElement.innerText = result.balance.toString();
                return;
            }
        }
        alert('Не удалось изменить баланс');
    }
}