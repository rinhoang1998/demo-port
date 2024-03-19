import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Projects</h3>
          </div>

          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Đã Bao Lâu"
                    data-category="Davinci Resolve"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/kj9LoqaJBjE"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/da-bao-lau.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Đã Bao Lâu</h3>
                    <span>Davinci Resolve</span>
                  </div>
                </div>
              </li>
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Anh Từng"
                    data-category="Premiere Pro, After Effect"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/zT8WEw8yG50"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/anh-tung.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Anh Từng</h3>
                    <span>Premiere Pro, After Effect</span>
                  </div>
                </div>
              </li>
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Chuyển Nhà"
                    data-category="After Effect, Illustrator"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/yptf19GgHfM"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/chuyen-nha.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Chuyển Nhà</h3>
                    <span>After Effect, Illustrator</span>
                  </div>
                </div>
              </li>
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Không Biết Sau Này"
                    data-category="Premiere Pro"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/o0EoMavFudQ"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/khong-biet-sau-nay.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Không Biết Sau Này</h3>
                    <span>Premiere Pro</span>
                  </div>
                </div>
              </li>
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Hai Chiếc Giày"
                    data-category="After Effect, Illustrator"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/kW-zYC8Kl_U"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/hai-chiec-giay.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Hai Chiếc Giày</h3>
                    <span>After Effect, Illustrator</span>
                  </div>
                </div>
              </li>
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Em Có Thấy"
                    data-category="After Effect, Illustrator"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/yMg5SHVQ0PE"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/em-co-thay.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Em Có Thấy</h3>
                    <span>After Effect, Illustrator</span>
                  </div>
                </div>
              </li>
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Mây Trời"
                    data-category="After Effect"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/uGMK59APYVk"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/may-troi.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Mây Trời</h3>
                    <span>After Effect</span>
                  </div>
                </div>
              </li>
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Offline"
                    data-category="After Effect"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/t66QgPjAyTw"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/offline.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Offline</h3>
                    <span>After Effect</span>
                  </div>
                </div>
              </li> 
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="One n Only"
                    data-category="After Effect"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/BXHOsE-wPaI"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/one-n-only.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>One n Only</h3>
                    <span>After Effect</span>
                  </div>
                </div>
              </li> 
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Pitre Freestyle"
                    data-category="After Effect, Photoshop"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/lS93xEmeIao"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/pitre-freestyle.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Pitre Freestyle</h3>
                    <span>After Effect, Photoshop</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
