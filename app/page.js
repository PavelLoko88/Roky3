'use client'
import styles from "./page.module.css";
import Search from "./components/Search/Search";
import Posts from "./components/Posts/Posts";



function Home() {

  return (
    <div className={styles.home}>
      <Search />
      <Posts />
    </div>
  );
}



export default Home