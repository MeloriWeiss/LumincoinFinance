export class IncomesCreate {
    constructor() {
        document.getElementById('cancel').onclick = () => {
            window.location.hash = '#/incomes-main';
        };
        document.getElementById('create').onclick = () => {
            // fetch
            window.location.hash = '#/incomes-main';
        }
    }
}