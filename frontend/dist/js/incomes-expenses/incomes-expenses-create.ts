import {HttpUtils} from "../../utils/http-utils";
import {UrlUtils} from "../../utils/url-utils";
import {DateUtils} from "../../utils/date-utils";
import {CategoriesResponseType} from "../../types/http-response.type";

export class IncomesExpensesCreate {
    readonly categorySelect: HTMLSelectElement | null;
    readonly typeSelectElement: HTMLSelectElement | null;
    readonly amountInput: HTMLInputElement | null;
    readonly dateInput: HTMLInputElement | null;
    private incomeCategories: CategoriesResponseType[] | null = null;
    private expenseCategories: CategoriesResponseType[] | null = null;
    constructor() {
        this.categorySelect = <HTMLSelectElement | null>document.getElementById('category-select');
        this.typeSelectElement = <HTMLSelectElement | null>document.getElementById('type-select');
        this.amountInput = <HTMLInputElement | null>document.getElementById('amount');
        this.dateInput = <HTMLInputElement | null>document.getElementById('date');

        this.initLib();
        this.setEvents();
        this.getData().then();
    }

    private initLib(): void {
        // $.datepicker.regional['ru'] = {
        //     closeText: 'Закрыть',
        //     prevText: 'Предыдущий',
        //     nextText: 'Следующий',
        //     currentText: 'Сегодня',
        //     monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        //     monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        //     dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        //     dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        //     dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        //     weekHeader: 'Не',
        //     dateFormat: 'yy-mm-dd',
        //     firstDay: 1,
        //     isRTL: false,
        //     showMonthAfterYear: false,
        //     yearSuffix: ''
        // };
        // $.datepicker.setDefaults($.datepicker.regional['ru']);
        // $('#date').datepicker();

        const select2: any = $('.select2')
        select2.select2();
        select2.select2({
            theme: 'bootstrap4'
        })
    }

    private setEvents(): void {
        const createButton: HTMLElement | null = document.getElementById('create');
        if (createButton) {
            createButton.onclick = () => this.createOperation();
        }
        if (this.typeSelectElement) {
            this.typeSelectElement.onchange = () => this.processSelects();
        }
    }

    private async getData(): Promise<void> {
        await this.getIncomeCategories();
        await this.getExpenseCategories();
        const type: string | null = UrlUtils.getParam('type');
        if (type && this.typeSelectElement) {
            for (let i: number = 0; i < this.typeSelectElement.options.length; i++) {
                if (this.typeSelectElement.options[i].value === type) {
                    this.typeSelectElement.options[i].setAttribute('selected', 'selected');
                }
            }
        }
        this.processSelects();
    }

    private async getIncomeCategories(): Promise<void> {
        let result: CategoriesResponseType[] = await HttpUtils.request('/categories/income', 'GET');
        if (result) {
            this.incomeCategories = result;
        }
    }

    private async getExpenseCategories(): Promise<void> {
        let result: CategoriesResponseType[] = await HttpUtils.request('/categories/expense', 'GET');
        if (result) {
            this.expenseCategories = result;
        }
    }

    private processSelects(): void {
        const that = this;
        if (this.typeSelectElement && this.incomeCategories && this.expenseCategories && this.categorySelect) {
            if (this.typeSelectElement.value === 'income') {
                fillSelect(this.incomeCategories);
            } else if (this.typeSelectElement.value === 'expense') {
                fillSelect(this.expenseCategories);
            }
        }
        function fillSelect(array: CategoriesResponseType[]): void {
            that.categorySelect!.innerHTML = '';
            array.forEach((category: CategoriesResponseType) => {
                let option: HTMLElement = document.createElement('option');
                option.innerText = category.title;
                option.setAttribute('value', category.id.toString());
                that.categorySelect!.appendChild(option);
            });
        }
    }

    private async createOperation(): Promise<void> {
        const commentInput: HTMLInputElement | null = <HTMLInputElement | null>document.getElementById('comment');

        let hasError: boolean = false;
        if (this.amountInput && this.dateInput && this.categorySelect && this.typeSelectElement && commentInput) {
            if (!this.amountInput.value) {
                this.amountInput.classList.add('is-invalid');
                hasError = true;
            } else {
                this.amountInput.classList.remove('is-invalid');
            }
            if (!this.dateInput.value) {
                this.dateInput.classList.add('is-invalid');
                hasError = true;
            } else {
                this.dateInput.classList.remove('is-invalid');
            }
            if (!this.categorySelect.value) {
                this.categorySelect.classList.add('is-invalid');
                hasError = true;
            } else {
                this.categorySelect.classList.remove('is-invalid');
            }
            if (!hasError) {
                let result = await HttpUtils.request('/operations', 'POST', {
                    type: this.typeSelectElement.value,
                    amount: +this.amountInput.value,
                    date: this.dateInput.value,
                    comment: commentInput.value ? commentInput.value : ' ',
                    category_id: +this.categorySelect.value,
                });
                if (result) {
                    window.location.hash = '#/incomes-expenses-main';
                    return;
                }
            }
        }
        alert(`Не удалось создать ${ this.typeSelectElement ? (this.typeSelectElement.value === 'income' ? 'доход' : 'расход') : 'доход/расход' }`);
    }
}