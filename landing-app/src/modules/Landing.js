import { Link } from "react-router-dom";
import Navbar from "../partials/Navbar";
import Featured from "../data/featured_products.json";
import "../css/products.css"

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div class="">
        <div class="row">
          <div class="col">
            <div class="img-fluid">
              <img
                src="img/HOA VẠN SẮC.jpg"
                alt="Workshop"
                class="img-fluid"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="home_product">
        <div className="container">
          <div className="items">
            <div className="title">
              <h1> Sản phẩm </h1>
            </div>
            <hr />
            <div className="row">
              {Featured.map((p) => (
                <div className="col-md-4 mb-4" key={p.id}>
                  <div className="item d-flex flex-column h-100">
                    <a className="thumb" href={`/products/${p.id}`}>
                      <div className="image-container">
                        <img
                          className="img-fluid"
                          src={`/img/${p.id}.jpg`}
                          alt={p.name}
                        />
                      </div>
                    </a>
                    <div className="border-between"></div>
                    <div className="content mt-2 d-flex flex-column flex-grow-1">
                      <h3 className="text-center flex-grow-1 d-flex align-items-center justify-content-center">
                        <Link className="text-decoration-none" to={`/products/${p.id}`}>{p.name}</Link>
                      </h3>
                      <p className="link mt-2">
                        <Link
                          className="btn btn-primary"
                          to={`/products/${p.id}`}
                        >
                          Thông tin
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="news_home">
        <div className="container container-fluid">
          <div className="title text-center mb-4">
            <h2>Video</h2>
          </div>
          <div className="row justify-content-center mb-10">
            <div className="col-md-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
