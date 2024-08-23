export class IncomesEdit {
    constructor() {
        document.getElementById('cancel').onclick = () => {
            window.location.hash = '#/incomes-main';
        };
        document.getElementById('save').onclick = () => {
            // fetch
            window.location.hash = '#/incomes-main';
        }
    }
}