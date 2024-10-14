import axios, { AxiosInstance } from "axios";

const useAxios = (): { api: AxiosInstance } => {
    const api: AxiosInstance = axios.create({
        baseURL: 'http://localhost:8100'
    });

    return { api };
};

export default useAxios;
