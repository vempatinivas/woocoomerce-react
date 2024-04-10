import { useEffect, useState } from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

function Shop() {
  // State to store products
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState(0);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const Limit = 15;
  const [total, setTotal] = useState(Limit);

  // Fetch products on component mount
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${Limit}&skip=${pagination}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
        setPageNumbers(getPageNumbers(pagination, data.total, Limit));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [pagination]);

  return (
    <div className="site-wrap">
      <Header linkActive="Shop" />
      <Breadcrumb />

      {/* Pagination */}
      <div className="row" data-aos="fade-up">
        <div className="col-md-12 text-center">
          <div className="site-block-27">
            <ul>
              <li>
                <a
                  className={`${pagination > 0 ? "" : "disabled"}`}
                  onClick={() => {
                    pagination > 0 &&
                      setPagination((currentValue) => currentValue - Limit);
                  }}
                >
                  &lt;
                </a>
              </li>

              {pageNumbers.map((pageIndex) => (
                <li
                  key={pageIndex}
                  className={pagination === pageIndex * Limit ? "active" : ""}
                >
                  <span onClick={() => setPagination(pageIndex * Limit)}>
                    {pageIndex + 1}
                  </span>
                </li>
              ))}

              <li>
                <a
                  className={`${pagination + Limit < total ? "" : "disabled"}`}
                  onClick={() => {
                    pagination + Limit < total &&
                      setPagination((currentValue) => currentValue + Limit);
                  }}
                >
                  &gt;
                </a>
              </li>
            </ul>
          </div>
          <div className="site-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-9 order-2">
                  <div className="row">
                    <div className="col-md-12 mb-5">
                      <div className="float-md-left mb-4">
                        <h2 className="text-black h5">Shop All</h2>
                      </div>
                      <div className="d-flex">
                        <div className="dropdown mr-1 ml-md-auto">
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm dropdown-toggle"
                            id="dropdownMenuOffset"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Latest
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuOffset"
                          >
                            <a className="dropdown-item" href="#">
                              Men
                            </a>
                            <a className="dropdown-item" href="#">
                              Women
                            </a>
                            <a className="dropdown-item" href="#">
                              Children
                            </a>
                          </div>
                        </div>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm dropdown-toggle"
                            id="dropdownMenuReference"
                            data-toggle="dropdown"
                          >
                            Reference
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuReference"
                          >
                            <a className="dropdown-item" href="#">
                              Relevance
                            </a>
                            <a className="dropdown-item" href="#">
                              Name, A to Z
                            </a>
                            <a className="dropdown-item" href="#">
                              Name, Z to A
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                              Price, low to high
                            </a>
                            <a className="dropdown-item" href="#">
                              Price, high to low
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-5">
                    {products.map((product) => (
                      <ProductCart key={product.id} product={product} /> // Pass the product prop correctly
                    ))}
                  </div>

                  <p>
                    {pagination > 0 && (
                      <a
                        style={{ marginRight: "10px" }}
                        onClick={() => {
                          setPagination((currentValue) => currentValue - Limit);
                        }}
                        className="btn btn-sm btn-primary"
                      >
                        Prev
                      </a>
                    )}

                    {pagination + Limit < total && (
                      <a
                        onClick={() => {
                          setPagination((currentValue) => currentValue + Limit);
                        }}
                        className="btn btn-sm btn-primary"
                      >
                        Next
                      </a>
                    )}
                  </p>

                  <p>
                    <a
                      onClick={() => {
                        setPagination((currentValue) => Limit + currentValue);
                      }}
                      className="btn btn-sm btn-primary"
                    >
                      More
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 order-1 mb-5 mb-md-0">
              <div className="border p-4 rounded mb-4">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">
                  Categories
                </h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-1">
                    <a href="#" className="d-flex">
                      <span>Men</span>{" "}
                      <span className="text-black ml-auto">(2,220)</span>
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="d-flex">
                      <span>Women</span>{" "}
                      <span className="text-black ml-auto">(2,550)</span>
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="d-flex">
                      <span>Children</span>{" "}
                      <span className="text-black ml-auto">(2,124)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="border p-4 rounded mb-4">
                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Filter by Price
                  </h3>
                  <div
                    id="slider-range"
                    className="border-primary ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                  >
                    <div
                      className="ui-slider-range ui-corner-all ui-widget-header"
                      style={{ left: "15%", width: "45%" }}
                    ></div>
                    <span
                      tabIndex="0"
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "15%" }}
                    ></span>
                    <span
                      tabIndex="0"
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "60%" }}
                    ></span>
                  </div>
                  <input
                    type="text"
                    name="text"
                    id="amount"
                    className="form-control border-0 pl-0 bg-white"
                    disabled=""
                  />
                </div>
                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Size
                  </h3>
                  <label htmlFor="s_sm" className="d-flex">
                    <input type="checkbox" id="s_sm" className="mr-2 mt-1" />{" "}
                    <span className="text-black">Small (2,319)</span>
                  </label>
                  <label htmlFor="s_md" className="d-flex">
                    <input type="checkbox" id="s_md" className="mr-2 mt-1" />{" "}
                    <span className="text-black">Medium (1,282)</span>
                  </label>
                  <label htmlFor="s_lg" className="d-flex">
                    <input type="checkbox" id="s_lg" className="mr-2 mt-1" />{" "}
                    <span className="text-black">Large (1,392)</span>
                  </label>
                </div>
                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Color
                  </h3>
                  <a href="#" className="d-flex color-item align-items-center">
                    <span className="bg-danger color d-inline-block rounded-circle mr-2"></span>{" "}
                    <span className="text-black">Red (2,429)</span>
                  </a>
                  <a href="#" className="d-flex color-item align-items-center">
                    <span className="bg-success color d-inline-block rounded-circle mr-2"></span>{" "}
                    <span className="text-black">Green (2,298)</span>
                  </a>
                  <a href="#" className="d-flex color-item align-items-center">
                    <span className="bg-info color d-inline-block rounded-circle mr-2"></span>{" "}
                    <span className="text-black">Blue (1,075)</span>
                  </a>
                  <a href="#" className="d-flex color-item align-items-center">
                    <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
                    <span className="text-black">Purple (1,075)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function getPageNumbers(pagination: number, total: number, Limit: number) {
  const maxPageNumbers = 5;
  const totalPage = Math.ceil(total / Limit);
  const maxPages = Math.min(totalPage, maxPageNumbers);

  // Calculate the starting page number based on the current pagination
  let startPage = Math.max(
    0,
    Math.floor(pagination / Limit) - Math.floor(maxPages / 2)
  );
  startPage = Math.min(startPage, totalPage - maxPages);
  const pageNumbers = [];
  // Generate page numbers to display
  for (let i = startPage; i < startPage + maxPages; i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
}

function ProductCart({ product }: { product: Product }) {
  return (
    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={product.id}>
      <div className="block-4 text-center border">
        <figure className="block-4-image">
          <a href="shop-single.html">
            <img src={product.thumbnail} className="img-fluid" />
          </a>
        </figure>
        <div className="block-4-text p-4">
          <h3>
            <a href="shop-single.html">{product.title}</a>
          </h3>
          <p className="mb-0">{product.description}</p>
          <p className="text-primary font-weight-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Shop;
