import {HttpUtils} from "../../utils/http-utils";
import {CategoriesResponseType} from "../../types/http-response.type";

export class ExpensesMain {
    private currentCategoryId: number | null = null;
    constructor() {
        document.getElementById('expenses-collapse')?.classList.add('collapse-element-active');
        const deleteButton = document.getElementById('delete');
        if (deleteButton) {
            deleteButton.onclick = () => this.deleteCategory();
        }
        this.init().then();
    }

    private async init(): Promise<void> {
        await this.getCategories();
        this.initLib();
        const deleteCardElements: HTMLCollection | null = document.getElementsByClassName('deleteCardElement');
        const that = this;
        for (let i: number = 0; i < deleteCardElements.length; i++) {
            (deleteCardElements[i] as HTMLElement).onclick = function() {
                that.currentCategoryId = Number((this as HTMLElement).getAttribute('data-id'));
            }
        }
    }

    private initLib(): void {
        ($('.open-popup-link') as any).magnificPopup({type:'inline'});
    }

    private async getCategories(): Promise<void> {
        let result: CategoriesResponseType[] = await HttpUtils.request('/categories/expense', 'GET');
        if (result) {
            const cardsContainerElement: HTMLElement | null = document.getElementById('cards-container');
            if (cardsContainerElement) {
                result.forEach((category: CategoriesResponseType) => {
                    const categoryCard: HTMLElement = document.createElement('div');
                    categoryCard.className = 'category-card p-2';
                    categoryCard.innerHTML = `<div class="card p-3 h-100">
            <h3 class="h3 text-primary-emphasis mb-3">${category.title}</h3>
            <div class="d-flex align-items-center d-flex flex-wrap gap-2">
                <a href="/#/expenses-edit?name=${category.title}&id=${category.id}" class="btn btn-primary">Редактировать</a>
                <a href="#confirmation-popup" class="open-popup-link btn btn-danger deleteCardElement" data-id="${category.id}">Удалить</a>
            </div>
        </div>`;
                    cardsContainerElement.prepend(categoryCard);
                });
            }
        }
    }

    private async deleteCategory(): Promise<void> {
        if (this.currentCategoryId) {
            let result = await HttpUtils.request('/categories/expense/' + this.currentCategoryId, 'DELETE');
            if (result) {
                document.querySelectorAll('[data-id]').forEach(item => {
                    if (item.getAttribute('data-id') === this.currentCategoryId?.toString() && this.currentCategoryId !== null) {
                        item.closest('.category-card')?.remove();
                        return;
                    }
                });
            }
        }
        alert('Произошла ошибка при удалении категории');
    }
}