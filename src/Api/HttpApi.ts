import {HTTP_API_URL} from "./Constants/HttpApiUrl.ts";
import {ICourse} from "./Models/ICourse.ts";

class HttpApi {

    constructor(private url: string) {
    }

    getAllCourses() {
        return this.baseGetRequest<ICourse[]>("courses.json")
    }

    private baseGetRequest<T>(endpoint: string): Promise<T> {
        return fetch(`${this.url}/${endpoint}`).then((res) => {
            if (res.ok) {
                return res.json()
            }
            return res.json().then((json) => Promise.reject(json))
        })
    }
}

const httpApi = new HttpApi(HTTP_API_URL)

export {httpApi}
