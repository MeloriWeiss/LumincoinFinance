export class DateUtils {
    public static parseDate(date: string): string {
        const [day, month, year] = date.split('.');
        return `${year}-${month}-${day}`;
    }
}