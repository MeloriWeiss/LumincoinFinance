import config from "../config/config.js";
import {AuthUtils} from "./auth-utils";

export class HttpUtils {
    static async request(url, method = 'GET', data = null) {
        let params = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        };
        if (data) {
            params.body = JSON.stringify(data);
        }
        try {
            let response = await fetch(config.api + url, params);
            if (response.status >= 200 && response.status < 300) {
                const result = await response.json();
                if (result) {
                    return result;
                }
            } else {
                if (response.status === 401) {
                    const refreshToken = AuthUtils.getAuthTokensInfo().refreshToken;
                    if (refreshToken) {
                        return await this.request('/refresh', 'POST', {
                            refreshToken: refreshToken,
                        })
                    }
                }
            }
        } catch (e) {
            return false;
        }
    }
}