// const baseURL = "http://localhost:8000";
// export async function loginUser(creds) {
//     const res = await fetch(`${baseURL}/api/login`, {
//         method: "post",
//         body: JSON.stringify(creds),
//     });
//     const data = await res.json();

//     if (!res.ok) {
//         throw {
//             message: data.message,
//             statusText: res.statusText,
//             status: res.status,
//         };
//     }

//     return data;
// }

import axios from "axios";

const baseURL = "https://api.legolas.tech";
const baseURL2 = "http://localhost:8000";
// Creating an instance of axios
const getAxiosUser = axios.create({
    baseURL: `${baseURL}/api`,
});

// Adding request interceptors
getAxiosUser.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Adding response interceptors
getAxiosUser.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        try {
            if (error.response && error.response.status === 401) {
                // Response status is unauthorized
                localStorage.removeItem("ACCESS_TOKEN");
            }
        } catch (error) {
            console.log(error);
        }
        throw error;
    }
);

export default getAxiosUser;

export async function getExams() {}
