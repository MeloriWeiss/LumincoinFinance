class ExpensesMain {
    constructor() {
        this.initLib();
    }

    initLib() {
        $('.open-popup-link').magnificPopup({type:'inline'});
    }
}
(new ExpensesMain())