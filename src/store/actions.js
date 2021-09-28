import superagent from 'superagent';

const api = 'https://api-server-0.herokuapp.com/todo';

export const getRemoteData = () => (dispatch, state) => {
    // 1- get the remote data with superagent
    // 2- then dispatch an action with the response after we get it.
    console.log("inside getRemoteData");
    console.log(dispatch);
    console.log(state)
   return superagent.get(api).then(res=> {
        dispatch(getAction(res.body));
    });
}

// export const getRemoteData = () => async dispatch => {
//     // 1- get the remote data with superagent
//     // 2- then dispatch an action with the response after we get it.
//     let res = await superagent.get(api)
//     dispatch(getAction(res.body));
// }


const api2 = 'https://api.opendota.com/api/heroes';

export const getDotaData = () => (dispatch, state) => {
    // 1- get the remote data with superagent
    // 2- then dispatch an action with the response after we get it.
    console.log("inside getDotaData");
    console.log(dispatch);
    console.log(state)
   return superagent.get(api2).then(res=> {
        dispatch(getDota(res.body));
    });
}

// export const getRemoteData = () => async dispatch => {
//     // 1- get the remote data with superagent
//     // 2- then dispatch an action with the response after we get it.
//     let res = await superagent.get(api)
//     dispatch(getAction(res.body));
// }

export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}
export const getDota = payload => {
    return {
        type: 'GETDota',
        payload: payload
    }
}