import React, { useRef } from 'react'
import styles from './Search.module.css'
import { useAppDispatch, useAppSelector } from '@/app/GlobalRedux/utils/hooks'
import { addItems, addSearch, addSort} from '@/app/GlobalRedux/utils/searchRedux/searchSlice';



const Search = () => {
    const dispatch = useAppDispatch();

    const inputSearch = useRef(null);
    const selectSort = useRef(null);
    const selectItems = useRef(null);
    return (
        <div>
            <form className={styles.searchBlock}>
                <div className={styles.upSearch}>
                    <input ref={inputSearch} className={`${styles.field} ${styles.searchInput}`} placeholder="Search..." />
                    <button type="button" onClick={(e) => {
                        // dispatch(addSearch(inputSearch.current.value))
                        // dispatch(addSort(selectSort.current.value))
                        // dispatch(addItems(selectItems.current.value))
                        console.log(selectItems.current.value)
                        console.log(selectSort.current.value)
                        console.log(inputSearch.current.value)
                        
                        
                    }}
                        className={`${styles.field} ${styles.searchBtn}`}>Find</button>
                </div>

                <div className={styles.downSearch}>
                    <select ref={selectSort} className={`${styles.field} ${styles.searchSelect}`}>
                        <option >sort by relevance</option>
                        <option>sort by newest</option>
                    </select>
                    <label className={styles.searchLabel}>Items on page
                        <select ref={selectItems} className={`${styles.field} ${styles.searchSelect}`}>
                            <option>6</option>
                            <option>12</option>
                        </select>
                    </label>

                </div>
            </form>
        </div>
    )
}

export default Search
