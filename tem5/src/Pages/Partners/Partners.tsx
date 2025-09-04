import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { partners } from "../../data/product";

const Partners = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-blue py-10">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md relative z-1 px-4">
        <div className="text-center">
          <h3 className="text-white dark:text-white text-lg font-mediumc mb-10">
            Trusted by content creators across the world
          </h3>
        </div>
        <Slider {...settings}>
          {partners.map((item, index) => (
            <div key={index} className="!flex justify-center items-center">
              <img src={item.image} alt="icon" width={129} height={32} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partners;
