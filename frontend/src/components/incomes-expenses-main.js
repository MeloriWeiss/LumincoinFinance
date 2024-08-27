import {HttpUtils} from "../utils/http-utils";

export class IncomesExpensesMain {
    constructor() {
        this.initLib();
        document.getElementById('incomes-expenses-button').classList.add('active');

        this.getOperations();
    }

    initLib() {
        $('.open-popup-link').magnificPopup({type:'inline'});
    }

    async getOperations() {
        let result = await HttpUtils.request('/operations', 'GET');
        if (result) {
            console.log(result);
        }
    }
}