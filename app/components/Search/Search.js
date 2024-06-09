import React from 'react'
import styles from './Search.module.css'

const Search = () => {
    return (
        <div>
            <form className={styles.searchBlock}>

                <div className={styles.upSearch}>
                    <input className={`${styles.field} ${styles.searchInput}`} placeholder="Search..." />
                    <button type="button" className={`${styles.field} ${styles.searchBtn}`}>Find</button>
                </div>

                <div className={styles.downSearch}>

                    <select className={`${styles.field} ${styles.searchSelect}`}>
                        <option>sort by relevance</option>
                        <option>sort by newest</option>
                    </select>

                    <label className={styles.searchLabel}>Items on page
                        <select className={`${styles.field} ${styles.searchSelect}`}>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                        </select>
                    </label>

                </div>
            </form>
        </div>
    )
}

export default Search
