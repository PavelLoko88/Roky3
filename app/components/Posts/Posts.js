import React from 'react'
import styles from './Posts.module.css'
import { apiFake, } from '@/app/ApiFake/apiFake'
import Post from '../Post/Post'
import { useAppSelector } from '@/app/GlobalRedux/utils/hooks'
import { sortApiFake } from '@/app/ApiFake/newApiFake'

const Posts = () => {


    let sort = useAppSelector((state) => state.search.sort)
  
    return (
        <div className={styles.postBlock}>

            {/* {sort !== "sort by newest" ? apiFake.map((el) => (

                <Post key={el.id} postContent={el} />

            )) : sortApiFake.map((el) => (
                <Post key={el.id} postContent={el} />
            ))} */}

            {sortApiFake.map((el) => (

                <Post key={el.id} postContent={el} />

            ))}


        </div>
    )
}

export default Posts
