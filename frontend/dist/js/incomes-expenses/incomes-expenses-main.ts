import {HttpUtils} from "../../utils/http-utils";
import config from "../../config/config";
import {DateUtils} from "../../utils/date-utils";
import {OperationDeleteResponseType, OperationResponseType} from "../../types/http-response.type";

export class IncomesExpensesMain {
    readonly dateFromInput: HTMLInputElement | null;
    readonly dateToInput: HTMLInputElement | null;
    readonly dateButtons: string[]
    private currentDateOption: string;
    readonly today: string;
    readonly tableContainer: HTMLElement | null;
    private rowIdElements: HTMLCollection | null = null;
    private currentOperation: number | null = null;
    constructor() {
        this.initLib();
        this.initButtons();
        document.getElementById('incomes-expenses-button')?.classList.add('active');
        this.tableContainer = document.getElementById('table-content');
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
        this.dateFromInput = <HTMLInputElement | null>document.getElementById('date-from');
        if (this.dateFromInput) {
            this.dateFromInput.onchange = () => {
                this.getOperations().then();
            }
        }
        this.dateToInput = <HTMLInputElement | null>document.getElementById('date-to');
        if (this.dateToInput) {
            this.dateToInput.onchange = () => {
                this.getOperations().then();
            }
        }
        const deleteOperationButton: HTMLElement | null = document.getElementById('delete-operation');
        if (deleteOperationButton) {
            deleteOperationButton.onclick = () => this.deleteOperation();
        }

        this.getOperations().then();
    }

    private initLib(): void {
        ($('.open-popup-link') as any).magnificPopup({type: 'inline'});

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
                    for (let i: number = 0; i < dateButtonsElement!.children.length - 1; i++) {
                        if (dateButtonsElement!.children[i].children[0].classList.contains('btn-secondary')) {
                            dateButtonsElement!.children[i].children[0].classList.remove('btn-secondary');
                            dateButtonsElement!.children[i].children[0].classList.add('btn-outline-secondary');
                        }
                    }
                    dateButtonsElement!.children[i].children[0].classList.add('btn-secondary');
                    dateButtonsElement!.children[i].children[0].classList.remove('btn-outline-secondary');
                    const currentPeriod: number | null = Number(dateButtonsElement!.children[i].children[0].getAttribute('data-id'));
                    if (currentPeriod) {
                        this.currentDateOption = this.dateButtons[currentPeriod];
                    }
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
        let period: string = `?period=`;
        period += `${this.currentDateOption}`;
        switch (this.currentDateOption) {
            case config.date.today:
                period += `&dateFrom=${DateUtils.parseDate(this.today)}&dateTo=${DateUtils.parseDate(this.today)}`;
                break;
            case config.date.interval:
                if (this.dateFromInput && this.dateToInput) {
                    if (this.dateFromInput.value.match(/[12][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/)
                        && this.dateToInput.value.match(/[12][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/)) {
                        period += `&dateFrom=${this.dateFromInput.value}&dateTo=${this.dateToInput.value}`;
                    } else {
                        return;
                    }
                } else {
                    return;
                }
        }
        let result: OperationResponseType[] = await HttpUtils.request('/operations' + period, 'GET');
        if (result) {
            this.buildTable(result);
        }
    }

    private buildTable(operations: OperationResponseType[]): void {
        if (this.tableContainer) {
            this.tableContainer.innerHTML = '';
            operations.forEach((operation: OperationResponseType, index: number) => {
                const [day, month, year] = operation.date.split('-');
                const date: string = `${year}.${month}.${day}`;
                this.tableContainer!.innerHTML += `<tr>
                <td class="">${index + 1}</td>
                <td class="${operation.type === 'income' ? 'text-success' : 'text-danger'}">${operation.type === 'income' ? 'Доход' : 'Расход'}</td>
                <td class="">${operation.category}</td>
                <td class="">${operation.amount} $</td>
                <td class="">${date}</td>
                <td class="">${operation.comment}</td>
                <td class="text-end">
                    <div data-id="${operation.id}" class="row-id">
                        <a href="#confirmation-popup" class="open-popup-link text-primary-emphasis text-decoration-none">
                            <i class="fa-regular fa-trash-can"></i>
                        </a>
                        <a href="/#/incomes-expenses-edit?id=${operation.id}" class="text-primary-emphasis text-decoration-none">
                            <i class="fa-solid fa-pencil"></i>
                        </a>
                    </div>
                </td>
            </tr>`;
            });
        }
        ($('.open-popup-link') as any).magnificPopup({type: 'inline'});
        if (this.tableContainer) {
            this.rowIdElements = this.tableContainer.getElementsByClassName('row-id');
            if (this.rowIdElements) {
                for (let operation of Array.from(this.rowIdElements)) {
                    (operation as HTMLElement).onclick = () => {
                        this.currentOperation = Number(operation.getAttribute('data-id'));
                    }
                }
            }
        }
    }

    private async deleteOperation(): Promise<void> {
        let result: OperationDeleteResponseType = await HttpUtils.request('/operations/' + this.currentOperation, 'DELETE');
        if (result && this.rowIdElements) {
            for (let i: number = 0; i < this.rowIdElements.length; i++) {
                if (this.currentOperation && this.rowIdElements[i].getAttribute('data-id') === this.currentOperation.toString()) {
                    this.rowIdElements[i].closest('tr')!.remove();
                    return;
                }
            }
        } else {
            alert('Не удалось удалить операцию');
        }
    }
}