import {Layout} from "./components/layout.js";
import {Main} from "./components/main.js";
import {IncomesMain} from "./components/incomes/incomes-main.js";
import {ExpensesMain} from "./components/expenses/expenses-main.js";
import {ExpensesCreate} from "./components/expenses/expenses-create.js";
import {IncomesCreate} from "./components/incomes/incomes-create.js";
import {FileUtils} from "./utils/file-utils.js";
import {IncomesEdit} from "./components/incomes/incomes-edit.js";
import {ExpensesEdit} from "./components/expenses/expenses-edit.js";
import {Registration} from "./components/auth/registration.js";
import {Login} from "./components/auth/login.js";
import {AuthUtils} from "./utils/auth-utils";
import {IncomesExpensesCreate} from "./components/incomes-expenses/incomes-expenses-create.js";
import {IncomesExpensesMain} from "./components/incomes-expenses/incomes-expenses-main.js";
import {IncomesExpensesEdit} from "./components/incomes-expenses/incomes-expenses-edit.js";

export class Router {
    constructor() {
        this.pageContentElement = document.getElementById('page');
        this.tabTitle = document.getElementById('tab-title');

        window.addEventListener('DOMContentLoaded', this.openNewRoute.bind(this));
        window.addEventListener('popstate', this.openNewRoute.bind(this));

        this.routes = [
            {
                route: '#/registration',
                tabTitle: 'Регистрация',
                template: 'templates/auth/registration.html',
                styles: [
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                ],
                useLayout: false,
                onload: () => {
                    new Registration();
                },
                needAuthorization: false,
            },
            {
                route: '#/login',
                tabTitle: 'Вход в систему',
                template: 'templates/auth/login.html',
                styles: [
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                ],
                useLayout: false,
                onload: () => {
                    new Login();
                },
                needAuthorization: false,
            },
            {
                route: '#/',
                tabTitle: 'Главная',
                pageTitle: 'Главная',
                template: 'templates/main.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                    'lib/css/jquery-ui.min.css',
                    'css/common.css',
                    'css/pages/main.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery.magnific-popup.min.js',
                    'lib/js/jquery-ui.min.js',
                    'lib/js/chart.js',
                ],
                onload: () => {
                    new Layout();
                    new Main();
                },
                needAuthorization: true,
            },
            {
                route: '#/expenses-create',
                tabTitle: 'Создание категории',
                pageTitle: 'Создание категории расходов',
                template: 'templates/category-manipulations/create-category.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery.magnific-popup.min.js',
                ],
                onload: () => {
                    new Layout();
                    new ExpensesCreate();
                },
                needAuthorization: true,
            },
            {
                route: '#/expenses-edit',
                tabTitle: 'Редактирование категории',
                pageTitle: 'Редактирование категории расходов',
                template: 'templates/category-manipulations/edit-category.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery.magnific-popup.min.js',
                ],
                onload: () => {
                    new Layout();
                    new ExpensesEdit();
                },
                needAuthorization: true,
            },
            {
                route: '#/expenses-main',
                tabTitle: 'Расходы',
                pageTitle: 'Расходы',
                template: 'templates/expenses/expenses-main.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                    'css/common.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery-3.7.1.min.js',
                    'lib/js/jquery.magnific-popup.min.js',
                ],
                onload: () => {
                    new Layout();
                    new ExpensesMain();
                },
                needAuthorization: true,
            },
            {
                route: '#/incomes-create',
                tabTitle: 'Создание категории',
                pageTitle: 'Создание категории доходов',
                template: 'templates/category-manipulations/create-category.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery-3.7.1.min.js',
                    'lib/js/jquery.magnific-popup.min.js',
                ],
                onload: () => {
                    new Layout();
                    new IncomesCreate();
                },
                needAuthorization: true,
            },
            {
                route: '#/incomes-edit',
                tabTitle: 'Редактирование категории',
                pageTitle: 'Редактирование категории доходов',
                template: 'templates/category-manipulations/edit-category.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery.magnific-popup.min.js',
                ],
                onload: () => {
                    new Layout();
                    new IncomesEdit();
                },
                needAuthorization: true,
            },
            {
                route: '#/incomes-main',
                tabTitle: 'Доходы',
                pageTitle: 'Доходы',
                template: 'templates/incomes/incomes-main.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                    'css/common.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery-3.7.1.min.js',
                    'lib/js/jquery.magnific-popup.min.js',
                ],
                onload: () => {
                    new Layout();
                    new IncomesMain();
                },
                needAuthorization: true,
            },
            {
                route: '#/incomes-expenses-create',
                tabTitle: 'Создание дохода/расхода',
                pageTitle: 'Создание дохода/расхода',
                template: 'templates/incomes-expenses/incomes-expenses-create.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                    'lib/css/jquery-ui.min.css',
                    'lib/css/select2.min.css',
                    'lib/css/select2-bootstrap4.min.css',
                    'css/common.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery-3.7.1.min.js',
                    'lib/js/jquery.magnific-popup.min.js',
                    'lib/js/jquery-ui.min.js',
                    'lib/js/select2.full.min.js',
                ],
                onload: () => {
                    new Layout();
                    new IncomesExpensesCreate();
                },
                needAuthorization: true,
            },
            {
                route: '#/incomes-expenses-edit',
                tabTitle: 'Редактирование дохода/расхода',
                pageTitle: 'Редактирование дохода/расхода',
                template: 'templates/incomes-expenses/incomes-expenses-edit.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                    'lib/css/jquery-ui.min.css',
                    'lib/css/select2.min.css',
                    'lib/css/select2-bootstrap4.min.css',
                    'css/common.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery-3.7.1.min.js',
                    'lib/js/jquery.magnific-popup.min.js',
                    'lib/js/jquery-ui.min.js',
                    'lib/js/select2.full.min.js',
                ],
                onload: () => {
                    new Layout();
                    new IncomesExpensesEdit();
                },
                needAuthorization: true,
            },
            {
                route: '#/incomes-expenses-main',
                tabTitle: 'Доходы и расходы',
                pageTitle: 'Доходы и расходы',
                template: 'templates/incomes-expenses/incomes-expenses-main.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                    'lib/css/jquery-ui.min.css',
                    'css/common.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery-3.7.1.min.js',
                    'lib/js/jquery.magnific-popup.min.js',
                    'lib/js/jquery-ui.min.js',
                ],
                onload: () => {
                    new Layout();
                    new IncomesExpensesMain();
                },
                needAuthorization: true,
            }
        ]
    }

    prepareNewRouteStyles(newRouteObj) {
        let styles = document.head.getElementsByTagName('link');
        for (let i = styles.length - 1; i >= 0; i--) {
            if (!styles[i].href.match(/.*lib\/css\/bootstrap\.min\.css/)) {
                styles[i].remove();
            }
        }

        newRouteObj.styles.forEach(style => {
            FileUtils.addNewStyle(style);
        });
    }

    async prepareNewRouteScripts(newRouteObj) {
        let scripts = document.body.getElementsByTagName('script');
        for (let i = scripts.length - 1; i >= 0; i--) {
            if (!scripts[i].src.match(/.*lib\/js\/bootstrap\..*min\.js/)) {
                scripts[i].remove();
            }
        }

        for (let script of newRouteObj.scripts) {
            await FileUtils.addNewScript(script);
        }
    }

    async openNewRoute() {
        const newRouteName = window.location.hash.split('?')[0];
        let newRouteObj = this.routes.find(route => route.route === newRouteName);
        if (newRouteObj) {
            if (newRouteObj.needAuthorization && !AuthUtils.userIsAuthorized()) {
                return window.location.hash = '#/login';
            } else if (!newRouteObj.needAuthorization && AuthUtils.userIsAuthorized()) {
                return window.location.hash = '#/';
            }
            if (newRouteObj.useLayout) {
                this.pageContentElement.innerHTML = await fetch(newRouteObj.useLayout).then(response => response.text());
                this.pageContentElement = document.getElementById('content');

                const title = document.getElementById('page-title');
                if (title) {
                    title.innerText = newRouteObj.pageTitle;
                }
            }

            this.pageContentElement.innerHTML = await fetch(newRouteObj.template).then(response => response.text());
            this.pageContentElement = document.getElementById('page');
            this.tabTitle.innerText = newRouteObj.tabTitle;

            this.prepareNewRouteStyles(newRouteObj);
            if (newRouteObj.hasOwnProperty('scripts') && newRouteObj.scripts.length > 0) {
                await this.prepareNewRouteScripts(newRouteObj);
            }
            if (newRouteObj.onload && typeof newRouteObj.onload === 'function') {
                newRouteObj.onload();
            }
        } else {
            if (AuthUtils.userIsAuthorized()) {
                window.location.hash = '#/';
            } else {
                window.location.hash = '#/login';
            }
        }
    }
}