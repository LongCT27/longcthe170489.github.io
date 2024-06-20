import { Link } from "react-router-dom";
import Navbar from "../partials/Navbar";

const products = [
  {
    id: 1,
    img: "/img/01.jpg",
    name: "Product 01",
  },
  {
    id: 2,
    img: "/img/02.jpg",
    name: "Product 02",
  },
  {
    id: 3,
    img: "/img/03.jpg",
    name: "Product 03",
  },
  {
    id: 4,
    img: "/img/04.jpg",
    name: "Product 04",
  },
  {
    id: 5,
    img: "/img/05.jpg",
    name: "Product 05",
  },
  {
    id: 6,
    img: "/img/06.jpg",
    name: "Product 06",
  },
];

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
            <hr/>
            <div className="row">
              {products.map((p) => (
                <div className="col-md-4">
                  <div className="item">
                    <a className="thumb" href={`/products/${p.id}`}>
                      <img
                        className="img-fluid"
                        style={{
                          width: 416,
                          height: 416,
                        }}
                        src={p.img}
                      />
                    </a>
                    <div className="content mt-2">
                      <h3>
                        <Link to={`/products/${p.id}`}>
                          {p.name}
                        </Link>
                      </h3>
                      <p className="link">
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
      <hr/>
      <div className="news_home">
        <div className="container container-fluid">
          <div className="title text-center mb-4">
            <h2>Video</h2>
          </div>
          <div className="row justify-content-center mb-10">
            <div className="col-md-10">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
