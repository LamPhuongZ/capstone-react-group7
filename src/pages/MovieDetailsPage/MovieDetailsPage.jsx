import React from "react";
import Calendar from "./Calendar/Calendar";
import Info from "./Info/Info";
import styles from "./movieDetailsPage.module.scss";

function MovieDetailsPage() {
  return (
    <div className={styles.background}>
      <Info />
      <Calendar />
    </div>
  );
}

export default MovieDetailsPage;
