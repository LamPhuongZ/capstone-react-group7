import React, { useState } from 'react'
import data from './data.json'
import styles from "./news.module.scss";
import cls from "classnames";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';

function News() {
    const [toggleExpand, setToggleExpand] = useState(false);
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }
        setBasicActive(value);
    };

    return (
        <section className={styles.news} id='news'>
            <MDBTabs tab justify className={cls("container mb-3", styles.news__content)}>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                        Điện Ảnh 24h
                    </MDBTabsLink>
                </MDBTabsItem>

                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                        Review
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                        Khuyến Mãi
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>
            <MDBTabsContent>
                {
                    toggleExpand ? (
                        <>
                            <MDBTabsPane show={basicActive === 'tab1'}>

                            </MDBTabsPane>

                            <MDBTabsPane show={basicActive === 'tab2'}>
                                <div className="container">
                                    <div className="row">
                                        <div className={cls("col-md-6", styles.news__img)}>
                                            <LazyLoadImage
                                                src="./image/news1.jpg"
                                                alt="anh_new1"
                                                className="img-fluid "
                                            />
                                            <Link
                                                to="#"
                                                href="#"
                                                className="text-decoration-none"
                                            >
                                                [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động của Khả Như và Kiều Minh Tuấn
                                            </Link>
                                            <p>
                                                Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.{" "}
                                            </p>

                                        </div>
                                        <div className={cls("col-md-6", styles.news__img)}>
                                            <LazyLoadImage
                                                src="./image/news2.jpg"
                                                alt="anh_new2"
                                                className="img-fluid "
                                            />
                                            <Link to="#" href="#" className="text-decoration-none">
                                                [Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân
                                            </Link>
                                            <p>
                                                Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và cảm xúc về tình cảm gia đình.{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={cls("col-md-4", styles.news__img, styles.news__bottom)}>
                                            <LazyLoadImage
                                                src="./image/news3.jpg"
                                                alt="anh_new3"
                                                className="img-fluid"
                                            />
                                            <p>
                                                <Link to="#" href="#" className="text-decoration-none">
                                                    Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết người bệnh hoạn vô hình?
                                                </Link>
                                            </p>
                                            <p>
                                                Phiên bản hiện đại của The Invisible Man là một trong những phim kinh dị xuất sắc nhất năm nay.{" "}
                                            </p>
                                        </div>
                                        <div className={cls("col-md-4", styles.news__img, styles.news__bottom)}>
                                            <LazyLoadImage
                                                src="./image/news4.jpg"
                                                alt="anh_new4"
                                                className="img-fluid"
                                            />
                                            <p>
                                                <Link to="#" href="#" className="text-decoration-none">
                                                    Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ đâu xa
                                                </Link>
                                            </p>
                                            <p>
                                                Brahms: The Boy II có những màn hù dọa ấn tượng nhưng cái kết lại không tương xứng với phần mở đầu hứa hẹn.
                                            </p>
                                        </div>
                                        <div className={cls("col-md-4", styles.news__special)}>
                                            <div className="row mb-3 mb-md-0 mb-lg-2">
                                                <LazyLoadImage
                                                    src="./image/news5.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                                <Link
                                                    to="#"
                                                    href="#"
                                                    className="pt-md-2 text-decoration-none"
                                                >
                                                    Nhím Sonic - Cười thả ga cùng chàng nhím siêu thanh lầy lội
                                                </Link>
                                            </div>
                                            <div className="row mb-3 mb-md-0 mb-lg-2">
                                                <LazyLoadImage src="./image/news6.jpg" alt="anh_new6" />
                                                <Link
                                                    to="#"
                                                    href="#"
                                                    className="pt-md-2 text-decoration-none"
                                                >
                                                    Tháng Năm Hạnh Phúc Ta Từng Có - Buông bỏ chưa bao giờ là việc dễ dàng
                                                </Link>
                                            </div>
                                            <div className="row mb-3 mb-md-0 mb-lg-2">
                                                <LazyLoadImage src="./image/news7.jpg" alt="anh_new6" />
                                                <Link
                                                    to="#"
                                                    href="#"
                                                    className="pt-md-2 text-decoration-none"
                                                >
                                                    Sắc Đẹp Dối Trá - Hương Giang kể chuyện đời mình qua phim ảnh
                                                </Link>
                                            </div>
                                            <div className="row mb-3 mb-md-0 mb-lg-2">
                                                <LazyLoadImage src="./image/news8.jpg" alt="anh_new6" />
                                                <Link
                                                    to="#"
                                                    href="#"
                                                    className="pt-md-2 text-decoration-none"
                                                >
                                                    Birds of Prey - Màn lột xác hoành tráng của Harley Quinn và DC
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MDBTabsPane>

                            <MDBTabsPane show={basicActive === 'tab3'}>
                                
                            </MDBTabsPane>

                            <div className={cls("text-center")}>
                                <button
                                    className={cls("btn", styles.news__button)}
                                    onClick={() => setToggleExpand(!toggleExpand)}
                                >
                                    Rút gọn
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className={cls("text-center")}>
                            <button
                                className={cls("btn", styles.news__button)}
                                onClick={() => setToggleExpand(!toggleExpand)}
                            >
                                Xem thêm
                            </button>
                        </div>
                    )
                }
            </MDBTabsContent>
        </section>
    );
}

export default News