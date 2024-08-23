export class IncomesMain {
    constructor() {
        this.initLib();

        document.getElementById('incomes-collapse').classList.add('collapse-element-active');
    }

    initLib() {
        $('.open-popup-link').magnificPopup({type:'inline'});
    }
}