import React from "react";
import styles from "./application.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function Application() {
  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    next: false,
  };

  return (
    <div className={styles.application} id="application">
      <div className="container">
        <div className="row">
          <div
            className={`${styles.application__info} col-lg-6 text-left text-lg-left`}
          >
            <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
            <p>
              Không chỉ đặt vé, bạn có thể bình luận phim, chấm điểm rạp và đổi
              quà hấp dẫn
            </p>
            <button className="btn btn-danger mb-2">
              App miễn phí - Tải về ngay!
            </button>
            <br />
            <span>
              Fox có 2 phiên bản{" "}
              <Link to="#" href="#">
                iOS
              </Link>{" "}
              và{" "}
              <Link to="#" href="#">
                Android
              </Link>
            </span>
          </div>

          <div className={`${styles.application__right} col-lg-6 mt-5 mt-lg-0`}>
            <div className={styles.application__img}>
              <LazyLoadImage
                src="./image/mobile.png"
                alt="img_mobie"
                className={styles.img__mobile}
              />

              <div className={styles.img__app}>
                <Slider {...settings}>
                  <LazyLoadImage
                    src="./image/slide1.jpg"
                    alt="img_slide1"
                    className={`${styles.img} img-fluid`}
                  />
                  <LazyLoadImage
                    src="./image/slide2.jpg"
                    alt="img_slide2"
                    className={`${styles.img} img-fluid`}
                  />
                  <LazyLoadImage
                    src="./image/slide3.jpg"
                    alt="img_slide3"
                    className={`${styles.img} img-fluid`}
                  />
                  <LazyLoadImage
                    src="./image/slide4.jpg"
                    alt="img_slide4"
                    className={`${styles.img} img-fluid`}
                  />
                  <LazyLoadImage
                    src="./image/slide5.jpg"
                    alt="img_slide5"
                    className={`${styles.img} img-fluid`}
                  />
                  <LazyLoadImage
                    src="./image/slide6.jpg"
                    alt="img_slide6"
                    className={`${styles.img} img-fluid`}
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
