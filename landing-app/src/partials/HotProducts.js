import { Link } from "react-router-dom";
import HotItems from "../data/hot_products.json";

const HotProducts = () => {



    return (<div class="hot">
        <div class="title-bg">
          <h2 class=""> Sản phẩm nổi bật </h2>
        </div>
        <div class="list">
          {HotItems.map((item) => (
            <div class="card item mb-4">
              <div class="row no-gutters align-items-center">
                <div class="col-md-4 text-center">
                  <Link
                    to={`/products/${item.id}`}
                    class="no-decoration"
                  >
                    <img
                      class="card-img-top ml-3"
                      src={`/img/${item.id}.jpg`}
                      alt={item.name}
                    />
                  </Link>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">
                      <Link
                        to={`/products/${item.id}`}
                        class="no-decoration text-dark"
                        style={{ color: "#FF5733" }}
                      >
                        {item.name}
                      </Link>
                    </h3>
                    <p class="card-text price">
                      <span
                        class="woocommerce-Price-amount amount"
                        style={{ color: "#007BFF" }}
                      >
                        <bdi>Price: Contact Us</bdi>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>)
}

export default HotProducts