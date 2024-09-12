export class UrlUtils {
    public static getParam(name: string): string | null {
        const url: string = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        let regex: RegExp = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results: RegExpExecArray | null = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
}