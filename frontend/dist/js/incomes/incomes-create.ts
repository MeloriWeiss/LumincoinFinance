import {HttpUtils} from "../../utils/http-utils";
import {CategoriesResponseType} from "../../types/http-response.type";

export class IncomesCreate {
    constructor() {
        const cancelButton: HTMLElement | null = document.getElementById('cancel');
        if (cancelButton) {
            cancelButton.onclick = () => {
                window.location.hash = '#/incomes-main';
            };
        }
        const createButton: HTMLElement | null = document.getElementById('create');
        if (createButton) {
            createButton.onclick = () => {
                this.createCategory().then();
            }
        }
    }

    private async createCategory(): Promise<void> {
        const categoryInputElement: HTMLInputElement | null = <HTMLInputElement | null>document.getElementById('category-name');
        if (categoryInputElement) {
            if (!categoryInputElement.value) {
                categoryInputElement.classList.add('is-invalid');
                return;
            } else {
                let result: CategoriesResponseType = await HttpUtils.request('/categories/income', 'POST', {
                    title: categoryInputElement.value
                });
                if (result) {
                    window.location.hash = '#/incomes-main';
                    return;
                }
            }
        }
        alert("Не удалось создать категорию");
    }
}