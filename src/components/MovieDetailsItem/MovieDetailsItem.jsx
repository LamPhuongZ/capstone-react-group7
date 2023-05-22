import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router";
import styles from "./movieDetailsItem.module.scss";
import ReactPlayer from "react-player";
import cls from "classnames";

function MovieDetailsItem({ movieItem }) {
  const navigator = useNavigate();
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <div
      className={cls("card shadow-sm w-100", styles.movieDetails__group)}
      style={{ minHeight: 225 }}
    >
      <div className="card-body">
        <div className={styles.movieDetails__item}>
          <LazyLoadImage
            className="img-fluid"
            src={movieItem.hinhAnh}
            alt={movieItem.maPhim}
          />
          <div
            className={styles.movieDetails__trailer}
            onClick={() => setShowTrailer(true)}
          >
            <a href="#" data-lity>
              <i className="fa fa-play" />
            </a>
          </div>

          <div className={styles.movieDetails__title}>
            <p className={styles.movieName}>{movieItem.tenPhim}</p>
            <p className={cls("card-text", styles.describe)}>
              {movieItem.moTa}
            </p>
          </div>
        </div>
        {showTrailer && movieItem.trailer && (
          <div
            className={styles.trailerPopup}
            onClick={() => setShowTrailer(false)}
          >
            <div className={styles.trailerContainer}>
              <ReactPlayer url={movieItem.trailer} playing={true} />
            </div>
          </div>
        )}
      </div>
      <div className={cls("card-footer", styles.movieDetails__button)}>
        <button
          className="btn mt-2"
          onClick={() => navigator(`/details/${movieItem.maPhim}`)}
        >
          Mua vé
        </button>
      </div>
    </div>
  );
}

export default MovieDetailsItem;
