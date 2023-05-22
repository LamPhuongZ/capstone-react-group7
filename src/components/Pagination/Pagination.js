import React from 'react'
import styles from './pagegination.module.scss'

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
    const pages = [];

    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pages.push(index);
    }
    return (
        <div className={styles.pagination}>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        className={page === currentPage ? `${styles.active}` : ''}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}

                    </button>
                )
            })}
        </div>
    )
}

export default Pagination