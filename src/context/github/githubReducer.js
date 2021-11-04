import {
    GET_USER,
    SEARCH_USERS,
    GET_REPOS,
    SET_LOADING,
    CLEAR_USERS,
    SET_SEARCH,
    SET_FOUND
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                search: '',
                found: null
            };
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload
            };
        case SET_FOUND:
            return {
                ...state,
                found: action.payload
            };
        default:
            return state;
    }
}

export default reducer;