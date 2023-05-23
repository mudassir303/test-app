import React from 'react'
import Slider from "react-slick";
import { SliderData } from './SliderObj';


const TestimonialSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
<>
      <section className="childComp bg-[#21313C] p-4 xl:p-16 lg:p-12 md:p-8 sm:p-8 rounded-3xl">
        <div className="container max-w-6xl">
          <Slider {...settings}>
            {SliderData.map((item) => {
              return (
                <div className="row flex flex-wrap overflow-hidden" key={item.id}>
                  <div className="left pb-16 md:w-2/4 lg:pr-20 md:pr-14 sm:pb-16">
                    <h2 className='font-Satoshi text-base xl:text-3xl lg:text-2xl md:text-xl sm:text-2xl font-bold text-white pb-4'>{item.title}</h2>
                    <p className=' text-sm font-Satoshi lg:text-lg md:text-sm text-[#F7F8F8] opacity-50'>{item.para}</p>
                    <div className="userDiv flex md:pt-12 sm:pt-4 pt-6 items-center">
                      <div className="userImg w-16 pr-4">
                        <img className='w-full rounded-full' src={item.userImage} alt="" />
                      </div>
                      <div className="userData">
                        <h5 className='font-Satoshi text-white lg:text-base md:text-sm text-sm font-bold pb-2'>{item.user}</h5>
                        <p className='font-Satoshi text-sm text-[#F7F8F8] opacity-50 '>{item.userDesignation}</p>
                      </div>
                    </div>
                  </div>
                  <div className="right md:w-2/4">
                    <div className="country pb-8">
                      <h6 className='font-Satoshi font-bold lg:text-base md:text-sm text-sm text-white pb-2'>Country</h6>
                      <div className="flag flex items-center gap-x-2">
                        <div className="div w-4">
                        <img className='w-full' src={item.ImageUrl} alt="" />
                        </div>
                        <p className='font-Satoshi text-base text-[#F7F8F8] opacity-50'>{item.country}</p>
                      </div>
                    </div>
                    <div className="projectSummary pb-8">
                      <h5 className='font-Satoshi font-bold lg:text-base md:text-sm text-sm text-white pb-4'>Project Summary</h5>
                      <p className='font-Satoshi lg:text-base md:text-sm text-sm text-[#F7F8F8] opacity-50'>A Fintech App For A New Startup</p>
                    </div>
                    <div className="info flex pb-8">
                      <div>
                        <h5 className='font-Satoshi font-bold lg:text-base md:text-sm text-sm text-white pb-2 xl:pr-14 lg:pr-10 md:pr-6 sm:pr-10 pr-6'>Industry</h5>
                        <p className='font-Satoshi lg:text-base md:text-sm text-[#F7F8F8] opacity-50'>Finance</p>
                      </div>
                      <div>
                        <h5 className='font-Satoshi font-bold lg:text-base md:text-sm text-sm text-white pb-2 xl:pr-14 lg:pr-10 md:pr-6 sm:pr-10 pr-6'>Team Size</h5>
                        <p className='font-Satoshi lg:text-base md:text-sm text-sm text-[#F7F8F8] opacity-50'>11 Specialists</p>
                      </div>
                      <div>
                        <h5 className='font-Satoshi font-bold lg:text-base md:text-sm text-sm text-white pb-2 xl:pr-14 lg:pr-10 md:pr-6 sm:pr-10 pr-6'>Duration</h5>
                        <p className='font-Satoshi lg:text-base md:text-sm text-sm text-[#F7F8F8] opacity-50'>6 Months</p>
                      </div>
                      <div>
                        <h5 className='font-Satoshi font-bold lg:text-base text-sm md:text-sm text-white pb-2 xl:pr-4 lg:pr-10 md:pr-6 sm:pr-10 pr-6'>Budget</h5>
                        <p className='font-Satoshi lg:text-base md:text-sm text-sm text-[#F7F8F8] opacity-50'>Over $40k</p>
                      </div>
                    </div>
                    <div className="tech">
                      <h5 className='font-Satoshi font-bold lg:text-base md:text-sm text-sm text-white pb-2'>Technologies</h5>
                      <div className='flex'>
                        <p className='font-Satoshi lg:text-base md:text-sm text-sm text-[#F7F8F8] opacity-50 pr-4'>Swift</p>
                        <p className='font-Satoshi lg:text-base md:text-sm text-sm text-[#F7F8F8] opacity-50'>Swift UI</p>
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
  )
}

export default TestimonialSlider