import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            return true;
        case REMOVE_ALERT:
            return null;
        default:
            return state;
    }
}

export default reducer;