import React from "react";
import TestimonialSlider from "../Slider";

function ParentComp() {
  const styles = {
    heading: {
      background: "linear-gradient(180deg, #FFFFFF 38.89%, #001E2B 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textFillColor: "transparent"

    },
  };

  return (
    <>
      <section className="bg-[url('/images/desktop.png')] bg-no-repeat bg-cover lg:pt-28 md:pt-14 sm:pt-24 pt-24 xl:pb-48 lg:pb-36 md:pb-28 sm:pb-32 pb-32  relative">
        <div className="container max-w-6xl ml-auto mr-auto lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12">
          <div className="row">
            <h1 style={styles.heading} className="font-Satoshi font-bold text-white pb-4 xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl text-center">
              We're loved from clients
            </h1>
            <p className="font-Satoshi text-sm lg:text-lg md:text-sm text-[#F7F8F8] opacity-50 text-center lg:px-40 md:px-32 lg:pb-20 md:pb-12 sm:pb-12 pb-12">
              We are proud of the great projects Angle Brackets has taken part
              in. Here is what our customers say about our expertise in Android.
            </p>
            <TestimonialSlider />
          </div>
        </div>
      </section>
    </>
  );
}

export default ParentComp;
