import {HttpUtils} from "../../utils/http-utils.js";
import {UrlUtils} from "../../utils/url-utils.js";
import {DateUtils} from "../../utils/date-utils";

export class IncomesExpensesCreate {
    constructor() {
        this.findElements();
        this.initLib();
        this.setEvents();
        this.getData().then();
    }

    findElements() {
        this.categorySelect = document.getElementById('category-select');
        this.typeSelectElement = document.getElementById('type-select');
        this.amountInput = document.getElementById('amount');
        this.dateInput = document.getElementById('date');
    }

    initLib() {
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

        const select2 = $('.select2')
        select2.select2();
        select2.select2({
            theme: 'bootstrap4'
        })
    }

    setEvents() {
        document.getElementById('create').onclick = () => this.createOperation();
        document.getElementById('type-select').onchange = () => this.processSelects();
    }

    async getData() {
        await this.getIncomeCategories();
        await this.getExpenseCategories();
        const type = UrlUtils.getParam('type');
        if (type) {
            for (let i = 0; i < this.typeSelectElement.options.length; i++) {
                if (this.typeSelectElement.options[i].value === type) {
                    this.typeSelectElement.options[i].setAttribute('selected', 'selected');
                }
            }
        }
        this.processSelects();
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

        let hasError = false;
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
                type: typeSelect.value,
                amount: +this.amountInput.value,
                date: this.dateInput.value,
                comment: commentInput.value ? commentInput.value : ' ',
                category_id: +categorySelect.value,
            });
            if (result) {
                window.location.hash = '#/incomes-expenses-main';
            }
        }
    }
}