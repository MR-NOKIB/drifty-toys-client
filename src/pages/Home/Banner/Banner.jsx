import React, { } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css'
import banner1 from "../../../assets/images/banner/banner 1.jpg";
import banner2 from "../../../assets/images/banner/373.jpg";
import banner3 from "../../../assets/images/banner/banner 3.jpeg";
import banner4 from "../../../assets/images/banner/banner 4.jpg";



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='h-[600px]'>
                        <div>
                            <img className='h-[600px]' src={banner1} alt="" />
                        </div>
                        <div className='absolute left-0 top-20 lg:top-10 lg:left-20 w-full h-full text-center lg:text-left '>
                            <h1 className=' text-4xl font-bold'>Rev Up Your <br />Playtime with <br /> Premium Toy Cars!</h1>
                            <p className='text-gray-400 pt-2'>Fuel Your Fun with Premium Toy Cars!</p>
                            <Link to="/all-toys">
                                <button className='btn hover:bg-[#de3f74cb] bg-[#DE3F75] mt-10 text-white text-xl font-semibold px-4 py-2 rounded-md'>Find Out More</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[600px]'>
                        <div>
                            <img className='h-[600px]' src={banner2} alt="" />
                        </div>
                        <div className='absolute left-0 top-20 lg:top-10 lg:left-20 w-full h-full text-center lg:text-left '>
                            <h1 className=' text-4xl font-bold'>Where <br /> Little Drivers <br /> Find Big <br />Adventures!</h1>
                            <p className='text-gray-300 pt-2'>Where Little Hands Drive Big Dreams!</p>
                            <Link to="/all-toys">
                                <button className='btn hover:bg-[#de3f74cb] bg-[#DE3F75] mt-10 text-white text-xl font-semibold px-4 py-2 rounded-md'>Find Out More</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[600px]'>
                        <div>
                            <img className='h-[600px]' src={banner3} alt="" />
                        </div>
                        <div className='absolute left-0 top-20 lg:top-10 lg:left-20 w-full h-full text-center lg:text-left '>
                            <h1 className='text-white text-4xl font-bold'>Explore <br />the World of <br />Miniature Motors!</h1>
                            <p className='text-gray-300 pt-2'>FDiscover the Thrill of Miniature Motors!</p>
                            <Link to="/all-toys">
                                <button className='btn hover:bg-[#de3f74cb] bg-[#DE3F75] mt-10 text-white text-xl font-semibold px-4 py-2 rounded-md'>Find Out More</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[600px]'>
                        <div>
                            <img className='h-[600px]' src={banner4} alt="" />
                        </div>
                        <div className='absolute left-0 top-20 lg:top-10 lg:left-20 w-full h-full text-center lg:text-left '>
                            <h1 className='text-white text-4xl font-bold'>From Sports Cars <br /> to Fire Trucks – <br />We’ve Got It All!</h1>
                            <p className='text-gray-300 pt-2'>From Sports Cars to Fire Trucks – Endless Adventures Await!</p>
                            <Link to="/all-toys">
                                <button className='btn hover:bg-[#de3f74cb] bg-[#DE3F75] mt-10 text-white text-xl font-semibold px-4 py-2 rounded-md'>Find Out More</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;