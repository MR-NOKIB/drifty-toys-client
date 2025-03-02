import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../../assets/images/gallery/g1.jpg';
import img2 from '../../../assets/images/gallery/g2.jpg';
import img3 from '../../../assets/images/gallery/g3.jpg';
import img4 from '../../../assets/images/gallery/g4.jpg';
import img5 from '../../../assets/images/gallery/g5.jpg';
import img6 from '../../../assets/images/gallery/g6.jpg';
import img7 from '../../../assets/images/gallery/g7.jpg';
import img8 from '../../../assets/images/gallery/g8.jpg';
import img9 from '../../../assets/images/gallery/g9.jpg';


const Gallery = () => {
    return (
        <div className='my-[5rem]'>
            <h2 className='custom-h1 text-center text-4xl font-bold mb-[3rem]'>Our Gallery</h2>
            <Marquee speed={150}>
                <img className='h-[320px] w-[340px] md:w-fit object-cover rounded-lg mx-4' src={img1} alt="" />
                <img className='h-[320px] w-[340px] md:w-fit object-cover rounded-lg mx-4' src={img2} alt="" />
                <img className='h-[320px] w-[340px] md:w-fit object-cover rounded-lg mx-4' src={img3} alt="" />
                <img className='h-[320px] w-[340px] md:w-fit object-cover rounded-lg mx-4' src={img4} alt="" />
                <img className='h-[320px] w-[340px] md:w-fit object-cover rounded-lg mx-4' src={img5} alt="" />
                <img className='h-[320px] w-[340px] md:w-fit object-cover rounded-lg mx-4' src={img6} alt="" />
                <img className='h-[320px] w-[340px] md:w-fit object-cover rounded-lg mx-4' src={img7} alt="" />
                <img className='h-[320px] w-[340px] md:w-fit object-cover rounded-lg mx-4' src={img8} alt="" />
                <img className='h-[320px] w-[340px] md:w-fit object-cover rounded-lg mx-4' src={img9} alt="" />
            </Marquee>
        </div>
    );
};

export default Gallery;