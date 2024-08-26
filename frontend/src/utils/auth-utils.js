import {HttpUtils} from "./http-utils";

export class AuthUtils {
    static accessToken = 'accessToken';
    static refreshToken = 'refreshToken';
    static userInfo = 'user';

    static setAuthInfo(accessToken, refreshToken = null, userInfo = null) {
        localStorage.setItem(this.accessToken, accessToken);
        if (refreshToken) {
            localStorage.setItem(this.refreshToken, refreshToken);
        }
        if (userInfo) {
            localStorage.setItem(this.userInfo, JSON.stringify(userInfo));
        }
    }

    static setUserInfo(info) {
        localStorage.setItem(this.userInfo, JSON.stringify(info));
    }

    static getAuthTokensInfo() {
        return {
            [this.accessToken]: localStorage.getItem(this.accessToken),
            [this.refreshToken]: localStorage.getItem(this.refreshToken),
        };
    }

    static getAuthUserInfo() {
        return JSON.parse(localStorage.getItem(this.userInfo));
    }

    static resetAuthInfo() {
        localStorage.clear();
    }

    static userIsAuthorized() {
        return Boolean(AuthUtils.getAuthTokensInfo().accessToken);
    }
}