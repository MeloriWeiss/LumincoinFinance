import {Layout} from "./components/layout.js";
import {IncomeExpensesMain} from "./components/income-expenses-main.js";
import {Main} from "./components/main.js";
import {IncomeMain} from "./components/income-main.js";
import {ExpensesMain} from "./components/expenses-main.js";
import {ExpensesCreate} from "./components/expenses-create.js";
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

                },
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

                },
            },
            {
                route: '#/',
                tabTitle: 'Главная',
                pageTitle: 'Главная',
                template: 'templates/main.html',
                styles: [
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                    'css/pages/main.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/chart.js',
                ],
                onload: () => {
                    new Layout();
                    new Main();
                },
            },
            {
                route: '#/expenses-create',
                tabTitle: 'Создание категории',
                pageTitle: 'Создание категории расходов',
                template: 'templates/category-manipulations/create-category.html',
                styles: [
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [

                ],
                onload: () => {
                    new Layout();
                    new ExpensesCreate();
                },
            },
            {
                route: '#/expenses-edit',
                tabTitle: 'Редактирование категории',
                pageTitle: 'Редактирование категории расходов',
                template: 'templates/category-manipulations/edit-category.html',
                styles: [
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [

                ],
                onload: () => {
                    new Layout();
                },
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
            },
            {
                route: '#/income-create',
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
                    new IncomeCreate();
                },
            },
            {
                route: '#/income-edit',
                tabTitle: 'Редактирование категории',
                pageTitle: 'Редактирование категории доходов',
                template: 'templates/category-manipulations/edit-category.html',
                styles: [
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [

                ],
                onload: () => {
                    new Layout();
                },
            },
            {
                route: '#/income-main',
                tabTitle: 'Доходы',
                pageTitle: 'Доходы',
                template: 'templates/income/income-main.html',
                styles: [
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
                    new IncomeMain();
                },
            },
            {
                route: '#/income-expenses-create',
                tabTitle: 'Создание дохода/расхода',
                pageTitle: 'Создание дохода/расхода',
                template: 'templates/income-expenses/income-expenses-create.html',
                styles: [
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [

                ],
                onload: () => {
                    new Layout();
                },
            },
            {
                route: '#/income-expenses-edit',
                tabTitle: 'Редактирование дохода/расхода',
                pageTitle: 'Редактирование дохода/расхода',
                template: 'templates/income-expenses/income-expenses-edit.html',
                styles: [
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [

                ],
                onload: () => {
                    new Layout();
                },
            },
            {
                route: '#/income-expenses-main',
                tabTitle: 'Доходы и расходы',
                pageTitle: 'Доходы и расходы',
                template: 'templates/income-expenses/income-expenses-main.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                    'css/pages/income-expenses-main.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery-3.7.1.min.js',
                    'lib/js/jquery.magnific-popup.min.js',
                ],
                onload: () => {
                    new Layout();
                    new IncomeExpensesMain();
                },
            }
        ]
    }

    prepareNewRouteStyles(newRouteObj) {
        let styles = document.head.getElementsByTagName('link');
        for (let style of styles) {
            if (!style.href.match(/.*lib\/css\/bootstrap\.min\.css/)) {
                style.remove();
            }
        }

        newRouteObj.styles.forEach(style => {
            let styleElement = document.createElement('link');
            styleElement.setAttribute('rel', 'stylesheet');
            styleElement.setAttribute('href', style);
            document.head.appendChild(styleElement);
        });
    }

    async prepareNewRouteScripts(newRouteObj) {
        let scripts = document.body.getElementsByTagName('script');
        for (let script of scripts) {
            if (!script.src.match(/.*lib\/js\/bootstrap\..*min\.js/)) {
                script.remove();
            }
        }

        for (let script of newRouteObj.scripts) {
            await this.addNewScript(script);
        }
    }

    addNewScript(script) {
        return new Promise((resolve, reject) => {
            let scriptElement = document.createElement('script');
            scriptElement.src = script;
            scriptElement.onload = () => {resolve('Script loaded: ' + script)};
            scriptElement.onerror = () => {reject('Failed load script: ' + script)};
            document.body.appendChild(scriptElement);
        })
    }

    async openNewRoute() {
        const newRouteName = window.location.hash;
        const newRouteObj = this.routes.find(route => route.route === newRouteName);
        if (newRouteObj) {
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
            window.location.hash = '#/';
        }
    }
}