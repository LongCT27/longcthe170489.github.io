import { Navigate, useParams } from "react-router-dom";
import Navbar from "../partials/Navbar"

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
      <div className="col-md-5">
        <div className="image">
          <img src={product.image} className="img-fluid" alt={product.name}/>
        </div>
      </div>
      <div className="summary col-md-7">
        <h1 className="product_title display-5">{product.name}</h1>
        <p className="price mt-3">
          Price: 
          <del className="text-muted">
            <span>
              {product.originalPrice}
            </span>
          </del>
          <ins className="ms-2">
            <span>
              {product.salePrice}
            </span>
          </ins>
        </p>
        <div className="description mt-4">
          <h2>Description</h2>
          <div id="description">
            {product.description.map((c) => <p>{c}</p>)}
          </div>
        </div>
      </div>
    </div>
    <section className="related products mt-5">
      {/* Related Products Section Here */}
    </section>
  </div>
</div>

  );
};

export default ProductDetail;
