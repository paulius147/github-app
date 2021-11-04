import React, { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import UserItem from './UserItem';
import Spinner from '../search/Spinner';

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { users, loading } = githubContext;

    if (loading) {
        return (
            <Spinner />
        )
    }

    return (
        <div className="users">
            <div className='container gap-1'>
                {users.map(user => <UserItem key={user.id} user={user} />)}
            </div>
        </div>
    )
}

export default Users;