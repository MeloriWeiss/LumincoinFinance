import {HttpUtils} from "../utils/http-utils";

export class IncomesMain {
    constructor() {
        this.initLib();
        document.getElementById('incomes-collapse').classList.add('collapse-element-active');

        this.getCategories().then();
    }

    initLib() {
        $('.open-popup-link').magnificPopup({type:'inline'});
    }

    async getCategories() {
        let result = await HttpUtils.request('/categories/income', 'GET');
        if (result) {
            console.log(result);
        }
    }
}