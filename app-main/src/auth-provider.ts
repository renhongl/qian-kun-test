import { AuthParam } from "./models/auth";





export const login = (param: AuthParam) => {
    return fetch(`http://localhost:5000/auths?username=${param.userName}&password=${param.password}`).then(async res => {
        if (res.ok) {
            const data = await res.json();
            if (data.length > 0) {
                localStorage.setItem('qiankun', JSON.stringify(data[0]));
                return data[0];
            }
            return Promise.reject(new Error('failed'))
        }
        return Promise.reject(new Error('failed'))
    })
}




















