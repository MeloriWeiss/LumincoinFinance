export class FileUtils {
    static async addNewScript(scriptSrc) {
        return new Promise((resolve, reject) => {
            let scriptElement = document.createElement('script');
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

    static addNewStyle(styleSrc) {
        let styleElement = document.createElement('link');
        styleElement.setAttribute('rel', 'stylesheet');
        styleElement.setAttribute('href', styleSrc);
        document.head.appendChild(styleElement);
    }
}