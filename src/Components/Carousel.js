import React from "react";
import Slider from "react-slick";
export default function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          //   infinite: true,
          //   dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
      <>
    <footer className="footer pt-4 mt-2">
      <div className="container">
        <div className="container text-center text-white">
          <h4 className="text-uppercase">Find Job Talents</h4>
          <h2 className="text-capitalize">explore our latest candidates</h2>
          <div
            style={{ border: "1px solid #000", width: "40px", margin: "auto",borderRadius:"5px" }}
          ></div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered
          </p>
        </div>
      </div>
    </footer>
    <div className="container mt-2">
    <div className="slider-show container">
          <Slider {...settings}>
            <div  className="text-center text-secondary">
              <img src="./images/1.jpg" className="img-fluid slider-img" />
              <p>Ahmed Hassan</p>
              <p>UI Doveloper</p>
            </div>
            <div  className="text-center text-secondary">
              <img src="./images/8.jpg" className="img-fluid slider-img" />
              <p>Ahmed Abd Alhalim</p>
              <p>Graphic Design</p>
            </div>

            <div  className="text-center text-secondary">
              <img src="./images/5.jpg" className="img-fluid slider-img" />
              <p >Mohamed Habaza</p>
              <p>UX Doveloper</p>
            </div>

            <div  className="text-center text-secondary">
              <img src="./images/6.jpg" className="img-fluid slider-img" />
              <p>Amr Gamal Sadeq</p>
              <p>UX Doveloper</p>
            </div>

            <div className="text-center text-secondary">
              <img src="./images/7.jpg" className="img-fluid slider-img" />
              <p>Fouad Badawy</p>
              <p>Web Doveloper</p>
            </div>
            <div className="text-center text-secondary">
              <img
                src="./images/pexels-1.jpg"
                className="img-fluid slider-img"
              />
               <p>Mahmoud Baghagho</p>
              <p>Art Diractor</p>
            </div>
            <div className="text-center text-secondary">
              <img src="./images/4.jpg" className="img-fluid slider-img" />
              <p>Ahmed Abd Alhalim</p>
              <p>Graphic Design</p>
            </div>
            <div className="text-center text-secondary">
              <img src="./images/2.jpg" className="img-fluid slider-img" />
              <p >Ahmed Hassan</p>
              <p>UI Doveloper</p>
            </div>
          </Slider>
        </div>
        <div className="text-center mb-4">
        <button className="btn btn-dark">EXPLORE ALL</button>
        </div>
        </div>
    </>
  );
}
