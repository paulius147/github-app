import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {

    return (
        <Link to={`/user/${user.login}`} >
            <div className='user-card gap-1'>
                <img className='user-img' src={user.avatar_url} alt="" />
                <div className="name-view">
                    <h4 className='user-name'>{user.login.length > 12 ? user.login.substring(0, 12) + '...' : user.login}</h4>
                    <p className='view-profile'>View Profile</p>
                </div>
            </div>
        </Link>
    )
}

export default UserItem
