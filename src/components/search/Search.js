import React, { useContext } from 'react'
import Alert from './Alert';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const { users, clearUsers, search, setSearch, searchUsers, found, setFound } = githubContext;
    const { alert, setAlert, removeAlert } = alertContext;

    const onSubmit = async (e) => {
        e.preventDefault();

        if (search.length > 0) {
            searchUsers(search);
            removeAlert();
            setFound(null);
            let arr = await searchUsers(search);
            if (arr.length < 1) {
                setFound(false);
            }
        } else {
            setAlert();
            setTimeout(() => {
                removeAlert();
            }, 5000);
        }
    }

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='search'>
            <div className="container gap-1">
                {alert === true && <Alert />}
                <form onSubmit={onSubmit} className="search-form">
                    <input onChange={onChange} type="text" value={search} placeholder="Search User..." />
                    <input type="image" src='https://images.pngnice.com/download/2007/Search-Button-PNG-HD-Photo.png' width="25" height="25" alt='search' />
                </form>
                {users.length > 0 || found === false ? <button className="clear-search" onClick={clearUsers}>Clear</button> : ''}
                {found === false && <h3>No such a user found...</h3>}
            </div>
        </div >

    )
}

export default Search
