import React from 'react';
import { NavigationItmes } from './NavigationData';
import { Link } from 'react-router-dom';
import "../../assets/styles.css"


const RightSideBar = () =>{
    return(
        <div className='rightSideBar-container'>
            This is Right Side bar
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {NavigationItmes.map((navigationItem, id) => {
                return (
                  <li className="nav-item" key={navigationItem.id}>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={navigationItem.nav_Item}
                    >
                      {navigationItem.nav_Item}
                    </Link>
                  </li>
                );
              })}
            </ul>
        </div>
    )
}
export default RightSideBar;