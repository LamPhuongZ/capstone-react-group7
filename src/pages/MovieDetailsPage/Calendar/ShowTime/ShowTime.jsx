import React, { useState, useEffect } from "react";
import styles from "./showTime.module.scss";
import cls from "classnames";
import { Link } from "react-router-dom";
import { format } from "date-fns";

function ShowTime({ cineId, timeDate }) {
  const cineSelected = timeDate.filter((item) => {
    return item.maHeThongRap === cineId;
  });

  if (!cineSelected.length) {
    return (
      <div className={styles.showTimeTitle}>
        <div>Hiện chưa có suất chiếu, vui lòng chọn rạp khác</div>
      </div>
    );
  }

  return (
    <div className="py-3">
      {cineSelected.map((item) => {
        return item.cumRapChieu.map((cumRap) => {
          return (
            <div key={cumRap.maCumRap} className="mb-5">
              <h3 className={styles.title}>{cumRap.tenCumRap}</h3>
              {/* Lich chieu phim */}
              <div className={cls("d-flex row w-100", styles.row)}>
                {cumRap.lichChieuPhim.map((value) => {
                  return (
                    <div key={value.maLichChieu} className={cls("col-3")}>
                      <Link
                        className={styles.showTime}
                        to={`/booking/${value.maLichChieu}`}
                      >
                        <span className="text-success fw-bold">
                          {format(
                            new Date(value.ngayChieuGioChieu || Date.now()),
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
          );
        });
      })}
    </div>
  );
}

export default ShowTime;
