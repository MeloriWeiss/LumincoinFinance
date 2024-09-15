import {HttpUtils} from "../../utils/http-utils";
import {UrlUtils} from "../../utils/url-utils";
import {CategoriesResponseType} from "../../types/http-response.type";

export class ExpensesEdit {
    readonly categoryId: string | null;
    readonly categoryName: string | null;
    readonly categoryInputElement: HTMLInputElement | null
    constructor() {
        this.categoryId = UrlUtils.getParam('id');
        this.categoryName = UrlUtils.getParam('name');
        this.categoryInputElement = <HTMLInputElement | null>document.getElementById('category-name');
        if (this.categoryInputElement) {
            if (this.categoryName) {
                this.categoryInputElement.value = this.categoryName;
            } else {
                this.categoryInputElement.placeholder = 'Новое название категории...';
            }
        }

        const cancelButton: HTMLElement | null = document.getElementById('cancel');
        if (cancelButton) {
            cancelButton.onclick = () => {
                window.location.hash = '#/expenses-main';
            };
        }

        const saveButton: HTMLElement | null = document.getElementById('save');
        if (saveButton) {
            saveButton.onclick = () => {
                this.updateCategory().then();
            }
        }
    }

    private async updateCategory(): Promise<void> {
        if (this.categoryInputElement) {
            if (!this.categoryInputElement.value) {
                this.categoryInputElement.classList.add('is-invalid');
                return;
            } else {
                let result: CategoriesResponseType = await HttpUtils.request('/categories/expense/' + this.categoryId, 'PUT', {
                    title: this.categoryInputElement.value
                });
                if (result) {
                    window.location.hash = '#/expenses-main';
                    return;
                }
            }
        }
        alert('Не удалось отредактировать категорию');
    }
}