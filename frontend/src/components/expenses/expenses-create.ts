import {HttpUtils} from "../../utils/http-utils.js";

export class ExpensesCreate {
    constructor() {
        document.getElementById('cancel').onclick = () => {
            window.location.hash = '#/expenses-main';
        };
        document.getElementById('create').onclick = () => {
            this.createCategory().then();
        }
    }

    async createCategory() {
        const inputElement = document.getElementById('category-name');
        if (!inputElement.value) {
            inputElement.classList.add('is-invalid');
        } else {
            let result = await HttpUtils.request('/categories/expense', 'POST', {
                title: inputElement.value
            });
            if (result) {
                window.location.hash = '#/expenses-main';
            } else {
                alert('Не удалось создать категорию');
            }
        }
    }
}