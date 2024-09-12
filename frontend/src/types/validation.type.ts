export type ValidationType = {
    name: string,
    id: string,
    regex: RegExp,
    valid: boolean,
    element: null | HTMLInputElement,
}