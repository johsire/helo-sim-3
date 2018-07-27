import React, { Component } from 'react';
import './App.css';

import Nav from './component/Nav/Nav';
import Auth from './component/Auth/Auth';
import Post from './component/Post/Post';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav />
       <Auth /> 
       <Dashboard />
       <Form />
       <Post />
      </div>
    );
  }
}

export default App;
