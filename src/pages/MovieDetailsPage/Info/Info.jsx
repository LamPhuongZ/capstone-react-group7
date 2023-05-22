import React, { useState } from "react";
import styles from "./info.module.scss";
import cls from "classnames";
import { infoMovie } from "../../../Redux/Services/detailsMovieAPI";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { format } from "date-fns";
import ReactPlayer from "react-player";

function Info() {
  const [details, setDetails] = useState({
    tenPhim: "",
    hinhAnh: "",
    moTa: "",
    trailer: "",
    ngayKhoiChieu: "",
    danhGia: 0,
  });
  const [showTrailer, setShowTrailer] = useState(false);

  const params = useParams();

  const getDetails = async () => {
    try {
      const response = await infoMovie(params.movieId);
      setDetails({
        tenPhim: response.tenPhim,
        hinhAnh: response.hinhAnh,
        moTa: response.moTa,
        trailer: response.trailer,
        ngayKhoiChieu: response.ngayKhoiChieu,
        danhGia: response.danhGia,
      });
    } catch (error) {
      toast.error("Không lấy được thông tin phim");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getDetails();
  }, []);

  return (
    <div className={styles.container}>
      <div className="d-flex row justify-content-between">
        <div className={cls("col-4")}>
          <img src={details.hinhAnh} width={"100%"} />
        </div>
        <div className="col-8 m-auto">
          <div className={styles.text}>
            <p>{details.tenPhim}</p>
            <p>{details.moTa}</p>
            <p>
              {format(
                new Date(details.ngayKhoiChieu || Date.now()),
                "dd.MM.yyyy"
              )}
            </p>
          </div>
          <button
            className={styles.trailer}
            onClick={() => setShowTrailer(true)}
          >
            Trailer
          </button>
          {showTrailer && details.trailer && (
            <div
              className={styles.trailerPopup}
              onClick={() => setShowTrailer(false)}
            >
              <div className={styles.trailerContainer}>
                <ReactPlayer url={details.trailer} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <div className={styles.score}>{details.danhGia}</div>
        <div className={styles.gapIcon}>
          <span>
            <i class={cls("fa fa-star", styles.icon)}></i>
          </span>
          <span>
            <i class={cls("fa fa-star", styles.icon)}></i>
          </span>
          <span>
            <i class={cls("fa fa-star", styles.icon)}></i>
          </span>
          <span>
            <i class={cls("fa fa-star", styles.icon)}></i>
          </span>
          <span>
            <i class={cls("fa fa-star", styles.icon)}></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Info;
