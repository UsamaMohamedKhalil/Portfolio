import Modal from "./Modal";

const PortfolioModalTwo = ({ close, open }) => {
  return (
    <Modal close={close} open={open}>
      <div className="portfolio_popup_details">
        <div className="top_image">
          <img src="img/thumbs/888.png" alt="" />
          <div className="main" data-img-url="img/portfolio/888.png" />
        </div>
        <div className="portfolio_main_title">
          <h3>E-commerce Website</h3>
          <span>
            <a href="#">Detail</a>
          </span>
          <div />
        </div>

        <div className="text">
          <p>
          Crafting Shopify themes, automating data scraping for product acquisition, and delivering 15 high-quality designs with precision and efficiency. Elevate your project with seamless functionality and stunning aesthetics.
          </p>
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
              <a href="https://elmorshadystore.com/" >
                Live Now , Click To View
              </a>
            </div>
      </div>
    </Modal>
  );
};
export default PortfolioModalTwo;
