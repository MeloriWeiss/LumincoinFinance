import {HttpUtils} from "../../utils/http-utils";
import {UrlUtils} from "../../utils/url-utils";

export class IncomesExpensesEdit {
    constructor() {
        this.findElements();
        this.initLib();
        this.setEvents();
        this.init().then();
    }

    findElements() {
        this.categorySelect = document.getElementById('category-select');
        this.typeSelect = document.getElementById('type-select');
        this.amountInput = document.getElementById('amount');
        this.dateInput = document.getElementById('date');
        this.commentInput = document.getElementById('comment');
    }

    initLib() {
        const select2 = $('.select2');
        select2.select2();
        select2.select2({
            theme: 'bootstrap4'
        })
    }

    setEvents() {
        document.getElementById('update').onclick = () => this.updateOperation();
        document.getElementById('type-select').onchange = () => this.processSelects();
    }

    async init() {
        await this.getData();
        const operationId = UrlUtils.getParam('id');
        if (operationId) {
            let result = await HttpUtils.request('/operations/' + operationId, 'GET');
            if (result) {
                this.typeSelect.value = result.type === 'income' ? 'income' : 'expense';
                this.processSelects();
                for (let i = 0; i < this.typeSelect.options.length; i++) {
                    if (this.typeSelect.options[i].value === result.type) {
                        this.typeSelect.options[i].setAttribute('selected', 'selected');
                    }
                }
                this.amountInput.value = result.amount;
                this.dateInput.value = result.date;
                this.commentInput.value = result.comment;
                for (let option of this.categorySelect.options) {
                    if (option.innerText === result.category) {
                        this.categorySelect.value = option.getAttribute('value');
                    }
                }
            }
        }
    }

    async getData() {
        await this.getIncomeCategories();
        await this.getExpenseCategories();
    }

    async getIncomeCategories() {
        let result = await HttpUtils.request('/categories/income', 'GET');
        if (result) {
            this.incomeCategories = result;
        }
    }

    async getExpenseCategories() {
        let result = await HttpUtils.request('/categories/expense', 'GET');
        if (result) {
            this.expenseCategories = result;
        }
    }

    processSelects() {
        const that = this;
        if (this.typeSelect.value === 'income') {
            fillSelect(this.incomeCategories);
        } else if (this.typeSelect.value === 'expense') {
            fillSelect(this.expenseCategories);
        }

        function fillSelect(array) {
            that.categorySelect.innerHTML = '';
            array.forEach(category => {
                let option = document.createElement('option');
                option.innerText = category.title;
                option.setAttribute('value', category.id);
                that.categorySelect.appendChild(option);
            });
        }
    }

    async updateOperation() {
        const operationId = UrlUtils.getParam('id');
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
}