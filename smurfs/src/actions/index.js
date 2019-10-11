import axios from 'axios';

export const FETCHING = "FETCHING"
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_FAILED = "FETCHING_FAILED"

export const ADD_SMURF = "ADD_SMURF"
export const ADD_SMURF_SUCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAILED = "ADD_SMURF_FAILED"
export const getSmurfs = () => dispatch => {
    dispatch({type: FETCHING})
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({type: FETCHING_SUCCESS, payload: res.data})
        console.log(res)
    })
    .catch(err => {
        dispatch({type: FETCHING_FAILED, payload: err.res})
    })
}

export const addSmurf = newSmurf => dispatch => {
    dispatch({ type: ADD_SMURF })
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
        console.log(res)
    })
    .catch(err => {
        dispatch({ type: ADD_SMURF_FAILED, payload: err })
    })
}