export class ExpensesCreate {
    constructor() {
        document.getElementById('cancel').onclick = () => {
            window.location.hash = '#/expenses-main';
        };
        document.getElementById('create').onclick = () => {
            // fetch
            window.location.hash = '#/expenses-main';
        }
    }
}