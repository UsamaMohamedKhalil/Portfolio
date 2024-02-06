import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../sliderProps";
import NewsPopup from "./popup/NewsPopup";



const data = [
  {
    title: "MVC",
    img: "img/blogs/1.png",
    tag: "Technology",
    des: [
      "-Modernize your development with MVC (Model-View-Controller) architecture. Streamline code organization, enhance scalability, and improve maintenance, creating robust and efficient web applications with a structured and modular approach.",
    ],
  },
  {
    title: "React Router",
    img: "img/blogs/2.png",
    tag: "Technology",
    des: [
      "- React Router DOM facilitates navigation in React applications, allowing dynamic, single-page web apps by syncing UI components with the URL.",
      "- Installation is done through npm or yarn, making route management declarative and straightforward.",
    ],
  },
  {
    title: ".Env",
    img: "img/blogs/3.png",
    tag: "Technology",
    des: [
      "- The `.env` file stores environment variables, offering a centralized configuration solution in software development.",
      "- Benefits include improved configuration management, enhanced security by safeguarding sensitive data, environment-specific settings, consistency in development teams, and exclusion from version control.",
    ],
  },
  {
    title: "API (MERN)",
    img: "img/blogs/4.png",
    tag: "Technology",
    des: [
      "- In the MERN stack, API controllers manage backend logic for handling HTTP requests and responses in the Express.js framework.",
      "- Routes define the mapping between HTTP methods, URIs, and corresponding controller functions, organizing and structuring API endpoints.",
      " - Using separate controller and route files ensures modularity and maintainability, with the main application file using and configuring these routes.",
    ],
  },
];

const News = () => {
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <NewsPopup open={modal} close={() => setModal(false)} data={activeData} />
      <div className="edrea_tm_section hidden animated" id="news">
        <div className="section_inner">
          <div className="edrea_tm_news swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Latest <span className="coloring">Blogs</span>
              </h3>
            </div>
            <div className="news_list">
              <Swiper {...newsSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {data.map((news, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <div className="list_inner">
                        <div className="image">
                          <img src={news.img} alt="" />
                          <div className="main" data-img-url={news.img} />
                          <a
                            className="edrea_tm_full_link news_popup"
                            href="#"
                            onClick={() => onClick(i)}
                          />
                        </div>
                        <div className="details">
                          <h3>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.title}
                            </a>
                          </h3>
                          <span>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.tag}
                            </a>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="currentNews" />
                    <span className="pagination_progress">
                      <span className="all allNews">
                        <span />
                      </span>
                    </span>
                    <span className="totalNews" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default News;
