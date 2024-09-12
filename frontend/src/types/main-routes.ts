export type MainRoutes = {
    route: string,
    tabTitle: string,
    pageTitle: string | null,
    template: string,
    styles: Array<string>,
    useLayout: string | false,
    scripts: Array<string> | null,
    onload: Function,
    needAuthorization: boolean,
}