import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import User from './components/users/User';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <div className='App'>
          <Navigation />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/user/:login' element={<User />} />
            <Route element={<NotFound />} />
          </Routes>
        </div>
      </AlertState>
    </GithubState >
  );
};

export default App;