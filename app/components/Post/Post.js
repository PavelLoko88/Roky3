import React from 'react'
import styles from './Post.module.css'
import Link from 'next/link'
import { useAppSelector } from '@/app/GlobalRedux/utils/hooks';
import { converDate } from '@/app/tool/tool';

const Post = ({ postContent }) => {



    // LIMITED ITEMS
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
