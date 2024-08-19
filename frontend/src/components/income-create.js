export class IncomeCreate {
    constructor() {
        document.getElementById('cancel').onclick = () => {
            window.location.hash = '#/income-main';
        };
        document.getElementById('create').onclick = () => {
            // fetch
            window.location.hash = '#/income-main';
        }
    }
}