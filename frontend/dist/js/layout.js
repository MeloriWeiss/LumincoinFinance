export class Layout {
    constructor() {
        this.sidebar = document.querySelector('#sidebar');
        this.sidebarToggler = document.querySelector('.sidebar_toggler');
        document.getElementById('logout').onclick = () => this.logout();

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

    logout() {
        // fetch
        window.location.hash = '#/login';
    }
}