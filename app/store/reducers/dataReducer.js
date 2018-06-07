import actionTypes from '../actions/actionTypes';
import stateTree from '../stateTree';

export default function dataReducer(state = stateTree, action) {

    switch(action.type) {
		case actionTypes.GET_PRODUCTS_SUCCEEDED:
			return { ...state, products: action.data.search_response.items.Item };
        default:
            return state;
    }
}