import React from 'react';
import { Link, withRouter } from 'react-router-dom';


function Header(props) {
  // <h4>{pathname}</h4>
  const { pathname } = props.location;
  const pathArray = pathname.split('/').filter(c => c !== '');
  const [unused1, shelf, unused2, bin] = pathArray;

  return (
    <div className="header">
      <Link to="/">
        {
          bin ?
          <div>
            <div className="logo_container bin-container">
              <div className="shelfie_logo"></div>
            </div>
            <div className="bin_text">Bin {bin}</div>
            <div className="shelf_text">Shelf {shelf}</div>
          </div>
          : 
          shelf ?
          <div>
            <div className="logo_container shelf-container">
              <div className="shelfie_logo"></div>
            </div>
            <div className="shelf_text">Shelf {shelf}</div>
          </div>
          : 
          <div className="logo_container shelfie-container">
            <div className="shelfie_logo"></div>
            <h1 className="shelfie_text">SHELFIE</h1>
          </div>
        }
      </Link>
    </div>
  )
}

export default withRouter(Header);
