import config from "../config/config";
import {DateUtils} from "../utils/date-utils";
import {HttpUtils} from "../utils/http-utils";
import {OperationResponseType} from "../types/http-response.type";
import {ArcElement, Chart, PieController} from "chart.js";
import {ChartDataType} from "../types/chart-data.type";

export class Main {
    readonly incomesChart: HTMLCanvasElement | null;
    readonly expensesChart: HTMLCanvasElement | null;
    readonly dateFromInput: HTMLInputElement | null;
    readonly dateToInput: HTMLInputElement | null;
    readonly dateButtons: string[]
    private currentDateOption: string;
    readonly today: string;
    private charts: any[] = [];
    private incomesChartData: ChartDataType | null = null;
    private expensesChartData: ChartDataType | null = null;

    constructor() {
        this.incomesChart = <HTMLCanvasElement | null>document.getElementById('incomes-chart');
        this.expensesChart = <HTMLCanvasElement | null>document.getElementById('expenses-chart');
        this.dateFromInput = <HTMLInputElement | null>document.getElementById('date-from');
        this.dateToInput = <HTMLInputElement | null>document.getElementById('date-to');

        this.dateButtons = [
            config.date.today,
            config.date.week,
            config.date.month,
            config.date.year,
            config.date.all,
            config.date.interval
        ];
        this.currentDateOption = this.dateButtons[0];
        this.today = (new Date()).toLocaleDateString();

        this.initLib();
        this.initButtons();
        this.init().then();
    }

    private async init(): Promise<void> {
        Chart.register(PieController, ArcElement);
        document.getElementById('main-button')?.classList.add('active');

        if (this.dateFromInput) {
            this.dateFromInput.onchange = () => {
                this.charts.forEach(chart => chart.destroy());
                this.getOperations().then();
            }
        }
        if (this.dateToInput) {
            this.dateToInput.onchange = () => {
                this.charts.forEach(chart => chart.destroy());
                this.getOperations().then();
            }
        }

        this.getOperations().then();
    }

    private initLib(): void {
        ($ as any).datepicker.regional['ru'] = {
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
        ($ as any).datepicker.setDefaults(($ as any).datepicker.regional['ru']);
        ($('.date-input') as any).datepicker();
    }

    private initButtons(): void {
        let dateButtonsElement: HTMLElement | null = document.getElementById('period-buttons');
        if (dateButtonsElement) {
            for (let i: number = 0; i < dateButtonsElement.children.length - 1; i++) {
                dateButtonsElement.children[i].children[0].setAttribute('data-id', i.toString());
                (dateButtonsElement.children[i].children[0] as HTMLElement).onclick = () => {
                    this.charts.forEach((chart: Chart) => chart.destroy());
                    for (let i: number = 0; i < dateButtonsElement!.children.length - 1; i++) {
                        if (dateButtonsElement!.children[i].children[0].classList.contains('btn-secondary')) {
                            dateButtonsElement!.children[i].children[0].classList.remove('btn-secondary');
                            dateButtonsElement!.children[i].children[0].classList.add('btn-outline-secondary');
                        }
                    }
                    dateButtonsElement!.children[i].children[0].classList.add('btn-secondary');
                    dateButtonsElement!.children[i].children[0].classList.remove('btn-outline-secondary');
                    this.currentDateOption = this.dateButtons[Number(dateButtonsElement!.children[i].children[0].getAttribute('data-id'))];
                    this.getOperations().then();
                    if (this.dateFromInput && this.dateToInput) {
                        if ((dateButtonsElement!.children[i].children[0] as HTMLElement).innerText === 'Интервал') {
                            this.dateFromInput.removeAttribute('disabled');
                            this.dateToInput.removeAttribute('disabled');
                        } else {
                            this.dateFromInput.setAttribute('disabled', 'disabled');
                            this.dateToInput.setAttribute('disabled', 'disabled');
                        }
                    }
                };
            }
        }
    }

    private async getOperations(): Promise<void> {
        let period = `?period=`;
        period += `${this.currentDateOption}`;
        switch (this.currentDateOption) {
            case config.date.today:
                period += `&dateFrom=${DateUtils.parseDate(this.today)}&dateTo=${DateUtils.parseDate(this.today)}`;
                break;
            case config.date.interval:
                if (this.dateToInput && this.dateFromInput && this.dateFromInput.value.match(/[12][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/) &&
                    this.dateToInput.value.match(/[12][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/)) {
                    period += `&dateFrom=${this.dateFromInput.value}&dateTo=${this.dateToInput.value}`;
                } else {
                    return;
                }
        }
        let result: OperationResponseType[] = await HttpUtils.request('/operations' + period, 'GET');
        if (result) {
            this.processCharts(result);
        }
    }

    private processCharts(result: OperationResponseType[]): void {
        this.setChartsData(result);

        if (this.incomesChart && this.incomesChartData) {
            this.createChart(this.incomesChart, this.incomesChartData);
        }

        if (this.expensesChart && this.expensesChartData) {
            this.createChart(this.expensesChart, this.expensesChartData);
        }
    }

    private setChartsData(result: OperationResponseType[]): void {
        const that = this;
        setIncomeChartData(result);
        setExpenseChartData(result);
        function setIncomeChartData(result: OperationResponseType[]): void {
            const incomeOperations: OperationResponseType[] = result.filter((operation: OperationResponseType) => operation.type === 'income');
            const categories: string[] = incomeOperations.map((operation: OperationResponseType) => operation.category);
            let amounts: number[] = incomeOperations.map((operation: OperationResponseType) => operation.amount);
            let colors: string[] = [];
            incomeOperations.forEach((operation: OperationResponseType, index: number) => {
                colors.push(`rgb(${(12 * (index + 1)) % 256}, ${(100 * (index + 1)) % 256}, ${(200 * (index + 1)) % 256})`);
            });
            that.incomesChartData = {
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

        function setExpenseChartData(result: OperationResponseType[]): void {
            const expenseOperations: OperationResponseType[] = result.filter((operation: OperationResponseType) => operation.type === 'expense');
            const categories: string[] = expenseOperations.map((operation: OperationResponseType) => operation.category);
            let amounts: number[] = expenseOperations.map((operation: OperationResponseType) => operation.amount);
            let colors: string[] = [];
            expenseOperations.forEach((operation: OperationResponseType, index: number) => {
                colors.push(`rgb(${(24 * (index + 1)) % 256}, ${(120 * (index + 1)) % 256}, ${(230 * (index + 1)) % 256})`);
            });
            that.expensesChartData = {
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

    private createChart(chartElement: HTMLCanvasElement, data: ChartDataType): void {
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