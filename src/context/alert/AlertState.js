import React, { useReducer } from "react";
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // SET ALERT
    const setAlert = () => dispatch({ type: SET_ALERT });

    // REMOVE ALERT
    const removeAlert = () => dispatch({ type: REMOVE_ALERT });


    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert,
                removeAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;