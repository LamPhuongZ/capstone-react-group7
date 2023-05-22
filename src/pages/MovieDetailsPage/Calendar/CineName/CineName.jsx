import React, { useState } from "react";
import styles from "./cineName.module.scss";
import { cineName } from "../../../../Redux/Services/cineNameAPI";

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
