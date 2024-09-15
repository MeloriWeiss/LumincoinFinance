import {HttpUtils} from "../../utils/http-utils";
import {UrlUtils} from "../../utils/url-utils";
import {CategoriesResponseType, OperationResponseType} from "../../types/http-response.type";

export class IncomesExpensesEdit {
    readonly categorySelect: HTMLSelectElement | null;
    readonly typeSelect: HTMLSelectElement | null;
    readonly amountInput: HTMLInputElement | null;
    readonly dateInput: HTMLInputElement | null;
    readonly commentInput: HTMLInputElement | null;
    private incomeCategories: CategoriesResponseType[] | null = null;
    private expenseCategories: CategoriesResponseType[] | null = null;
    constructor() {
        this.categorySelect = <HTMLSelectElement | null>document.getElementById('category-select');
        this.typeSelect = <HTMLSelectElement | null>document.getElementById('type-select');
        this.amountInput = <HTMLInputElement | null>document.getElementById('amount');
        this.dateInput = <HTMLInputElement | null>document.getElementById('date');
        this.commentInput = <HTMLInputElement | null>document.getElementById('comment');

        this.initLib();
        this.setEvents();
        this.init().then();
    }

    private initLib(): void {
        const select2: any = $('.select2');
        select2.select2();
        select2.select2({
            theme: 'bootstrap4'
        })
    }

    private setEvents(): void {
        const updateButton: HTMLElement | null = document.getElementById('update');
        if (updateButton) {
            updateButton.onclick = () => this.updateOperation();
        }
        if (this.typeSelect) {
            this.typeSelect.onchange = () => this.processSelects();
        }
    }

    private async init(): Promise<void> {
        await this.getData();
        const operationId: string | null = UrlUtils.getParam('id');
        if (operationId && this.typeSelect && this.amountInput && this.dateInput && this.commentInput && this.categorySelect) {
            let result: OperationResponseType = await HttpUtils.request('/operations/' + operationId, 'GET');
            if (result) {
                this.typeSelect.value = result.type === 'income' ? 'income' : 'expense';
                this.processSelects();
                for (let i: number = 0; i < this.typeSelect.options.length; i++) {
                    if (this.typeSelect.options[i].value === result.type) {
                        this.typeSelect.options[i].setAttribute('selected', 'selected');
                    }
                }
                this.amountInput.value = result.amount.toString();
                this.dateInput.value = result.date;
                this.commentInput.value = result.comment;
                for (let option of Array.from(this.categorySelect.options)) {
                    if (option.innerText === result.category) {
                        const valueAttribute: string | null = option.getAttribute('value');
                        if (valueAttribute) {
                            this.categorySelect.value = valueAttribute;
                        }
                    }
                }
            }
        }
    }

    private async getData(): Promise<void> {
        await this.getIncomeCategories();
        await this.getExpenseCategories();
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
        if (this.typeSelect && this.categorySelect && this.incomeCategories && this.expenseCategories) {
            if (this.typeSelect.value === 'income') {
                fillSelect(this.incomeCategories);
            } else if (this.typeSelect.value === 'expense') {
                fillSelect(this.expenseCategories);
            }
        }
        function fillSelect(array: CategoriesResponseType[]) {
            that.categorySelect!.innerHTML = '';
            array.forEach((category: CategoriesResponseType) => {
                let option: HTMLElement = document.createElement('option');
                option.innerText = category.title;
                option.setAttribute('value', category.id.toString());
                that.categorySelect!.appendChild(option);
            });
        }
    }

    private async updateOperation(): Promise<void> {
        if (this.typeSelect && this.amountInput && this.dateInput && this.commentInput && this.categorySelect) {
            const operationId: string | null = UrlUtils.getParam('id');
            let result = await HttpUtils.request('/operations/' + operationId, 'PUT', {
                type: this.typeSelect.value,
                amount: +this.amountInput.value,
                date: this.dateInput.value,
                comment: this.commentInput.value ? this.commentInput.value : ' ',
                category_id: +this.categorySelect.value,
            });
            if (result) {
                window.location.hash = '#/incomes-expenses-main';
            }
        }
        alert(`Не удалось отредактировать ${ this.typeSelect ? (this.typeSelect.value === 'income' ? 'доход' : 'расход') : 'доход/расход' }`);
    }
}