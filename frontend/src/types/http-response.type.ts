export type LoginResponseType = {
    tokens: {
        accessToken: string,
        refreshToken: string,
    },
    user: {
        name: string,
        lastName: string,
        id: number,
    }
}
export type AuthErrorResponseType = {
    error: true,
    message: string,
    validation: Array<{ key: string, message: string }>
}
export type RegistrationResponseType = {
    user: { id: number, email: string, name: string, lastName: string },
}

export type BalanceType = {
    balance: number
}