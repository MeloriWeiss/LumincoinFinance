import {AuthUtils} from "../utils/auth-utils";
import {HttpUtils} from "../utils/http-utils";

export class Layout {
    constructor() {
        this.initLayout();
    }

    initLayout() {
        this.sidebar = document.querySelector('#sidebar');
        this.sidebarToggler = document.querySelector('.sidebar_toggler');
        document.getElementById('logout').onclick = () => this.logout();

        if (AuthUtils.getAuthUserInfo().name && AuthUtils.getAuthUserInfo().lastName) {
            document.getElementById('full-name').innerHTML =
                `${AuthUtils.getAuthUserInfo().name} ${AuthUtils.getAuthUserInfo().lastName}`;
        }

        this.sidebarToggler.addEventListener('click', () => {
            this.sidebar.classList.toggle('show');
            this.sidebarToggler.classList.toggle('sidebar-is-active');
        });

        window.addEventListener('resize', () => {
            this.toggleSidebar();
        });

        this.toggleSidebar();
    }

    toggleSidebar() {
        const screenWidth = window.screen.width;
        if (screenWidth < 992) {
            this.sidebar.classList.remove('show');
            this.sidebarToggler.classList.remove('sidebar-is-active');
        } else {
            this.sidebar.classList.add('show');
            this.sidebarToggler.classList.add('sidebar-is-active');
        }
    }

    async logout() {
        let refreshToken = AuthUtils.getAuthTokensInfo().refreshToken;
        if (refreshToken) {
            let result = await HttpUtils.request('/logout', 'POST', {
                refreshToken: refreshToken,
            });
            if (result) {
                AuthUtils.resetAuthInfo();
                return window.location.hash = '#/login';
            } else {
                return alert('Ошибка выхода');
            }
        } else {
            return alert('Ошибка выхода');
        }
    }
}