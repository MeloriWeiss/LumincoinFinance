export class FileUtils {
    public static async addNewScript(scriptSrc: string) {
        return new Promise((resolve, reject) => {
            let scriptElement: HTMLScriptElement = document.createElement('script');
            scriptElement.src = scriptSrc;
            scriptElement.onload = () => {
                resolve('Script loaded: ' + scriptSrc)
            };
            scriptElement.onerror = () => {
                reject('Failed load script: ' + scriptSrc)
            };
            document.body.appendChild(scriptElement);
        })
    }

    public static addNewStyle(styleSrc: string): void {
        let styleElement: HTMLLinkElement = document.createElement('link');
        styleElement.setAttribute('rel', 'stylesheet');
        styleElement.setAttribute('href', styleSrc);
        document.head.appendChild(styleElement);
    }
}