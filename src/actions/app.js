import axios from 'axios';

export const getGreeting = () => dispatch => {
    dispatch({type: `GET_GREETING`})
    axios.get(`/api/greeting`)
        .then(res => {
            dispatch({type: `GET_GREETING_SUCCESS`, payload: res.data})
        })
        .catch(err => {
            dispatch({type: `GET_GREETING_ERROR`, error: err})
        })
}