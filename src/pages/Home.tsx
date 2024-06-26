import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="site-wrap">
        {/*  Header */}
        <Header linkActive="Home" />
        <div
          className="site-blocks-cover"
          style={{ backgroundImage: "url(images/hero_1.jpg)" }}
          data-aos="fade"
        >
          <div className="container">
            <div className="row align-items-start align-items-md-center justify-content-end">
              <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
                <h1 className="mb-2">Finding Your Perfect Shoes</h1>
                <div className="intro-text text-center text-md-left">
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus at iaculis quam. Integer accumsan tincidunt
                    fringilla.{" "}
                  </p>
                  <p>
                    <a href="#" className="btn btn-sm btn-primary">
                      Shop Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section site-section-sm site-blocks-1">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
                data-aos="fade-up"
                data-aos-delay
              >
                <div className="icon mr-4 align-self-start">
                  <span className="icon-truck"></span>
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Free Shipping</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus at iaculis quam. Integer accumsan tincidunt
                    fringilla.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon mr-4 align-self-start">
                  <span className="icon-refresh2"></span>
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Free Returns</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus at iaculis quam. Integer accumsan tincidunt
                    fringilla.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon mr-4 align-self-start">
                  <span className="icon-help"></span>
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Customer Support</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus at iaculis quam. Integer accumsan tincidunt
                    fringilla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section site-blocks-2">
          <div className="container">
            <div className="row">
              <div
                className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0"
                data-aos="fade"
                data-aos-delay
              >
                <a className="block-2-item" href="#">
                  <figure className="image">
                    <img src="images/women.webp" alt class="img-fluid" />
                  </figure>
                  <div className="text">
                    <span className="text-uppercase">Collections</span>
                    <h3>Women</h3>
                  </div>
                </a>
              </div>
              <div
                className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
                data-aos="fade"
                data-aos-delay="100"
              >
                <a className="block-2-item" href="#">
                  <figure className="image">
                    <img
                      src="images/children.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <div className="text">
                    <span className="text-uppercase">Collections</span>
                    <h3>Children</h3>
                  </div>
                </a>
              </div>
              <div
                className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
                data-aos="fade"
                data-aos-delay="200"
              >
                <a className="block-2-item" href="#">
                  <figure className="image">
                    <img src="images/men.webp" alt="" className="img-fluid" />
                  </figure>
                  <div className="text">
                    <span className="text-uppercase">Collections</span>
                    <h3>Men</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section block-3 site-blocks-2 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 site-section-heading text-center pt-4">
                <h2>Featured Products</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Carousel responsive={responsive}>
                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="block-4 text-center">
                      <figure className="block-4-image">
                        <img
                          src="images/cloth_1.webp"
                          alt="Image placeholder"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="block-4-text p-4">
                        <h3>
                          <a href="#">Tank Top</a>
                        </h3>
                        <p className="mb-0">Finding perfect t-shirt</p>
                        <p className="text-primary font-weight-bold">$50</p>
                      </div>
                    </div>
                  </div>
                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="block-4 text-center">
                      <figure className="block-4-image">
                        <img
                          src="images/shoe_1.webp"
                          alt="Image placeholder"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="block-4-text p-4">
                        <h3>
                          <a href="#">Corater</a>
                        </h3>
                        <p className="mb-0">Finding perfect products</p>
                        <p className="text-primary font-weight-bold">$50</p>
                      </div>
                    </div>
                  </div>
                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="block-4 text-center">
                      <figure className="block-4-image">
                        <img
                          src="images/cloth_2.webp"
                          alt="Image placeholder"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="block-4-text p-4">
                        <h3>
                          <a href="#">Polo Shirt</a>
                        </h3>
                        <p className="mb-0">Finding perfect products</p>
                        <p className="text-primary font-weight-bold">$50</p>
                      </div>
                    </div>
                  </div>
                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="block-4 text-center">
                      <figure className="block-4-image">
                        <img
                          src="images/cloth_3.webp"
                          alt="Image placeholder"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="block-4-text p-4">
                        <h3>
                          <a href="#">T-Shirt Mockup</a>
                        </h3>
                        <p className="mb-0">Finding perfect products</p>
                        <p className="text-primary font-weight-bold">$50</p>
                      </div>
                    </div>
                  </div>
                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="block-4 text-center">
                      <figure className="block-4-image">
                        <img
                          src="images/shoe_1.webp"
                          alt="Image placeholder"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="block-4-text p-4">
                        <h3>
                          <a href="#">Corater</a>
                        </h3>
                        <p className="mb-0">Finding perfect products</p>
                        <p className="text-primary font-weight-bold">$50</p>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section block-8">
          <div className="container">
            <div className="row justify-content-center  mb-5">
              <div className="col-md-7 site-section-heading text-center pt-4">
                <h2>Big Sale!</h2>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-7 mb-5">
                <a href="#">
                  <img
                    src="images/blog_1.webp"
                    alt="Image placeholder"
                    className="img-fluid rounded"
                  />
                </a>
              </div>
              <div className="col-md-12 col-lg-5 text-center pl-md-5">
                <h2>
                  <a href="#">50% less in all items</a>
                </h2>
                <p className="post-meta mb-4">
                  By <a href="#">Carl Smith</a>{" "}
                  <span className="block-8-sep">&bullet;</span> September 3,
                  2018
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam iste dolor accusantium facere corporis ipsum animi
                  deleniti fugiat. Ex, veniam?
                </p>
                <p>
                  <a href="#" className="btn btn-primary btn-sm">
                    Shop Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
