import React from 'react'
import styles from "./sampleNextArrow.module.scss";


function SampleNextArrow({ onClick }) {
    return (
        <div className={styles.control__btn} onClick={onClick}>
            <button className={styles.next}>
                <i className='fa fa-chevron-right'></i>
            </button>
        </div>
    )
}

export default SampleNextArrow