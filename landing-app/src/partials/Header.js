import React from 'react';
import '../css/Header.css'; // Assuming you have a separate CSS file for custom styles

const Header = () => {
  return (
    <div className="container">
      <div className="row align-items-center py-2">
        <div className="col-md-3 d-flex align-items-center">
          <a href="/" className="logo">
            <img
              src="https://tadahdiy.com/wp-content/uploads/2022/04/web-logo-tadah-.jpg"
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
              <form action="https://tadahdiy.com/" method="get" className="d-flex">
                <input
                  type="text"
                  name="s"
                  className="form-control form-control-sm"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button type="submit" className="btn btn-outline-secondary btn-sm ml-2">
                  <i className="fa fa-search"></i>
                </button>
                <input type="hidden" name="post_type" value="product" />
              </form>
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
