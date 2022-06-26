import request, { requestTypes } from "./baseInstance";

export const getQuestionsInCategory = (amount, category, difficulty) => {
    return request({
        type:requestTypes.GET,
        uri: `api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
    })
}