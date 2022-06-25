import request, { requestTypes } from "./baseInstance";

export const getCategories = () => {
    return request({ type: requestTypes.GET, uri: 'api_category.php' })
}
