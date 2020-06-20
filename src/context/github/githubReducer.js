import { 
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

// state takes in two things, state and action
export default (state, action) => {
    
    switch(action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                // spread operator (copy everything in the state)
                ...state,
                loading: true
            }

        default:
            return state;
    }
}