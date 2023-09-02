import axios from "axios";

export function getVideogamesByName(payload) {
    return function(dispatch) {
        axios.get(`/videogames?name=${payload}`)
            .then(response => {
                return dispatch({
                    type: 'GET_NAME_VIDEOGAMES',
                    payload: response.data
                })
            })
    }
}