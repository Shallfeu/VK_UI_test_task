import axios from "axios";
import configFile from "../../config.json";

const http = axios.create({ baseURL: configFile.BASE_URL });

http.interceptors.request.use(
    async (config) => {
        // Here we can use middlewares for incoming data
        return config;
    },
    (error) => Promise.reject(error)
);

http.interceptors.response.use(
    (res) => {
        // Here we can manipulate response data
        return res;
    },
    (error) => {
        // Here we can handle light errors
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedErrors) {
            window.alert('Oops, something went wrong. Try it later!')
        }

        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch,
};

export default httpService;