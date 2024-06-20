import Navbar from "../partials/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import allProducts from "../data/products.json"
import HotProducts from "../partials/HotProducts";
import "../css/products.css"

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
      <Navbar />
      <main id="ecommerce">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sidebar_product pt-5">
                <HotProducts />
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
                          <div className="card h-100 d-flex flex-column">
                            <a
                              href={product.link}
                              className="text-decoration-none d-flex flex-column flex-grow-1"
                            >
                              <div className="image-container">
                                <img
                                  src={`/img/${product.id}.jpg`}
                                  className="card-img-top"
                                  alt={product.name}
                                />
                              </div>
                              <div className="border-between"></div>
                              <div className="card-body d-flex flex-column flex-grow-1">
                                <h5 className="card-title text-center flex-grow-1 d-flex align-items-center justify-content-center">
                                  {product.name}
                                </h5>
                                <Link
                                  to={`/products/${product.id}`}
                                  className="btn btn-success mt-auto"
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
