import {AuthUtils} from "../utils/auth-utils";
import {HttpUtils} from "../utils/http-utils";

export class ExpensesMain {
    constructor() {
        this.initLib();
        document.getElementById('expenses-collapse').classList.add('collapse-element-active');

        this.getCategories().then();
    }

    initLib() {
        $('.open-popup-link').magnificPopup({type:'inline'});
    }

    async getCategories() {
        let result = await HttpUtils.request('/categories/expense', 'GET');
        if (result) {
            console.log(result);
        }
    }
}