import React from 'react'
import styles from './Posts.module.css'
import { apiFake } from '@/app/ApiFake/apiFake'
import Post from '../Post/Post'

const Posts = () => {
    return (
        <div className={styles.postBlock}>
            {apiFake.map((el) => (
                <Post key={el.id} postContent={el}/>
            ))}
        </div>
    )
}

export default Posts
