import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='nav'>
            <div className="container gap-1">
                <Link className='title-link gap-1' to='/'>
                    <h1>GitHub Finder</h1>
                    <i className="fab fa-github fa-2x"></i>
                </Link>
                <Link className='about' to='/about'>
                    About
                </Link>
            </div>
        </nav>
    )
}

export default Navigation
