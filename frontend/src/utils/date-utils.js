export class DateUtils {
    static parseDate(date) {
        const [day, month, year] = date.split('.');
        return `${year}-${month}-${day}`;
    }
}