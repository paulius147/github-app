import React from 'react'

const RepoItem = ({ repo }) => {

    return (
        <div className='repo'>
            <a className='repo-link' target='_blank' rel='noreferrer' href={repo.html_url}>{repo.name}</a>
        </div>
    )
}

export default RepoItem
