import { useEffect, useState } from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const baseURL = "https://creationdesks.com/my-woocommerce/wp-json/wc/v3/";

type Product = {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: string | null;
  date_on_sale_from_gmt: string | null;
  date_on_sale_to: string | null;
  date_on_sale_to_gmt: string | null;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: any[];
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: number | null;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  low_stock_amount: number | null;
  sold_individually: boolean;
  weight: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  tags: any[];
  images: {
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    src: string;
    name: string;
    alt: string;
  }[];
  attributes: any[];
  default_attributes: any[];
  variations: any[];
  grouped_products: any[];
  menu_order: number;
  price_html: string;
  related_ids: number[];
  meta_data: any[];
  stock_status: string;
  has_options: boolean;
  post_password: string;
  jetpack_sharing_enabled: boolean;
  _links: {
    self: { href: string }[];
    collection: { href: string }[];
  };
};

function ShopWocom() {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState(1);
  const Limit = 3;

  useEffect(() => {
    fetchProducts();
  }, [pagination]);

  let fetchProducts = (page = pagination, perPage = Limit) => {
    fetch(`${baseURL}products?page=${page}&per_page=${perPage}`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa(
          "ck_0b499b6914dc402bf6afeb695e3eebacfcf49fa3" +
            ":" +
            "cs_07cd071e2de9e4cb357286b65c38d56d02905d34"
        )}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data); // Update state with products data
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  return (
    <div className="site-wrap">
      <Header linkActive="Shop" />
      <Breadcrumb />

      {/* Pagination */}
      <div className="row" data-aos="fade-up">
        <div className="col-md-12 text-center">
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
                    <a
                      onClick={() => {
                        setPagination((currentValue) => 1 + currentValue);
                      }}
                      className="btn btn-sm btn-primary"
                    >
                      Next
                    </a>
                  </p>
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
                    <a
                      href="#"
                      className="d-flex color-item align-items-center"
                    >
                      <span className="bg-danger color d-inline-block rounded-circle mr-2"></span>{" "}
                      <span className="text-black">Red (2,429)</span>
                    </a>
                    <a
                      href="#"
                      className="d-flex color-item align-items-center"
                    >
                      <span className="bg-success color d-inline-block rounded-circle mr-2"></span>{" "}
                      <span className="text-black">Green (2,298)</span>
                    </a>
                    <a
                      href="#"
                      className="d-flex color-item align-items-center"
                    >
                      <span className="bg-info color d-inline-block rounded-circle mr-2"></span>{" "}
                      <span className="text-black">Blue (1,075)</span>
                    </a>
                    <a
                      href="#"
                      className="d-flex color-item align-items-center"
                    >
                      <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
                      <span className="text-black">Purple (1,075)</span>
                    </a>
                  </div>
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

function ProductCart({ product }: { product: Product }) {
  return (
    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={product.id}>
      <div className="block-4 text-center border">
        <figure className="block-4-image">
          <a href="shop-single.html">
            {product.images.length > 0 && (
              <img
                src={product.images[0].src}
                alt={product.name}
                className="img-fluid"
              />
            )}
          </a>
        </figure>
        <div className="block-4-text p-4">
          <h3>
            <a href="shop-single.html">{product.name}</a>
          </h3>
          <p className="mb-0">
            <div
              dangerouslySetInnerHTML={{ __html: product.short_description }}
            />
          </p>
          <p className="text-primary font-weight-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ShopWocom;
