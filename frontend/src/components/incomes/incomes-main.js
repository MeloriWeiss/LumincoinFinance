import {HttpUtils} from "../../utils/http-utils";

export class IncomesMain {
    constructor() {
        document.getElementById('incomes-collapse').classList.add('collapse-element-active');
        document.getElementById('delete').onclick = () => this.deleteCategory();

        this.init().then();
    }

    async init() {
        await this.getCategories();
        this.initLib();
        const deleteCardElements = document.getElementsByClassName('deleteCardElement');
        const that = this;
        for (let i = 0; i < deleteCardElements.length; i++) {
            deleteCardElements[i].onclick = function() {
                that.currentCategoryId = this.getAttribute('data-id');
            }
        }
    }

    initLib() {
        $('.open-popup-link').magnificPopup({type:'inline'});
    }

    async getCategories() {
        let result = await HttpUtils.request('/categories/income', 'GET');
        if (result) {
            const cardsContainerElement = document.getElementById('cards-container');
            result.forEach(category => {
                const categoryCard = document.createElement('div');
                categoryCard.className = 'category-card p-2';
                categoryCard.innerHTML = `<div class="card p-3 h-100">
            <h3 class="h3 text-primary-emphasis mb-3">${category.title}</h3>
            <div class="d-flex align-items-center d-flex flex-wrap gap-2">
                <a href="/#/incomes-edit?name=${category.title}&id=${category.id}" class="btn btn-primary">Редактировать</a>
                <a href="#confirmation-popup" class="open-popup-link btn btn-danger deleteCardElement" data-id="${category.id}">Удалить</a>
            </div>
        </div>`;
                cardsContainerElement.prepend(categoryCard);
            });
        }
    }

    async deleteCategory() {
        let result = await HttpUtils.request('/categories/income/' + this.currentCategoryId, 'DELETE');
        if (result) {
            document.querySelectorAll('[data-id]').forEach(item => {
                if (item.getAttribute('data-id') === this.currentCategoryId) {
                    item.closest('.category-card').remove();
                }
            });
        } else {
            alert('Произошла ошибка при удалении категории');
        }
    }
}