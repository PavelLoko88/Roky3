import React from 'react'
import styles from './Post.module.css'
import Link from 'next/link'

const Post = ({ postContent }) => {

    function converDate(dates) {
        const date = new Date(dates);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    }

    return (
        <div className={styles.post}>
            <img className={styles.postImage} src={postContent.imageUrl} />
            <div className={styles.postContent}>
                <p className={styles.postDate}>{converDate(new Date(postContent.webPublicationDate))}</p>
                <h3 className={styles.postTitle}>{postContent.webTitle}</h3>
                <Link test={postContent.webTitle} href={`/pagenews/${postContent.id}`} className={styles.postBtn}> Details</Link>
            </div>

        </div>

    )
}

export default Post
