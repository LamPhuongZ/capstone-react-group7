import React from 'react'
import styles from "./samplePrevArrow.module.scss";

function SamplePrevArrow({ onClick }) {
    return (
        <div className={styles.control__btn} onClick={onClick}>
            <button className={styles.prev}>
                <i className='fa fa-chevron-left'></i>
            </button>
        </div>
    )
}

export default SamplePrevArrow