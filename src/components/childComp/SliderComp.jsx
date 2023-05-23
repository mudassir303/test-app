import Slider from "react-slick";
import { React, useState, useEffect } from "react";
import PrevArrow from "../prevarrow/PrevArrow";
import NextArrow from "../nextarrow/NextArrow";

function SliderComp() {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/slideData.json");
        const data = await response.json();
        setSlideData(data);
      } catch (error) {
        console.error("Error fetching slide data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <section className="childComp bg-orange-700">
        <div className="container">
          <Slider {...settings}>
            {slideData.map((item) => {
              return (
                <div className="row" key={item.id}>
                  <div className="left">
                    <h2>{item.title}</h2>
                    <p>{item.para}</p>
                    <div className="userDiv">
                      <div className="userImg">
                        <img src={item.userImage} alt="" />
                      </div>
                      <div className="userData">
                        <h5>{item.user}</h5>
                        <p>{item.userDesignation}</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="country">
                      <h6>Country</h6>
                      <div className="flag">
                        <img src={item.imageUrl} alt="" />
                        <p>{item.country}</p>
                      </div>
                    </div>
                    <div className="projectSummary">
                      <h5>Project Summary</h5>
                      <p>A Fintech App For A New Startup</p>
                    </div>
                    <div className="info">
                      <div>
                        <h5>Industry</h5>
                        <p>Finance</p>
                      </div>
                      <div>
                        <h5>Team Size</h5>
                        <p>11 Specialists</p>
                      </div>
                      <div>
                        <h5>Duration</h5>
                        <p>6 Months</p>
                      </div>
                      <div>
                        <h5>Budget</h5>
                        <p>Over $40k</p>
                      </div>
                    </div>
                    <div className="tech">
                      <h5>Technologies</h5>
                      <div>
                        <p>Swift</p>
                        <p>Swift UI</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default SliderComp;
