import { responseTypes } from '../constants/appConstants'

export const apiErrorResponse = (responseCode) => {
    switch (responseCode) {
        case responseTypes.NO_RESULT:
            return 'No Result Found'
        case responseTypes.INVALID_PARAMS:
            return 'Invalid Parameters Provided'
        case responseTypes.TOKEN_NOT_FOUND:
            return 'Invalid Token'
        case responseTypes.TOKEN_EMPTY:
            return 'No More Data Available'
    }
}