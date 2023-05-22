import React from "react";
import styles from "./seat.module.scss";
import cls from "classnames";

function Seat({
  maGhe,
  tenGhe,
  loaiGhe,
  giaVe,
  daDat,
  onAddToCart,
  cart,
  removeToCart,
}) {
  const isSelected = cart.find((item) => item.maGhe === maGhe);
  if (isSelected) {
    return (
      <button
        onClick={() => removeToCart(maGhe)}
        className={cls("btn btn-success", styles.seatCommon)}
      >
        {tenGhe}
      </button>
    );
  }

  if (daDat) {
    return (
      <button
        className={cls("btn", styles.seatCommon, styles.seatSoldOut)}
        disabled
      >
        sold
      </button>
    );
  }
  return (
    <button
      onClick={() =>
        onAddToCart({
          tenGhe,
          maGhe,
          giaVe,
        })
      }
      className={cls(
        "btn",
        styles.seatCommon,
        loaiGhe === "Vip" ? styles.seatVip : styles.seatDefault
      )}
    >
      {tenGhe}
    </button>
  );
}

export default Seat;
