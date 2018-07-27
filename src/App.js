import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

// import Auth from "./component/Auth/Auth";
// import Post from "./component/Post/Post";
// import Form from "./component/Form/Form";
// import Dashboard from "./component/Dashboard/Dashboard";
import Nav from "./component/Nav/Nav";
import routes from "./routes";


class App extends Component {
  render() {
    return (
      <div className="App">

         {/* <nav className='nav'>
          <Link to="/" className='links'>Auth</Link>
          <Link to="/dashboard" className='links'>Dashboard</Link> 
          <Link to="/post/:postid" className='links'>Post</Link> 
          <Link to="/new" className='links'>Form</Link>
         </nav> */}

       <Nav />
       { routes }
      </div>
    );
  }
};

export default App;

//  {/* {this.props.location.pathname === "/" ? null : <Nav />} */}
//  {routes}