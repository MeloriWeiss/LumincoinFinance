import {HttpUtils} from "../../utils/http-utils.js";

export class IncomesCreate {
    constructor() {
        document.getElementById('cancel').onclick = () => {
            window.location.hash = '#/incomes-main';
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
            let result = await HttpUtils.request('/categories/income', 'POST', {
                title: inputElement.value
            });
            if (result) {
                window.location.hash = '#/incomes-main';
            } else {
                alert('Не удалось создать категорию');
            }
        }
    }
}