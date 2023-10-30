import { card } from "../assets";
import styles, { layout } from "../style";
import { cardDetails } from "../constants";
import ReadMore from "./ReadMore";
import React, { useState } from 'react';

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== services.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content } <br />
          <br />
          <ReadMore />
        </p>
      </div>
      <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[80%] h-[80%]" />
    </div> 
    </div>
    
  );

const CardDetails = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
           <h2 className={styles.heading2}>
        Become a member of  <br className="sm:block hidden" /> <span className="text-gradient">Our services.</span>{" "}
      </h2>
      {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p> */}

      {/* <Button styles={`mt-10`} /> */}
    {cardDetails.map((service, index) => (
        <FeatureCard key={service.id} {...service} index={index} />
      ))}
   
    </div>

    {/* <div className={layout.sectionImg}>
       <img src={card} alt="billing" className="w-[50%] h-[50%]" />
    </div> */}
  </section>
);

export default CardDetails;
