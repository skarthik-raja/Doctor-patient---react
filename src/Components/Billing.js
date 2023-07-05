import React from 'react';
// import './Billing.css';

function App() {
  return (
    <div>
      <header className="header_area">
        {/* Top Menu */}
        <div className="top_menu row m0">
          <div className="container">
            <div className="float-left">
              <a className="dn_btn" href="mailto:medical@example.com">
                <i className="ti-email"></i>medical@example.com
              </a>
              <span className="dn_btn">
                <i className="ti-location-pin"></i>Find our Location
              </span>
            </div>
            <div className="float-right">
              <ul className="list header_social">
                <li>
                  <a href="#"><i className="ti-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i className="ti-twitter-alt"></i></a>
                </li>
                <li>
                  <a href="#"><i className="ti-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i className="ti-skype"></i></a>
                </li>
                <li>
                  <a href="#"><i className="ti-vimeo-alt"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Menu */}
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h" href="index.html">
                <img src="img/logo.png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about-us.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="department.html">
                      Department
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="doctors.html">
                      Doctors
                    </a>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="single-blog.html">
                          Blog Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="element.html">
                          Element
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content text-center">
              <h2>About Us</h2>
              <div className="page_link">
                <a href="index.html">Home</a>
                <a href="about-us.html">About Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team_area section_gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="main_title">
                <h2>Meet Our Doctors</h2>
                <p>
                  They are here to help you. Our expert team of doctors and
                  medical professionals is dedicated to providing the highest
                  quality medical care.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Doctor 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="single_team">
                <div className="team_thumb">
                  <img src="img/team/team-1.jpg" alt="" />
                </div>
                <div className="team_info">
                  <h3>Dr. John Doe</h3>
                  <p>Cardiologist</p>
                </div>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="single_team">
                <div className="team_thumb">
                  <img src="img/team/team-2.jpg" alt="" />
                </div>
                <div className="team_info">
                  <h3>Dr. Jane Smith</h3>
                  <p>Neurologist</p>
                </div>
              </div>
            </div>

            {/* Doctor 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="single_team">
                <div className="team_thumb">
                  <img src="img/team/team-3.jpg" alt="" />
                </div>
                <div className="team_info">
                  <h3>Dr. Mark Johnson</h3>
                  <p>Orthopedic Surgeon</p>
                </div>
              </div>
            </div>

            {/* Doctor 4 */}
            <div className="col-lg-3 col-md-6">
              <div className="single_team">
                <div className="team_thumb">
                  <img src="img/team/team-4.jpg" alt="" />
                </div>
                <div className="team_info">
                  <h3>Dr. Sarah Davis</h3>
                  <p>Pediatrician</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hotline_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hotline_wrap">
                <h3>Emergency hotline</h3>
                <h2>(+123) 456-7890</h2>
                <p>
                  If you have any medical emergency, simply call our hotline
                  and our medical experts will provide immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_area">
        <div className="container">
          <div className="row footer_bottom justify-content-center">
            <p className="col-lg-8 col-sm-12 footer-text text-center">
              {/* Footer text */}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
