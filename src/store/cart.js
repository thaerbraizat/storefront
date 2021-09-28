/* eslint-disable import/no-anonymous-default-export */



// let carts = [
//     { title: "Lizard1", addedNumber: 0 }, 
//     { title: "Lizard2", addedNumber: 0 },
//      { title: "Lizard3", addedNumber: 0 },
//       { title: "Lizard4", addedNumber: 0 }


// any data type
let initialState = {
    totalVotes: 0,
    cartArr: []
}
// reducer
export default (state = initialState, action) => {
    let { type, payload } = action;
    console.log(" inside cart action=============================================", action);
    switch (type) {
        case 'ADD':
            let products = state.cartArr.map((product) => product.name);
            if (products.includes(payload.name)) {

                console.log("state.cartArr999999999999999999999999999999", (payload));
                return { cartArr: [...state.cartArr, payload], totalVotes: state.totalVotes + 1 };

            }

            console.log("after state.cartArr", state.cartArr);
            return { cartArr: [...state.cartArr, payload], totalVotes: state.totalVotes + 1 };
        // return { totalVotes: state.totalVotes + 1 };
        case 'RESET':
            return initialState;

        case 'DELETE':
            let newProducts = state.cartArr.filter((product) => product !== payload);
            console.log('newProdsssssssssssssucts', payload);

            console.log("after state.cartArr", state.cartArr);
            return { cartArr: newProducts, totalVotes: state.totalVotes - 1 };
        default:
            return state;
    }
}
//actions
export const add = (product) => {
    return {
        type: 'ADD',
        payload: product

    }
}

export const deleteCart = (product) => {
    return {
        type: 'DELETE',
        payload: product
    }
}




// switch (type) {
//     case "ADD":
//       const products = state.cart.map((product) => product.name);
//       if (!products.includes(payload.name)) {
//         let count = state.count + 1;
//         return { cart: [...state.cart, payload], show: true, count: count };
//       }
//       return { cart: state.cart, show: true, count: state.count };

//       export const addProduct = (product) => {
//         return {
//           type: "ADD",
//           payload: product,
//         };
//       };