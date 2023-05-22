import React from "react";
import styles from "./cineName.module.scss";

function CineName({ item, updateCineIdSelected }) {
  return (
    <div className={styles.logo}>
      <img
        src={item.logo}
        alt={item.biDanh}
        onClick={() => updateCineIdSelected(item.maHeThongRap)}
      />
    </div>
  );
}

export default CineName;
