import { contact } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== about.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Contact = () =>  (
  <section id="contact" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Get in Touch with  <br className="sm:block hidden" /> Right Hand Senior Care
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <span className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1"> Call Us: </span> 612-483-7314 <br className="sm:block hidden" /> 
        <span className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1"> Email: </span> hajiroahmed133@gmail.com <br className="sm:block hidden" /> 
        <span className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1"> Address:</span> 2400 W 66th St, Richfield MN 55423
      </p>

      <Button styles={`mt-10`} />
    </div>

    {/* <div className={`${layout.sectionImg} flex-col`}>
      {about.map((service, index) => (
        <FeatureCard key={service.id} {...service} index={index} />
      ))}
    </div> */}
  </section>
);

export default Contact;