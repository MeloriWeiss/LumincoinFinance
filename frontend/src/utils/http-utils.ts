import config from "../config/config";
import {AuthUtils} from "./auth-utils";
import {HttpRequestType} from "../types/http-request.type";

export class HttpUtils {
    public static async request(url: string, method: string = 'GET', data: any = null): Promise<any> {
        let params: HttpRequestType = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        };
        if (data) {
            params.body = JSON.stringify(data);
        }
        const token: string | null = AuthUtils.getAuthTokensInfo().accessToken;
        if (token) {
            params.headers['x-auth-token'] = token;
        }
        let response: Response = await fetch(config.api + url, params);
        if (response.status >= 200 && response.status < 300) {
            const result = await response.json();
            if (result) {
                return result;
            }
        } else if (response.status === 401) {
            let result: boolean | undefined = await AuthUtils.processUnauthorizedRequest();
            if (result) {
                return await this.request(url, method, data);
            } else {
                AuthUtils.resetAuthInfo();
                return null;
            }
        }
    }
}