import React from 'react';
import '../css/Header.css'; // Assuming you have a separate CSS file for custom styles

const Header = () => {
  return (
    <div className="container">
      <div className="row align-items-center py-2">
        <div className="col-md-3 d-flex align-items-center">
          <a href="/" className="logo">
            <img
              src="/logo.png"
              className="img-fluid"
              alt="Tadahdiy"
            />
          </a>
          <div className="open-nav d-md-none d-lg-none ml-auto">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-7">
              
            </div>
            <div className="col-md-5 d-none d-lg-flex justify-content-end">
              <a href="/gio-hang" className="btn btn-link btn-sm">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
