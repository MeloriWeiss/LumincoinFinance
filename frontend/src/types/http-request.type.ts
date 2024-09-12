export type HttpRequestType = {
    method: string,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-auth-token'?: string
    },
    body?: string
}