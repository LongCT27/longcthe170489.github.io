import { Navigate, useParams } from "react-router-dom";
import Navbar from "../partials/Navbar";
import HotProducts from "../partials/HotProducts";

const ProductDetail = () => {
  let { productId } = useParams();
  let product = null;

  try {
    product = require(`../data/products/${productId}.json`);
  } catch (e) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div id="product-735" className="product row py-4">
          <div className="col-md-3">
            <HotProducts />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-5">
                <div className="image">
                  <img
                    src={`/img/${product.id}.jpg`}
                    className="img-fluid"
                    alt={product.name}
                  />
                </div>
              </div>
              <div className="col-md-7">
                <h1 className="product_title display-5">{product.name}</h1>
                <p className="price mt-3">
                  {product.short_description}
                </p>
                <p>
                  Price: Liên hệ
                </p>
                <div>
                  <a href="/" className="btn btn-primary">Liên hệ</a>
                </div>
              </div>
              <div className="description mt-4 text-left">
                  <h2>Description</h2>
                  <div id="description">
                    {product.description.map((c) => (
                      <p>{c}</p>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
