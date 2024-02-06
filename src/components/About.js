import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Osama",
  lastName: "Mohamed",
  bithday: "22.12.2001",
  address: "Egypt , Alexandria",
  phn: "+20 10 9474 59 72",
  email: "usamamohamed1222",
  serviceLists: [
    "Website Development",
    "Shopify Websites",
    "Scrap Data Automation",
    "Social Media Design",
  ],
  skills: {
    programming: [
      { name: "Html", value: "90" },
      { name: "Css", value: "90" },
      { name: "JavaScript", value: "85" },
      { name: "React", value: "95" },
      { name: "Mongo DB", value: "85" },
      { name: "Express", value: "90" },
      { name: "Node Js", value: "90" },
      { name: "Tailwind Css", value: "85" },
      { name: "Bootstrap", value: "80" },
      { name: "Shopify", value: "85" },
    ],
    language: [
      { name: "Arabic", value: "100" },
      { name: "English", value: "75" },
    ],
  },
  education: [
    { year: "2020 - 2024", unv: "Arap Open Univercity", degree: "Bachelor Degree In Computer Science" },
  ],
  working: [
    {
      year: "2024",
      company: "ITI Intern | ASP.NET",
      deg: "trainee",
    },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.png" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  My name is <span>Osama Mohamed.</span> a MERN stack developer and front-end enthusiast based in Egypt
                  and {`My`}   passion lies in crafting efficient and responsive applications using the MERN (MongoDB, Express.js, React, Node.js) stack. With a keen eye for detail and a commitment to delivering high-quality solutions, I strive to elevate digital experiences and bring ideas to life.


                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
