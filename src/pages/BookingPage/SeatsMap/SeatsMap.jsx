import React from "react";
import Seat from "../Seat/Seat";
import styles from "./seatsMap.module.scss";
import cls from "classnames";

function SeatsMap({ seats, onAddToCart, cart, removeToCart }) {
  return (
    <div>
      <h4 className={styles.title}>Vui Lòng Chọn Ghế</h4>
      <div className={cls("row", styles.seatRow)}>
        {seats.map((item, index) => {
          return (
            <div className={cls("col-1", styles.seatItem)} key={item.maGhe}>
              <Seat
                cart={cart}
                removeToCart={removeToCart}
                onAddToCart={onAddToCart}
                tenGhe={item.tenGhe}
                maGhe={item.maGhe}
                loaiGhe={item.loaiGhe}
                giaVe={item.giaVe}
                daDat={item.daDat}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SeatsMap;
