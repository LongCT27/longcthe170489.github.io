import Navbar from "../partials/Navbar";
import HotItems from "../data/hot_products.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import allProducts from "../data/products.json"

const itemsPerPage = 8;

const Products = () => {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = () => {
      // Simulate an API call
      setTimeout(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        setProducts(allProducts.slice(start, end));
        setTotalPages(Math.ceil(allProducts.length / itemsPerPage));
      }, 500);
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar/>
      <main id="ecommerce">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sidebar_product pt-5">
                <div class="hot">
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
                                src={item.img}
                                alt="Den Long Ong Sao Trung Thu"
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
                                  <bdi>{item.price}</bdi>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 order-first order-md-last ">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-9 order-md-last">
                    <div className="py-3">
                      <h1 className="display-4">Sản phẩm</h1>
                    </div>
                    <div className="clearfix mb-3">
                      <div className="float-left">
                        <p className="text-muted">
                          Showing {products.length} of {allProducts.length}{" "}
                          results
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      {products.map((product) => (
                        <div className="col-md-4 col-12 mb-4" key={product.id}>
                          <div className="card h-100">
                            <a
                              href={product.link}
                              className="text-decoration-none"
                            >
                              <img
                                src={product.imageUrl}
                                className="card-img-top"
                                alt={product.name}
                              />
                              <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">
                                  <span className="text-muted text-decoration-line-through">
                                    {product.originalPrice}
                                  </span>
                                  <span className="text-danger">
                                    {" "}
                                    {product.discountedPrice}
                                  </span>
                                </p>
                                <Link
                                  to={`/products/${product.id}`}
                                  className="btn btn-success"
                                >
                                  Details
                                </Link>
                              </div>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                    <nav aria-label="Page navigation">
                      <ul className="pagination justify-content-center">
                        {[...Array(totalPages).keys()].map((page) => (
                          <li
                            className={`page-item ${
                              page + 1 === currentPage ? "active" : ""
                            }`}
                            key={page + 1}
                            onClick={() => handlePageChange(page + 1)}
                          >
                            <span className="page-link">{page + 1}</span>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
