import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { updateUserData } from '../../ducks/reducer';


function Nav(props) {
  return (
    <div>
      <Link to="/dashboard">
        <button>Home</button>
      </Link>
      <Link to="/post/:postid">
        <button>New Post</button>
      </Link>
      <Link to="/">
         <button>Logout</button>
      </Link>
    </div>
  )
}



function mapStateToProps(state) {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps, {updateUserData})(Nav);
