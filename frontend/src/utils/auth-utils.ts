import {HttpUtils} from "./http-utils";
import {UserInfoType} from "../types/user-info.type";
import {GetAuthTokensType} from "../types/get-auth-tokens.type";

export class AuthUtils {
    public static accessToken: string = 'accessToken';
    public static refreshToken: string = 'refreshToken';
    private static userInfo: string = 'user';

    public static setAuthInfo(accessToken: string, refreshToken: string | null = null): void {
        localStorage.setItem(this.accessToken, accessToken);
        if (refreshToken) {
            localStorage.setItem(this.refreshToken, refreshToken);
        }
    }

    public static setUserInfo(info: UserInfoType): void {
        localStorage.setItem(this.userInfo, JSON.stringify(info));
    }

    public static getAuthTokensInfo(): GetAuthTokensType {
        return {
            [this.accessToken]: localStorage.getItem(this.accessToken),
            [this.refreshToken]: localStorage.getItem(this.refreshToken),
        };
    }

    public static getAuthUserInfo(): any {
        const authInfo: string | null = localStorage.getItem(this.userInfo);
        if (authInfo) {
            return JSON.parse(authInfo);
        }
        return null;
    }

    public static resetAuthInfo(): void {
        localStorage.clear();
    }

    public static userIsAuthorized(): boolean {
        return Boolean(AuthUtils.getAuthTokensInfo().accessToken);
    }

    public static async processUnauthorizedRequest(): Promise<boolean> {
        const refreshToken: string | null = AuthUtils.getAuthTokensInfo().refreshToken;
        if (refreshToken) {
            let result = await HttpUtils.request('/refresh', 'POST', {
                refreshToken: refreshToken,
            });
            if (result) {
                AuthUtils.setAuthInfo(result.tokens.accessToken, result.tokens.refreshToken);
                return true;
            }
        }
        return false;
    }
}