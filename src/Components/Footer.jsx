import React from "react";
import { SocialIcon } from "react-social-icons";
import "../Styling/FooterStyle.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-6 col-lg-3 about-footer">
                <h3>OFFICE ADDRESS</h3>
                <ul>
                  <li>
                    <a href="tel:9667426556">
                      <i className="bi bi-telephone-fill"></i>9667426556,
                      9667426555
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@sunrisewebsolution.com">
                      <i className="bi bi-envelope-at-fill"></i>
                      info@sunrisewebsolution.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-geo-alt-fill"></i>
                      3rd Floor,
                      <br />
                      Triveni Commercial Hub,
                      <br />
                      Station Road,
                      <br />
                      Sikar(Raj.) 332001 INDIA
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-2 page-more-info">
                <div className="footer-title">
                  <h4>Page links</h4>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-6 col-lg-3 page-more-info">
                <div className="footer-title">
                  <h4>OUR SERVICES</h4>
                </div>
                <ul>
                  <li>
                    <a href="#">Website Design</a>
                  </li>
                  <li>
                    <a href="#">Web Application Development</a>
                  </li>
                  <li>
                    <a href="#">Software Development</a>
                  </li>
                  <li>
                    <a href="#">Mobile App</a>
                  </li>
                  <li>
                    <a href="#">Graphics Design</a>
                  </li>
                  <li>
                    <a href="#">Web Hosting</a>
                  </li>
                  <li>
                    <a href="#">Domain Registration</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4 open-hours">
                <div className="footer-title">
                  <h4>Open hours</h4>
                  <ul className="footer-social">
                    <li className="socialIconsLogo">
                      <SocialIcon url="https://facebook.com" />
                    </li>
                    <li>
                      <SocialIcon url="https://instagram.com" />
                    </li>
                    <li>
                      <SocialIcon url="https://whatsapp.com" />
                    </li>
                  </ul>
                </div>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <i className="bi bi-clock-fill"></i>Monday
                      </td>
                      <td>9:30am - 6:00pm</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="bi bi-clock-fill"></i>Tuesday
                      </td>
                      <td>9:30am - 6:00pm</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="bi bi-clock-fill"></i>Wednesday
                      </td>
                      <td>9:30am - 6:00pm</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="bi bi-clock-fill"></i>Thursday
                      </td>
                      <td>9:30am - 6:00pm</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="bi bi-clock-fill"></i>Friday
                      </td>
                      <td>9:30am - 6:00pm</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="bi bi-clock-fill"></i>Saturday
                      </td>
                      <td>9:30am - 6:00pm</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <div className="footer-logo">
                  <img
                    src="https://www.sunrisewebsolution.com/Content/images/logo.png"
                    alt="Sunrise Web Solution"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <div className="row">
              <div className="col-sm-12 col-md-8 text-md-end">
                <p>
                  <a href="#">
                    © 2012 - 2024 Sunrise Web Solution - A Web design company
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
