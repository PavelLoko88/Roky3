import Image from "next/image";
import styles from "./page.module.css";
import Search from "./components/Search/Search";
import Posts from "./components/Posts/Posts";


export default function Home() {
  return (

    <div className={styles.home}>
      <Search />
      <Posts />
    </div>
  );
}
