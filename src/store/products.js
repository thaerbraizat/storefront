const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>{
    const {type, payload} = action;



    
    switch(type) {
        case 'GET':
            console.log("payload ---->" , payload)
            const result = payload.filter(word => word.difficulty >= 4);

            console.log('fffffffffffffffffffffffffffffffff',result);

            return [...state,result];

            case 'GETDota':
                console.log("payload ---->" , payload)
                const dota = payload.filter(word => word.legs >= 4);
    
                console.log('fffffffffffffffffffffffffffffffff',dota);
    
                return [...state,dota];
        default:
            return state;
    }
}




// let data = payload.filter((word => word.difficulty = 4)