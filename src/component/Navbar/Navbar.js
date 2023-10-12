import React from "react";
import { menuItems } from "./navbarData";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src=""
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Jott Down
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menuItems.map((menuItem, id) => {
                return (
                  <li className="nav-item" key={menuItem.id}>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={menuItem.menu_Item}
                    >
                      {menuItem.menu_Item}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
