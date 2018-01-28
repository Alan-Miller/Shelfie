import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Header(props) {
  const { path } = props.match;
  console.log("MATCH", props.location.pathname)
  return (
    <div className="header">
      <Link to="/">
        <div className="logo_container">
          <div className="header_logo"></div>
          <h1>SHELFIE</h1>
          <h4>{props.location.pathname}</h4>
        </div>
      </Link>
    </div>
  )
}

export default withRouter(Header);