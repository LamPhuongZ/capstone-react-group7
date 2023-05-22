import React, { memo } from "react";
import styles from "./movieList.module.scss";
import cls from "classnames";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MovieList({ complexCineId, movieList }) {
  const movieListFilter = movieList[0]?.lstCumRap.filter(
    (item) => item.maCumRap === complexCineId
  );
  return (
    <div>
      <div className={cls("py-3", styles.film__list)}>
        {movieListFilter?.map((item) => {
          return item.danhSachPhim.map((film) => {
            {
              /* Lich chieu phim */
            }
            return (
              <>
                <div key={film.maPhim} className={cls("my-3", styles.film__content)}>
                  <div className={cls("img-fluid", styles.film__img)}>
                    <LazyLoadImage src={film.hinhAnh} alt={item.maPhim} />
                  </div>

                  <div className={cls("mx-2", styles.showTime__content)}>
                    <h5>{film.tenPhim}</h5>
                    <div className={styles.showTime__box}>
                      {film.lstLichChieuTheoPhim.map((value) => {
                        return (
                          <div key={value.maLichChieu}>
                            <Link
                              className={styles.showTime}
                              to={`/booking/${value.maLichChieu}`}
                            >
                              <span className="text-success fw-bold">
                                {format(
                                  new Date(
                                    value.ngayChieuGioChieu || Date.now()
                                  ),
                                  "dd-MM-yyyy"
                                )}
                              </span>
                              <span className="text-danger fw-bold ">
                                {format(
                                  new Date(value.ngayChieuGioChieu),
                                  " ~ hh:mm"
                                )}
                              </span>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          });
        })}
      </div>
    </div>
  );
}

export default memo(MovieList);
