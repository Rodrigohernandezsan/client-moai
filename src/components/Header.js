import React from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from './contex';




const Header = () => {
  return (
    <Consumer>
      {context => {
        return (
          (context.authenticated)
            ?
            <div className="header">
              <div className="bounds">
                <h1 className="header--logo"> CURATED BY 🗿 Moai </h1>
                <nav>
                  <span>Welcome {context.firstName} {context.lastName}</span>
                  <Link className="signout" to="/signout">Sign Out</Link>
                </nav>
              </div>
            </div>
            :

            <div className="header">
            <div className="bounds">
              
             <h1 className="header--logo"> CURATED BY 🗿 Moai </h1>

                <nav>
                <Link className="signup" to="/signup">Sign Up</Link>
                <Link className="signin" to="/signin">Sign In</Link>
                </nav>
                <input className="Search" type="text" placeholder="Search" aria-label="Search" to="/search"></input>  

              </div>
              
            </div>
            
        )
      }}
    </Consumer>
  );
}

export default Header;