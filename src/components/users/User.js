import React, { useContext, useEffect } from 'react';
import GithubContext from '../../context/github/githubContext';
import Spinner from '../search/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import { useParams } from 'react-router';

const User = () => {
    let params = useParams();
    const login = params.login;
    const githubContext = useContext(GithubContext);
    const { getUser, user, loading, getRepos } = githubContext;

    useEffect(() => {
        getUser(login);
        getRepos(login);
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return (
            <Spinner />
        )
    }

    return (
        <div className='user'>
            <div className="container gap-1">
                <Link to='/' className="back-to-search"><i className="fas fa-arrow-left"></i> Back To Search</Link>
                <div className="user-info gap-1">
                    <div className='avatar-div'>
                        <img className='avatar' src={user.avatar_url} alt="avatar" />
                    </div>
                    <div className="name-desc-profile-followers">
                        {user.name !== null && <h2>{user.name}</h2>}
                        {user.bio !== null && <p>{user.bio}</p>}
                        <a href={user.html_url} rel="noreferrer" target='_blank' className="view-github-profile">View GitHub Profile</a>
                        <div className="followers">
                            <div className="followers-card gap-1">
                                <div className="followers-info">
                                    <span>Followers</span>
                                    <h3>{user.followers}</h3>
                                </div>
                                <i className="fas fa-users fa-2x"></i>
                            </div>
                            <div className="followers-card gap-1">
                                <div className="followers-info">
                                    <span>Following</span>
                                    <h3>{user.following}</h3>
                                </div>
                                <i className="fas fa-user-friends fa-2x"></i>
                            </div>
                            <div className="followers-card gap-1">                                <div className="followers-info">
                                <span>Public Repos</span>
                                <h3>{user.public_repos}</h3>
                            </div>
                                <i className="fas fa-book-open fa-2x"></i>
                            </div>
                            <div className="followers-card gap-1">                                <div className="followers-info">
                                <span>Public Gists</span>
                                <h3>{user.public_gists}</h3>
                            </div>
                                <i className="fas fa-code-branch fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <Repos />
            </div>
        </div>
    )
}

export default User;