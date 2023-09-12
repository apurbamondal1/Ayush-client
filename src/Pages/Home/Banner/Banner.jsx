import React from 'react';
import banner from '../../../assets/banner.JPEG.jpeg';


const Banner = () => {
    return (
        <div className="hero pt-7">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to AYUSH World!</h1>
                    <p className="py-6">AYUSH is an acronym that stands for "Ayurveda, Yoga and Naturopathy, Unani, Siddha, and Homeopathy." It represents a holistic approach to healthcare that encompasses traditional and alternative systems of medicine in India. These systems, rooted in ancient wisdom, emphasize natural healing methods, herbal remedies, yoga, and lifestyle modifications to promote well-being and treat ailments. AYUSH therapies aim to balance the body's energies, enhance the body's innate healing capacity, and offer a complementary approach to modern medicine, providing a diverse range of options for individuals seeking holistic health solutions.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;