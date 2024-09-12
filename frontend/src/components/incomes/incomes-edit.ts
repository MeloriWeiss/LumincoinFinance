import {HttpUtils} from "../../utils/http-utils";
import {UrlUtils} from "../../utils/url-utils.js";

export class IncomesEdit {
    constructor() {
        let url = new URLSearchParams(window.location.href);
        this.categoryId = UrlUtils.getParam('id');
        this.categoryName = UrlUtils.getParam('name');
        this.inputElement = document.getElementById('category-name');
        if (this.categoryName) {
            this.inputElement.value = this.categoryName;
        } else {
            this.inputElement.placeholder = 'Новое название категории...';
        }

        document.getElementById('cancel').onclick = () => {
            window.location.hash = '#/incomes-main';
        };
        document.getElementById('save').onclick = () => {
            this.updateCategory().then();
        }
    }

    async updateCategory() {
        if (!this.inputElement.value) {
            this.inputElement.classList.add('is-invalid');
        } else {
            let result = await HttpUtils.request('/categories/income/' + this.categoryId, 'PUT', {
                title: this.inputElement.value
            });
            if (result) {
                window.location.hash = '#/incomes-main';
            } else {
                alert('Не удалось отредактировать категорию');
            }
        }
    }
}