export class ExpensesEdit {
    constructor() {
        document.getElementById('cancel').onclick = () => {
            window.location.hash = '#/expenses-main';
        };
        document.getElementById('save').onclick = () => {
            // fetch
            window.location.hash = '#/expenses-main';
        }
    }
}