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
            
                <h1 className="header--logo"> 🗿 Moai </h1>
                {/* <div className="Search">
                <input type="Search" type="text" placeholder="Search.." to="/search"></input>  
                </div> */}
                <nav>
                  <span>Welcome {context.firstName} {context.lastName}</span>
                  <Link className="signout" to="/signout">Sign Out</Link>
                </nav>
              </div>
            </div>
            :

            <div className="header">
            <div className="bounds">
            <h1 className="header--logo"> 🗿 Moai </h1>

             <nav>
                <Link className="signup" to="/signup">Sign Up</Link>
                <Link className="signin" to="/signin">Sign In</Link>
              </nav>

              {/* <div className="Search">
              <input type="Search" type="text" placeholder="Search.."  to="/search"></input>  
              </div> */}


              {/* <Link to="/search">Search Episodes</Link> */}
              {/* <Link  type="Search" type="text" placeholder="Search.." to="/"> Search Episodes  </Link>  */}
              {/* <Search onSearch={this.state.allCourses}/> */}
              
              </div>

            </div>
        )
      }}
    </Consumer>
  );
}

export default Header;