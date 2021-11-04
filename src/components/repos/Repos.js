import React, { useContext } from 'react'
import GithubContext from '../../context/github/githubContext';
import RepoItem from './RepoItem';

const Repos = () => {
    const githubContext = useContext(GithubContext);
    const { repos } = githubContext;

    if (repos.length < 1) {
        return (
            <div className="no-repos">
                <h2>No Repositories</h2>
            </div>
        )
    }

    return (
        <div className='repos'>
            <h2>Top Repositories</h2>
            <div className="repos-container gap-1">
                {repos.map(repo => <RepoItem repo={repo} />)}
            </div>
        </div>
    )
}

export default Repos
