import { useAuth } from './../context/auth';

import qs from 'qs';

export interface RequestConfig extends RequestInit {
    token?: string;
    data?: unknown;
}

export const http = async <T>(endpoint: string, config: RequestConfig) => {
    if (!config.method) {
        config.method = 'GET';
    }
    config.headers = {
        'Content-Type': 'application/json',
        'Authrozition': config.token ? `Beara ${config.token}` : ''
    }

    if (config.data) {
        if (config.method.toUpperCase() === 'GET') {
            endpoint += `?${qs.stringify(config.data)}`;
        } else {
            config.body = JSON.stringify(config.data);
        }
    }

    return fetch(`http://localhost:5000/${endpoint}`, config).then(async res => {
        if (res.ok) {
            return await res.json() as T;
        }
        return Promise.reject(`${endpoint}, ${config.method} got error`);
    })
}


export const useHttp = () => {
    const { user } = useAuth();

    return <T>(endpoint: string, config?: RequestConfig) => {
        return http<T>(endpoint, { ...config, token: user.token })
    }
}











