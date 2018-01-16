export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_GREETING_SUCCESS':

            return { ...state, greeting: action.payload.translation, language: action.payload.language, country: action.payload.country }


        default:
            return state
    }
}