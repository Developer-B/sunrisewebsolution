import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-light bsb-navbar bsb-navbar-hover bsb-navbar-caret">
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className="navbar-brand" href="index.html">
              <img
                src="https://www.sunrisewebsolution.com/Content/images/logo.png"
                alt="Logo"
                width="200"
                height="45"
              />
            </NavLink>
          </div>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                    href="#!"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link" href="#!">
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    to="/Services"
                    className="nav-link dropdown-toggle"
                    href="#!"
                    id="accountDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </NavLink>
                  <ul
                    className="dropdown-menu border-0 shadow bsb-zoomIn"
                    aria-labelledby="accountDropdown"
                  >
                    <li>
                      <NavLink
                        to="/services/WebsiteDesign"
                        className="dropdown-item"
                        href="#!"
                      >
                        Website Design
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/WebApplicationDevelopment"
                        className="dropdown-item"
                        href="#!"
                      >
                        Web Application Development
                      </NavLink>
                    </li>
                    <li></li>
                    <li>
                      <NavLink
                        to="/services/SoftwareDevelopment"
                        className="dropdown-item"
                        href="#!"
                      >
                        Software Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/MobileApp"
                        className="dropdown-item"
                        href="#!"
                      >
                        Mobile App
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/GraphicsDesign"
                        className="dropdown-item"
                        href="#!"
                      >
                        Graphics Design
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/WebHosting"
                        className="dropdown-item"
                        href="#!"
                      >
                        Web Hosting
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/DomainRegistration"
                        className="dropdown-item"
                        href="#!"
                      >
                        Domain Registration
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/Products" className="nav-link" href="#!">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Contact" className="nav-link" href="#!">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
