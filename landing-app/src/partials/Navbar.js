import React from 'react';
import { Link } from 'react-router-dom';
import "../css/style.css"

const Navbar = () => {
  return (
    <nav className="style-67">
    <div className="style-68">
        <ul className="style-69">
            <li className="style-70"><Link to="/" aria-current="page" className="style-71">Trang chủ</Link></li>
            <li className="style-74"><Link to="/products" className="style-75">Sản phẩm</Link></li>
            <li className="style-76"><Link to="/services" className="style-77">Dịch vụ</Link></li>
        </ul>
    </div>
</nav>
  );
}

export default Navbar;
