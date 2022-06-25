import axios from "axios";

export const requestTypes = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    PUT: "PUT",
    DELETE: "DELETE",
};

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});


const request = ({ type, uri, data = {}, config = {} }) => {
    switch (type) {
        case "GET":
            return instance.get(uri, config);
        case "POST":
            return instance.post(uri, data, config);
        case "PATCH":
            return instance.patch(uri, data, config);
        case "PUT":
            return instance.put(uri, data, config);
        case "DELETE":
            return instance.delete(uri, config);
        default:
            return {};
    }
};

export default request;