export class IncomesExpensesMain {
    constructor() {
        this.initLib();

        document.getElementById('incomes-expenses-button').classList.add('active');
    }

    initLib() {
        $('.open-popup-link').magnificPopup({type:'inline'});
    }
}