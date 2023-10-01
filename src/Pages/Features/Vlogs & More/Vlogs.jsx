import React from 'react';
import blog from "../../../assets/more.jpeg"

const Vlogs = () => {
    return (
        <div style={{
          background: `url(${blog})`,
          backgroundSize: 'cover',
      }} className='pt-[90px] pl-[10px]'>
        <h3 className="text-3xl mb-5"><strong>Details About AYUSH with blogs,pictures and videos format.</strong></h3>
        <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  What is AYUSH?
  </div>
  <div className="collapse-content"> 
    <p>AYUSH is an acronym for Ayurveda, Yoga and Naturopathy, Unani, Siddha and Homeopathy and are the six Indian systems of medicine prevalent and practiced in India and some of the neighboring Asian countries with very few exceptions in some of the developed countries.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How can ayush help to improve health?
  </div>
  <div className="collapse-content"> 
    <p>Another significant component of AYUSH physicians is their role in assisting people in managing chronic health concerns like diabetes, heart disease, and arthritis, to improve the overall quality of life. AYUSH practitioners are frequently found as the primary healthcare providers in rural India.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  What is the aim of AYUSH program?
  </div>
  <div className="collapse-content"> 
    <p>The AYUSH systems advocate holistic wellness approach aiming at prevention of diseases and promotion of health and wellbeing.</p>
  </div>
</div>
        </div>
    );
};

export default Vlogs;