import Navbar from "../partials/Navbar";

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="home_product">
        <div className="container">
          <div className="items">
            <div className="title">
              <h2> Sản phẩm </h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="item">
                  <a
                    className="thumb"
                    href="https://tadahdiy.com/san-pham/den-long-ong-sao-trung-thu/"
                  >
                    <img
                      className="img-fluid"
                      src="https://tadahdiy.com/wp-content/uploads/2023/08/365418912_257994313651245_4732505918576502112_n.jpg"
                    />
                  </a>
                  <div className="content">
                    <h3>
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/den-long-ong-sao-trung-thu/">
                        {" "}
                        Đèn lồng ông sao Trung Thu{" "}
                      </a>{" "}
                    </h3>
                    <p className="price">
                      {" "}
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          45,000
                          <span className="woocommerce-Price-currencySymbol">
                            &#8363;
                          </span>
                        </bdi>
                      </span>{" "}
                    </p>
                    <p className="link">
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/den-long-ong-sao-trung-thu/">
                        {" "}
                        Thêm giỏ hàng{" "}
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <a
                    className="thumb"
                    href="https://tadahdiy.com/san-pham/thie%cc%a3p-noel-sang-ta%cc%a3o-4/"
                  >
                    <img
                      className="img-fluid"
                      src="https://tadahdiy.com/wp-content/uploads/2022/12/tah1.jpg"
                    />
                  </a>
                  <div className="content">
                    <h3>
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/thie%cc%a3p-noel-sang-ta%cc%a3o-4/">
                        {" "}
                        Thiệp Noel Sáng Tạo{" "}
                      </a>{" "}
                    </h3>
                    <p className="price">
                      {" "}
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          35,000
                          <span className="woocommerce-Price-currencySymbol">
                            &#8363;
                          </span>
                        </bdi>
                      </span>{" "}
                    </p>
                    <p className="link">
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/thie%cc%a3p-noel-sang-ta%cc%a3o-4/">
                        {" "}
                        Thêm giỏ hàng{" "}
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <a
                    className="thumb"
                    href="https://tadahdiy.com/san-pham/thie%cc%a3p-noel-sang-ta%cc%a3o-3/"
                  >
                    <img
                      className="img-fluid"
                      src="https://tadahdiy.com/wp-content/uploads/2022/12/tah2.jpg"
                    />
                  </a>
                  <div className="content">
                    <h3>
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/thie%cc%a3p-noel-sang-ta%cc%a3o-3/">
                        {" "}
                        Thiệp Noel Sáng Tạo{" "}
                      </a>{" "}
                    </h3>
                    <p className="price">
                      {" "}
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          35,000
                          <span className="woocommerce-Price-currencySymbol">
                            &#8363;
                          </span>
                        </bdi>
                      </span>{" "}
                    </p>
                    <p className="link">
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/thie%cc%a3p-noel-sang-ta%cc%a3o-3/">
                        {" "}
                        Thêm giỏ hàng{" "}
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <a
                    className="thumb"
                    href="https://tadahdiy.com/san-pham/thie%cc%a3p-noel-sang-ta%cc%a3o-2/"
                  >
                    <img
                      className="img-fluid"
                      src="https://tadahdiy.com/wp-content/uploads/2022/12/tah4.jpg"
                    />
                  </a>
                  <div className="content">
                    <h3>
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/thie%cc%a3p-noel-sang-ta%cc%a3o-2/">
                        {" "}
                        Thiệp Noel Sáng Tạo{" "}
                      </a>{" "}
                    </h3>
                    <p className="price">
                      {" "}
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          35,000
                          <span className="woocommerce-Price-currencySymbol">
                            &#8363;
                          </span>
                        </bdi>
                      </span>{" "}
                    </p>
                    <p className="link">
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/thie%cc%a3p-noel-sang-ta%cc%a3o-2/">
                        {" "}
                        Thêm giỏ hàng{" "}
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <a
                    className="thumb"
                    href="https://tadahdiy.com/san-pham/thie%cc%a3p-noel-sang-ta%cc%a3o/"
                  >
                    <img
                      className="img-fluid"
                      src="https://tadahdiy.com/wp-content/uploads/2022/12/tah3.jpg"
                    />
                  </a>
                  <div className="content">
                    <h3>
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/thie%cc%a3p-noel-sang-ta%cc%a3o/">
                        {" "}
                        Thiệp Noel Sáng Tạo{" "}
                      </a>{" "}
                    </h3>
                    <p className="price">
                      {" "}
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          35,000
                          <span className="woocommerce-Price-currencySymbol">
                            &#8363;
                          </span>
                        </bdi>
                      </span>{" "}
                    </p>
                    <p className="link">
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/thie%cc%a3p-noel-sang-ta%cc%a3o/">
                        {" "}
                        Thêm giỏ hàng{" "}
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <a
                    className="thumb"
                    href="https://tadahdiy.com/san-pham/kit-lam-tranh-hoa-sen-thu%cc%89-cong/"
                  >
                    <img
                      className="img-fluid"
                      src="https://tadahdiy.com/wp-content/uploads/2022/09/z3751864193036_08285645c99f7a8a722d17387ab59e89-scaled.jpg"
                    />
                  </a>
                  <div className="content">
                    <h3>
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/kit-lam-tranh-hoa-sen-thu%cc%89-cong/">
                        {" "}
                        KIT LÀM TRANH HOA SEN THỦ CÔNG{" "}
                      </a>{" "}
                    </h3>
                    <p className="price">
                      {" "}
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          49,000
                          <span className="woocommerce-Price-currencySymbol">
                            &#8363;
                          </span>
                        </bdi>
                      </span>{" "}
                    </p>
                    <p className="link">
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/kit-lam-tranh-hoa-sen-thu%cc%89-cong/">
                        {" "}
                        Thêm giỏ hàng{" "}
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <a
                    className="thumb"
                    href="https://tadahdiy.com/san-pham/kit-lam-tranh-hoa-poppy-thu%cc%89-cong/"
                  >
                    <img
                      className="img-fluid"
                      src="https://tadahdiy.com/wp-content/uploads/2022/09/z3751863225302_3d1f9ba18da7674cc837c7be614a1bd4-scaled.jpg"
                    />
                  </a>
                  <div className="content">
                    <h3>
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/kit-lam-tranh-hoa-poppy-thu%cc%89-cong/">
                        {" "}
                        KIT LÀM TRANH HOA POPPY THỦ CÔNG{" "}
                      </a>{" "}
                    </h3>
                    <p className="price">
                      {" "}
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          49,000
                          <span className="woocommerce-Price-currencySymbol">
                            &#8363;
                          </span>
                        </bdi>
                      </span>{" "}
                    </p>
                    <p className="link">
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/kit-lam-tranh-hoa-poppy-thu%cc%89-cong/">
                        {" "}
                        Thêm giỏ hàng{" "}
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <a
                    className="thumb"
                    href="https://tadahdiy.com/san-pham/tranh-hoa-huong-duong/"
                  >
                    <img
                      className="img-fluid"
                      src="https://tadahdiy.com/wp-content/uploads/2022/09/z3751863395982_b48234a5a4df6553fe2bb498bee7d01b-scaled.jpg"
                    />
                  </a>
                  <div className="content">
                    <h3>
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/tranh-hoa-huong-duong/">
                        {" "}
                        KIT LÀM TRANH HOA HƯỚNG DƯƠNG THỦ CÔNG{" "}
                      </a>{" "}
                    </h3>
                    <p className="price">
                      {" "}
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          49,000
                          <span className="woocommerce-Price-currencySymbol">
                            &#8363;
                          </span>
                        </bdi>
                      </span>{" "}
                    </p>
                    <p className="link">
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/tranh-hoa-huong-duong/">
                        {" "}
                        Thêm giỏ hàng{" "}
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <a
                    className="thumb"
                    href="https://tadahdiy.com/san-pham/tranh-hoa-nghe%cc%a3-thua%cc%a3t-6/"
                  >
                    <img
                      className="img-fluid"
                      src="https://tadahdiy.com/wp-content/uploads/2022/08/version5-1.jpg"
                    />
                  </a>
                  <div className="content">
                    <h3>
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/tranh-hoa-nghe%cc%a3-thua%cc%a3t-6/">
                        {" "}
                        TRANH HOA NGHỆ THUẬT{" "}
                      </a>{" "}
                    </h3>
                    <p className="price">
                      {" "}
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          249,000
                          <span className="woocommerce-Price-currencySymbol">
                            &#8363;
                          </span>
                        </bdi>
                      </span>{" "}
                    </p>
                    <p className="link">
                      {" "}
                      <a href="https://tadahdiy.com/san-pham/tranh-hoa-nghe%cc%a3-thua%cc%a3t-6/">
                        {" "}
                        Thêm giỏ hàng{" "}
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news_home">
        <div className="container">
          <div className="title">
            <h2> Video </h2>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="video">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/ZmItAzJITis"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>Đăng ký nhận tin mới nhất</h3>{" "}
              <div className="textwidget">
                <div
                  role="form"
                  className="wpcf7"
                  id="wpcf7-f279-o1"
                  lang="vi"
                  dir="ltr"
                >
                  <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>{" "}
                    <ul></ul>
                  </div>
                  <form
                    action="/#wpcf7-f279-o1"
                    method="post"
                    className="wpcf7-form init"
                    novalidate="novalidate"
                    data-status="init"
                  >
                    <p>
                      <span className="wpcf7-form-control-wrap email-720">
                        <input
                          type="email"
                          name="email-720"
                          value="Email Address"
                          size="40"
                          className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email form-control"
                          aria-invalid="false"
                        />
                      </span>
                      <br />
                      <input
                        type="submit"
                        value="Sign Up"
                        className="wpcf7-form-control has-spinner wpcf7-submit btn btn-success"
                      />
                    </p>
                    <div
                      className="wpcf7-response-output"
                      aria-hidden="true"
                    ></div>
                  </form>
                </div>
                <div className="newsletter ">
                  <form
                    className="contact-form"
                    action="https://occobaby.us12.list-manage.com/subscribe/post?u=8a163f3934476b6881e608e0c&amp;id=ae547c158f"
                    method="post"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                  ></form>
                </div>
              </div>
              <h3>Danh mục sản phẩm</h3>
              <ul className="product-categories">
                <li className="cat-item cat-item-15">
                  <a href="https://tadahdiy.com/danh-muc-san-pham/category/">
                    Category
                  </a>
                </li>
                <li className="cat-item cat-item-57">
                  <a href="https://tadahdiy.com/danh-muc-san-pham/kit-thu-cong-cho-be/">
                    KIT THỦ CÔNG CHO BÉ
                  </a>
                </li>
                <li className="cat-item cat-item-58">
                  <a href="https://tadahdiy.com/danh-muc-san-pham/kit-tranh-hoa-giay/">
                    KIT TRANH HOA GIẤY
                  </a>
                </li>
                <li className="cat-item cat-item-77">
                  <a href="https://tadahdiy.com/danh-muc-san-pham/thie%cc%a3p-hoa-giay/">
                    THIỆP HOA GIẤY
                  </a>
                </li>
              </ul>{" "}
            </div>

            <div className="col-md-3">
              <h3>Navigation</h3>{" "}
              <div className="textwidget">
                <ul>
                  <li>Home</li>
                  <li>Products</li>
                  <li>Product Registration</li>
                  <li>Blog</li>
                  <li>Contact</li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Liên hệ</h3>{" "}
              <div className="textwidget">
                <p>
                  Địa chỉ: Tadah Diy Brand , Số 2 ngõ 136 Tam Trinh, Quận Hoàng
                  Mai, Thành Phố Hà Nội
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:tadahdiy@gmail.com">tadahdiy@gmail.com</a>
                </p>
                <p>Hotline: (+84) 82685 2222</p>
              </div>
            </div>
            <div className="col-md-3">
              <h3> Mạng xã hội </h3>
              <div className="social">
                <ul>
                  <li>
                    {" "}
                    <a
                      href="https://www.facebook.com/tadahdiyvn"
                      className="facebook"
                    >
                      {" "}
                      <i className="fa fa-facebook"> </i>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="" className="skype">
                      {" "}
                      <i className="fa fa-instagram"> </i>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="" className="youtube">
                      {" "}
                      <i className="fa fa-youtube"> </i>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="mailto:tadahdiy@gmail.com" className="email">
                      {" "}
                      <i className="fa fa-envelope"> </i>{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy_right">
        <div className="container">
          <p> © 2022 tadahdiy.com. All Rights Reserved </p>
          <p>
            {" "}
            <img src="https://tadahdiy.com/wp-content/themes/theme/assets/images/pay_icon.png" />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
