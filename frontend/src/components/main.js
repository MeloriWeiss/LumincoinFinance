import config from "../config/config";
import {DateUtils} from "../utils/date-utils";
import {HttpUtils} from "../utils/http-utils";

export class Main {
    constructor() {
        this.findElements();
        this.initLib();
        this.initButtons();
        this.init().then();
    }

    findElements() {
        this.incomesChart = document.getElementById('incomes-chart');
        this.expensesChart = document.getElementById('expenses-chart');
        this.dateFromInput = document.getElementById('date-from');
        this.dateToInput = document.getElementById('date-to');
    }

    async init() {
        document.getElementById('main-button').classList.add('active');
        this.dateButtons = [
            config.date.today,
            config.date.week,
            config.date.month,
            config.date.year,
            config.date.all,
            config.date.interval];
        this.currentDateOption = this.dateButtons[0];
        this.today = (new Date()).toLocaleDateString();
        this.dateFromInput.onchange = () => {
            this.charts.forEach(chart => chart.destroy());
            this.getOperations().then();
        }
        this.dateToInput.onchange = () => {
            this.charts.forEach(chart => chart.destroy());
            this.getOperations().then();
        }
        this.getOperations().then();
    }

    initLib() {
        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: 'Предыдущий',
            nextText: 'Следующий',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Не',
            dateFormat: 'yy-mm-dd',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);
        $('.date-input').datepicker();
    }

    initButtons() {
        let dateButtonsElement = document.getElementById('period-buttons');
        for (let i = 0; i < dateButtonsElement.children.length - 1; i++) {
            dateButtonsElement.children[i].children[0].setAttribute('data-id', i);
            dateButtonsElement.children[i].children[0].onclick = () => {
                this.charts.forEach(chart => chart.destroy());
                for (let i = 0; i < dateButtonsElement.children.length - 1; i++) {
                    if (dateButtonsElement.children[i].children[0].classList.contains('btn-secondary')) {
                        dateButtonsElement.children[i].children[0].classList.remove('btn-secondary');
                        dateButtonsElement.children[i].children[0].classList.add('btn-outline-secondary');
                    }
                }
                dateButtonsElement.children[i].children[0].classList.add('btn-secondary');
                dateButtonsElement.children[i].children[0].classList.remove('btn-outline-secondary');
                this.currentDateOption = this.dateButtons[dateButtonsElement.children[i].children[0].getAttribute('data-id')];
                this.getOperations().then();
                if (dateButtonsElement.children[i].children[0].innerText === 'Интервал') {
                    this.dateFromInput.removeAttribute('disabled');
                    this.dateToInput.removeAttribute('disabled');
                } else {
                    this.dateFromInput.setAttribute('disabled', 'disabled');
                    this.dateToInput.setAttribute('disabled', 'disabled');
                }
            };
        }
    }

    async getOperations() {
        let period = `?period=`;
        period += `${this.currentDateOption}`;
        switch (this.currentDateOption) {
            case config.date.today:
                period += `&dateFrom=${DateUtils.parseDate(this.today)}&dateTo=${DateUtils.parseDate(this.today)}`;
                break;
            case config.date.interval:
                if (this.dateFromInput.value.match(/[12][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/) &&
                    this.dateToInput.value.match(/[12][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/)) {
                    period += `&dateFrom=${this.dateFromInput.value}&dateTo=${this.dateToInput.value}`;
                } else {
                    return;
                }
        }
        let result = await HttpUtils.request('/operations' + period, 'GET');
        if (result) {
            this.processCharts(result);
        }
    }

    processCharts(result) {
        this.setChartsData(result);
        this.createChart(this.incomesChart, this.incomesChartData);
        this.createChart(this.expensesChart, this.expensesChartData);
    }

    setChartsData(result) {
        setIncomeChartData.call(this, result);
        setExpenseChartData.call(this, result);

        function setIncomeChartData(result) {
            const incomeOperations = result.filter(operation => operation.type === 'income');
            const categories = incomeOperations.map(operation => operation.category);
            let amounts = incomeOperations.map(operation => operation.amount);
            let colors = [];
            incomeOperations.forEach((color, index) => {
                colors.push(`rgb(${(12 * (index + 1)) % 256}, ${(100 * (index + 1)) % 256}, ${(200 * (index + 1)) % 256})`);
            });
            this.incomesChartData = {
                labels: categories,
                datasets: [{
                    label: ' Доход',
                    data: amounts,
                    backgroundColor: colors,
                    hoverOffset: 4,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                    },
                }]
            };
        }

        function setExpenseChartData(result) {
            const expenseOperations = result.filter(operation => operation.type === 'expense');
            const categories = expenseOperations.map(operation => operation.category);
            let amounts = expenseOperations.map(operation => operation.amount);
            let colors = [];
            expenseOperations.forEach((color, index) => {
                colors.push(`rgb(${(24 * (index + 1)) % 256}, ${(120 * (index + 1)) % 256}, ${(230 * (index + 1)) % 256})`);
            });
            this.expensesChartData = {
                labels: categories,
                datasets: [{
                    label: ' Расход',
                    data: amounts,
                    backgroundColor: colors,
                    hoverOffset: 4,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                    },
                }]
            };
        }
    }

    charts = [];

    createChart(chartElement, data) {
        let chart = new Chart(chartElement, {
            type: 'pie',
            data: data,
            options: {
                plugins: {
                    legend: {
                        maxWidth: 40
                    }
                }
            }
        });
        this.charts.push(chart);
    }
}