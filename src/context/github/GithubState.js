import React, { useReducer } from "react";
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SET_LOADING,
    GET_USER,
    GET_REPOS,
    SEARCH_USERS,
    CLEAR_USERS,
    SET_SEARCH,
    SET_FOUND
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        search: '',
        found: null
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // SEARCH USERS
    const searchUsers = async (users) => {
        setLoading();

        const response = await fetch(`https://api.github.com/search/users?q=${users}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);

        const jsonRes = await response.json();

        dispatch({ type: SEARCH_USERS, payload: jsonRes.items });
        return jsonRes.items;
    }

    // GET USER
    const getUser = async (user) => {
        setLoading();

        const response = await fetch(`https://api.github.com/users/${user}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);

        const jsonRes = await response.json();

        dispatch({ type: GET_USER, payload: jsonRes });
    }

    // CLEAR USERS
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    // GET REPOS
    const getRepos = async (user) => {
        const response = await fetch(`https://api.github.com/users/${user}/repos?per_page=5&client_id=${githubClientId}&client_secret=${githubClientSecret}`);

        const jsonRes = await response.json();

        dispatch({ type: GET_REPOS, payload: jsonRes });
    }

    // SET LOADING
    const setLoading = () => dispatch({ type: SET_LOADING });

    // SET SEARCH
    const setSearch = (text) => dispatch({ type: SET_SEARCH, payload: text });

    // SET FOUND
    const setFound = (par) => dispatch({ type: SET_FOUND, payload: par });

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                search: state.search,
                found: state.found,
                searchUsers,
                clearUsers,
                setSearch,
                setFound,
                getUser,
                getRepos
            }}
        >
            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubState;