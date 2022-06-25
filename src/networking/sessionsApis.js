import request, { requestTypes } from "./baseInstance";

export const getToken = () => {
    return request({
        type: requestTypes.GET,
        uri: "api_token.php?command=request"
    })
}