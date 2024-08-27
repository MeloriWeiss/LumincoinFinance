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
        const token = AuthUtils.getAuthTokensInfo().accessToken;
        if (token) {
            params.headers['x-auth-token'] = token;
        }
        try {
            let response = await fetch(config.api + url, params);
            if (response.status >= 200 && response.status < 300) {
                const result = await response.json();
                if (result) {
                    return result;
                }
            } else if (response.status === 401) {
                let result = AuthUtils.processUnauthorizedRequest();
                if (result) {
                    return await this.request(url, method, data);
                } else {
                    return null;
                }
            }
        } catch (e) {
            return false;
        }
    }
}