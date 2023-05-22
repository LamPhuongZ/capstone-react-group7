import React from "react";
import styles from "./formOutlet.module.scss";

function FormOutlet(props) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.box}>{props.children}</div>
    </div>
  );
}

export default FormOutlet;
