export const API_CALL_REQUEST = 'API_CALL_REQUEST';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

export const hhtpRequest = (method, url, data) => {

    return {
        type: API_CALL_REQUEST, 
        payload: {
            request: {
                method: method,
                url: url,
                data: data
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    }
}