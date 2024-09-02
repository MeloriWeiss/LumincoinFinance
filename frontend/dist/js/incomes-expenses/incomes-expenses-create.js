import {HttpUtils} from "../../utils/http-utils.js";

export class IncomesExpensesCreate {
    constructor() {
        this.categorySelect = document.getElementById('category-select');
        this.typeSelectElement = document.getElementById('type-select');
        this.amountInput = document.getElementById('amount');
        this.dateInput = document.getElementById('date');

        document.getElementById('create').onclick = () => this.createOperation();
        document.getElementById('type-select').onchange = () => this.processForm();

        this.getData().then();
    }

    async getData() {
        await this.getIncomeCategories();
        await this.getExpenseCategories();
        this.processForm();
    }

    async getIncomeCategories() {
        let result = await HttpUtils.request('/categories/income', 'GET');
        if (result) {
            console.log('1 - ' + result);
            this.incomeCategories = result;
        }
    }

    async getExpenseCategories() {
        let result = await HttpUtils.request('/categories/expense', 'GET');
        if (result) {
            console.log('2 - ' + result);
            this.expenseCategories = result;
        }
    }

    processForm() {
        const that = this;
        if (this.typeSelectElement.value === 'income') {
            fillSelect(this.incomeCategories);
        } else if (this.typeSelectElement.value === 'expense') {
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

    async createOperation() {
        const typeSelect = document.getElementById('type-select');
        const categorySelect = document.getElementById('category-select');
        const commentInput = document.getElementById('comment');

        if (!this.amountInput.value) {
            this.amountInput.classList.add('is-invalid');
            return;
        } else {
            this.amountInput.classList.remove('is-invalid');
        }
        if (this.dateInput.value.length !== 10) {
            this.dateInput.classList.add('is-invalid');
            return;
        } else {
            this.dateInput.classList.remove('is-invalid');
        }
        let result = await HttpUtils.request('/operations', 'POST', {
            type: typeSelect.value,
            amount: this.amountInput.value,
            date: date.getDate(),
            comment: commentInput.value,
            category_id: categorySelect.value,
        });
        if (result) {
            console.log(result);
            // id, type, amount, date, comment, category
        }
    }
}