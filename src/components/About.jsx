import { about } from "../constants";
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

const About = () =>  (
  <section id="about" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      About Us <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Right Hand Senior is a leading healthcare provider in Minnesota. 
      With a solid commitment to delivering exceptional care and support to individuals, 
      we strive to enhance their quality of life and promote their overall well-being. 
      Our experienced team of healthcare professionals is dedicated to providing personalized and compassionate services to meet the unique needs of each individual. 
      We believe in fostering a warm, nurturing environment where individuals can thrive and remain independent.
       Trust us to be your right hand in senior care.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    {/* <div className={`${layout.sectionImg} flex-col`}>
      {about.map((service, index) => (
        <FeatureCard key={service.id} {...service} index={index} />
      ))}
    </div> */}
  </section>
);

export default About;