import React from 'react'
import styles from './Post.module.css'
import Link from 'next/link'

const Post = () => {
    return (

        <div className={styles.post}>
            <img className={styles.postImage}></img>
            <div className={styles.postContent}>
                <p className={styles.postDate}>24 July 2023, 11:07:40 AM</p>
                <h3 className={styles.postTitle}>Italy v Argentina</h3>


                <Link href="/pagenews/2" className={styles.postBtn}> Details</Link>



            </div>

        </div>

    )
}

export default Post
