import Modal from "./Modal";

const PortfolioModal = ({ close, open }) => {
  return (
    <Modal close={close} open={open}>
      <div className="portfolio_popup_details">
        <div className="top_image">
          <img src="img/thumbs/88.png" alt="" />
          <div className="main" data-img-url="img/portfolio/88.png" />
        </div>
        <div className="portfolio_main_title">
          <h3>Nike Store Demo</h3>
          <span>
            <a href="#">React - Redux - Tailwind Css</a>
          </span>
          <div />
        </div>

        <div className="text">
          <p>
          Experience the future of e-commerce with our Nike Store demo. Built using React and Redux, it seamlessly integrates dynamic functionalities, responsive design, and state management. Tailwind CSS enhances the aesthetic, delivering a user-centric and visually appealing showcase of the latest Nike products for an immersive shopping experience.          </p>
        </div>
    {/*     <div className="additional_images">
          <ul className="gallery_zoom">
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/7.jpg" />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="img/portfolio/7.jpg"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/8.jpg" />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="img/portfolio/8.jpg"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/9.jpg" />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="img/portfolio/9.jpg"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div> */}
        <div className="edrea_tm_button full">
              <a href="https://nike-store-usama.vercel.app/">
                Live Now , Click To View
              </a>
            </div>
      </div>
    </Modal>
  );
};
export default PortfolioModal;
