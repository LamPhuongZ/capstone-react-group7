import classNames from "classnames";
import React from "react";
import styles from "./Purchase.module.scss";
import cls from "classnames";
import { useState } from "react";

function Purchase({ cart, onPurchase, removeToCart, movieDetails }) {
  const [toggleExpand, setToggleExpand] = useState(false);
  return (
    <div>
      <h4 className={styles.title}>Danh Sách Ghế Bạn Chọn</h4>
      <div className={styles.flex}>
        <div className={styles.stickDefault}></div>
        <span>Ghế Thường</span>
      </div>
      <div className={styles.flex}>
        <div className={styles.stickVip}></div>
        <span>Ghế Vip</span>
      </div>
      <div className={styles.flex}>
        <div className={styles.stickSoldOut}></div>
        <span>Ghế Đã Đặt</span>
      </div>
      <div className={styles.flex}>
        <div className={styles.stickSelected}></div>
        <span>Ghế Đang Chọn</span>
      </div>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th className={styles.colorText}>Số Ghế</th>
            <th className={styles.colorText}>Giá</th>
            <th className={styles.colorText}>Huỷ</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => (
            <tr key={item.maGhe}>
              <td className={styles.colorText}>{item.tenGhe}</td>
              <td className={styles.colorText}>
                {item.giaVe.toLocaleString()}
              </td>
              <td>
                <button
                  onClick={() => removeToCart(item.maGhe)}
                  className={styles.buttonRemove}
                >
                  Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td className={styles.colorText}>Tổng Tiền</td>
            <td className={styles.colorText}>
              {cart
                .reduce((total, item) => {
                  return (total += item.giaVe);
                }, 0)
                .toLocaleString()}
            </td>
            <td>
              <button onClick={onPurchase} className={styles.buttonPurchase}>
                Thanh Toán
              </button>
            </td>
          </tr>
        </tfoot>
      </table>

      <div className="text-center">
        <button
          className={styles.toggle}
          onClick={() => setToggleExpand(!toggleExpand)}
        >
          Xem Thêm Thông Tin Phim
        </button>
      </div>
      {toggleExpand && (
        <div className={cls("my-2", styles.colorText)}>
          <div className="d-flex justify-content-between p-3 border">
            <div>Cụm Rạp:</div>
            <div>{movieDetails.tenCumRap}</div>
          </div>
          <div className="d-flex justify-content-between p-3 border">
            <div>Địa Chỉ:</div>
            <div>{movieDetails.diaChi}</div>
          </div>
          <div className="d-flex justify-content-between p-3 border">
            <div>Rạp:</div>
            <div>{movieDetails.tenRap}</div>
          </div>
          <div className="d-flex justify-content-between p-3 border">
            <div>Tên Phim:</div>
            <div>{movieDetails.tenPhim}</div>
          </div>
          <div className="d-flex justify-content-between p-3 border">
            <div>Ngày Giờ Chiếu:</div>
            <div>
              {movieDetails.ngayChieu} - {movieDetails.gioChieu}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Purchase;
