import React from "react";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={styles.footer__content}>
          <div className={styles.footer__top}>
            <div className={`row ${styles.footer__info}`}>
              <div className={`col-md-4 ${styles.top__item}`}>
                <h6 className={styles.top__title}>TIX</h6>
                <ul className={styles.top__list}>
                  <li className={styles.list__item}>
                    <a className={styles.list__link} href="/#">
                      FAQ
                    </a>
                  </li>

                  <li className={styles.list__item}>
                    <a className={styles.list__link} href="/#">
                      Thỏa thuận sử dụng
                    </a>
                  </li>

                  <li className={styles.list__item}>
                    <a className={styles.list__link} href="/#">
                      Brand Guidelines
                    </a>
                  </li>

                  <li className={styles.list__item}>
                    <a className={styles.list__link} href="/#">
                      Chính sách bảo mật
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className={`col-md-4 ${styles.top__item} ${styles.img__col}`}
              >
                <h6 className={styles.top__title}>ĐỐI TÁC</h6>
                <ul className={styles.img__list}>
                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://www.cgv.vn"
                      title="cgv"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-cgv.png"
                        alt="cgv"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://www.bhdstar.vn"
                      title="bhd"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-bhd.png"
                        alt="bhd"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://www.galaxycine.vn"
                      title="galaxy"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-galaxy.png"
                        alt="galaxy"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="http://cinestar.com.vn"
                      title="cinestar"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-star.png"
                        alt="cinestar"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="http://lottecinemavn.com/LCHS/index.aspx"
                      title="lotte"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-lotte.png"
                        alt="lotte"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://www.megagscinemas.vn"
                      title="mega"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-mega.png"
                        alt="mega"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://www.betacineplex.vn/home.htm"
                      title="beta"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-beta.jpg"
                        alt="beta"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="http://ddcinema.vn"
                      title="ddc"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-ddc.png"
                        alt="ddc"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://touchcinema.com"
                      title="touch"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-touch.png"
                        alt="touch"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://cinemaxvn.com"
                      title="cinemax"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-cinemax.jpg"
                        alt="cinemax"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://starlight.vn"
                      title="starlight"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-starlight.png"
                        alt="starlight"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://www.dcine.vn"
                      title="dcine"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-dcine.png"
                        alt="dcine"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://zalopay.vn"
                      title="zalopay"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-zalopay.png"
                        alt="zalopay"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://www.payoo.vn"
                      title="payoo"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-payoo.png"
                        alt="payoo"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://portal.vietcombank.com.vn/Pages/Home.aspx"
                      title="vietcombank"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-vietcombank.png"
                        alt="vietcombank"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://www.agribank.com.vn"
                      title="agribank"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-agribank.png"
                        alt="agribank"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://www.vietinbank.vn/web/home/vn/index.html"
                      title="vietinbank"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-vietinbank.png"
                        alt="vietinbank"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://www.indovinabank.com.vn"
                      title="ivb"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-ivb.png"
                        alt="ivb"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://webv3.123go.vn"
                      title="123go"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-123go.png"
                        alt="123go"
                        className="img-fluid"
                      />
                    </Link>
                  </li>

                  <li className={styles.img__item}>
                    <Link
                      className={styles.img__link}
                      to="#"
                      href="https://laban.vn"
                      title="laban"
                      target="_blank"
                    >
                      <img
                        src="/image/logo-laban.jpg"
                        alt="laban"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className={`col-md-2 ${styles.top__item} ${styles.mobile__app}`}
              >
                <h6 className={styles.top__title}>MOBILE APP</h6>
                <ul className={styles.logo__list}>
                  <li className={styles.logo__item}>
                    <Link
                      className={styles.logo__link}
                      href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                    >
                      <img
                        className="pl-0"
                        src="/image/logo-apple.png"
                        alt="apple"
                      />
                    </Link>
                  </li>
                  <li className={styles.logo__item}>
                    <Link
                      className={styles.logo__link}
                      href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                    >
                      <img
                        className="pl-0"
                        src="/image/logo-android.png"
                        alt="android"
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={`col-md-2 text-center ${styles.top__item}`}>
                <h6 className={styles.top__title}>SOCIAL</h6>

                <ul className={styles.logo__list}>
                  <li className={styles.logo__item}>
                    <Link className={styles.logo__link} href="#">
                      <img
                        className={`${styles.img__social} pl-0`}
                        src="/image/logo-facebook.png"
                        alt="facebook"
                      />
                    </Link>
                  </li>
                  <li className={styles.logo__item}>
                    <Link className={styles.logo__link} href="#">
                      <img
                        className={`${styles.img__social} pl-0`}
                        src="/image/logo-zalo.png"
                        alt="zalo"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className={styles.division__line} />

          <div className={styles.footer__bottom}>
            <div className="row">
              <div
                className={`${styles.footer__left} col-md-2 col-xs-12 col-sm-12`}
              >
                <img className="img-fuild" src="/image/zion.jpg" alt="zion" />
              </div>

              <div
                className={`${styles.footer__middle} col-md-8 col-sm-12 col-xs-12`}
              >
                <h6 className={styles.footer__title}>
                  TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
                </h6>
                <h6 className={styles.footer__h6}>
                  Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                  Hồ Chí Minh, Việt Nam.
                </h6>
                <h6 className={styles.footer__h6}>
                  Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                </h6>
                <h6 className={styles.footer__h6}>
                  đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở
                  kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                </h6>
                <h6 className={styles.footer__h6}>
                  Số Điện Thoại (Hotline): 1900 545 436
                </h6>
              </div>

              <div
                className={`${styles.footer__right} col-md-2 col-xs-12 col-sm-12`}
              >
                <img
                  className="img-fuild"
                  src="/image/dathongbao.png"
                  alt="dathongbao"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
