export class ExpensesMain {
    constructor() {
        this.initLib();

        document.getElementById('expenses-collapse').classList.add('collapse-element-active');
    }

    initLib() {
        $('.open-popup-link').magnificPopup({type:'inline'});
    }
}