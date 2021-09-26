// any data type
let initialState = {
    candidates: [
        { name: 'ELECTRONICS', active: false },
        { name: 'FOOD', active: false },
        
    ],
  
}
// reducers

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    let { type, payload } = action;
    console.log('actttttt',action);
    switch (type) {
        case 'active':
            let candidates = state.candidates.map(candidate => {
                if (candidate.name === payload) {
                    return { name: candidate.name, active: !candidate.active  }
                }
                return candidate;
            });
            // shredder ...
            // let candidates = state.candidates.map(candidate=> candidate.name == payload ? {...candidate, votes: candidate.votes+1}: candidate)
            return {  candidates };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}
//actions
export const switchActive = (name) => {
    return {
        type: 'active',
        payload: name
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}