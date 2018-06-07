import actionTypes from '../actions/actionTypes';
import stateTree from '../stateTree';

export default function appReducer(state = stateTree, action) {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            let cart = state.cart.slice();

            cart.push(action.item);

            return { ...state, cart };
        default:
            return state;
    }
}