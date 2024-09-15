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

export type OperationDeleteResponseType = {
    error: boolean,
    message: string
}

export type BalanceType = {
    balance: number
}

export type CategoriesResponseType = {
    id: number,
    title: string
}

export type OperationResponseType = {
    id: number,
    type: string,
    amount: number,
    date: string,
    comment: string,
    category: string
}