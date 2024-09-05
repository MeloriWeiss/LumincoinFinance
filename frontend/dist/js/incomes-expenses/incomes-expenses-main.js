import {HttpUtils} from "../../utils/http-utils.js";
import config from "../../config/config.js";
import {DateUtils} from "../../utils/date-utils.js";

export class IncomesExpensesMain {
    constructor() {
        this.initLib();
        this.initButtons();
        document.getElementById('incomes-expenses-button').classList.add('active');
        this.tableContainer = document.getElementById('table-content');
        this.dateButtons = [
            config.date.today,
            config.date.week,
            config.date.month,
            config.date.year,
            config.date.all,
            config.date.interval];
        this.currentDateOption = this.dateButtons[0];
        this.today = (new Date()).toLocaleDateString();
        this.dateFromInput = document.getElementById('date-from');
        this.dateFromInput.onchange = () => {
            this.getOperations().then();
        }
        this.dateToInput = document.getElementById('date-to');
        this.dateToInput.onchange = () => {
            this.getOperations().then();
        }

        this.getOperations().then();
    }

    initLib() {
        $('.open-popup-link').magnificPopup({type: 'inline'});

        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: 'Предыдущий',
            nextText: 'Следующий',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Не',
            dateFormat: 'yy-mm-dd',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);
        $('.date-input').datepicker();
    }

    initButtons() {
        let dateButtonsElement = document.getElementById('period-buttons');
        for (let i = 0; i < dateButtonsElement.children.length - 1; i++) {
            dateButtonsElement.children[i].children[0].setAttribute('data-id', i);
            dateButtonsElement.children[i].children[0].onclick = () => {
                for (let i = 0; i < dateButtonsElement.children.length - 1; i++) {
                    if (dateButtonsElement.children[i].children[0].classList.contains('btn-secondary')) {
                        dateButtonsElement.children[i].children[0].classList.remove('btn-secondary');
                        dateButtonsElement.children[i].children[0].classList.add('btn-outline-secondary');
                    }
                }
                dateButtonsElement.children[i].children[0].classList.add('btn-secondary');
                dateButtonsElement.children[i].children[0].classList.remove('btn-outline-secondary');
                this.currentDateOption = this.dateButtons[dateButtonsElement.children[i].children[0].getAttribute('data-id')];
                this.getOperations().then();
                if (dateButtonsElement.children[i].children[0].innerText === 'Интервал') {
                    this.dateFromInput.removeAttribute('disabled');
                    this.dateToInput.removeAttribute('disabled');
                } else {
                    this.dateFromInput.setAttribute('disabled', 'disabled');
                    this.dateToInput.setAttribute('disabled', 'disabled');
                }
            };
        }
    }

    async getOperations() {
        let period = `?period=`;
        period += `${this.currentDateOption}`;
        let day, month, year, dateFrom;
        switch (this.currentDateOption) {
            case config.date.all:
                break;
            case config.date.today:
                period += `&dateFrom=${DateUtils.parseDate(this.today)}&dateTo=${DateUtils.parseDate(this.today)}`;
                break;
            case config.date.week:
                [day, month, year] = this.today.split('.');
                dateFrom = (new Date(year, month, day - 7)).toLocaleDateString();
                period += `&dateFrom=${DateUtils.parseDate(dateFrom)}&dateTo=${DateUtils.parseDate(this.today)}`;
                break;
            case config.date.month:
                [day, month, year] = this.today.split('.');
                dateFrom = (new Date(year, month - 1, day)).toLocaleDateString();
                period += `&dateFrom=${DateUtils.parseDate(dateFrom)}&dateTo=${DateUtils.parseDate(this.today)}`;
                break;
            case config.date.year:
                [day, month, year] = this.today.split('.');
                dateFrom = (new Date(year - 1, month, day)).toLocaleDateString();
                period += `&dateFrom=${DateUtils.parseDate(dateFrom)}&dateTo=${DateUtils.parseDate(this.today)}`;
                break;
            case config.date.interval:
                if (this.dateFromInput.value && this.dateToInput.value) {
                    period += `&dateFrom=${this.dateFromInput.value}&dateTo=${this.dateToInput.value}`;
                } else {
                    return;
                }
        }
        let result = await HttpUtils.request('/operations' + period, 'GET');
        if (result) {
            this.buildTable(result);
            console.log(result);
        }
    }

    buildTable(operations) {
        this.tableContainer.innerHTML = '';
        operations.forEach((operation, index) => {
            const [day, month, year] = operation.date.split('-');
            const date = `${year}.${month}.${day}`;
            this.tableContainer.innerHTML += `<tr>
                <td class="">${index + 1}</td>
                <td class="text-success">${operation.type}</td>
                <td class="">${operation.category}</td>
                <td class="">${operation.amount} $</td>
                <td class="">${date}</td>
                <td class="">${operation.comment}</td>
                <td class="text-end">
                    <div>
                        <a href="#confirmation-popup" class="open-popup-link text-primary-emphasis text-decoration-none">
                            <i class="fa-regular fa-trash-can"></i>
                        </a>
                        <a href="/#/incomes-expenses-edit?name=${operation.category}&id=${operation.id}" class="text-primary-emphasis text-decoration-none">
                            <i class="fa-solid fa-pencil"></i>
                        </a>
                    </div>
                </td>
            </tr>`;
        });
        $('.open-popup-link').magnificPopup({type: 'inline'});
    }
}