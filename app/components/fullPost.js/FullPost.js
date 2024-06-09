'use client'
import Link from 'next/link'
import styles from './fullPost.module.css'

import { apiFake } from '@/app/ApiFake/apiFake'

const FullPost = ({ parametrs }) => {

    let oneNews = apiFake[parametrs.id - 1];

    return (
        <div className={styles.pageNews}>
            <Link href="http://localhost:3000" className={styles.backBtn}>Назад</Link>
            <h1 className={styles.newsTitle}>{oneNews.webTitle}</h1>
            <div className={styles.newsInfo}>
                <p className={styles.newsDate}>{oneNews.webPublicationDate}</p>
                <a href={oneNews.guardianUrl} className={styles.linkGuardian}>read on Guardian</a>
            </div>
            <div className={styles.newsInfoMain}>
                <img className={styles.mainImg} src={oneNews.imageUrl} />

                <div className={styles.mainContent}>
                    <h1 className={styles.mainTitle}>{oneNews.postTitle}</h1>
                    <p className={styles.mainText}>{oneNews.postText}</p>
                </div>


            </div>
        </div>
    )
}

export default FullPost
