import Link from "next/link";
import styles from "./header.module.css";
export default function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link href={{ pathname: "/blog/indexBlog/" }}>Blog</Link>
        </li>

        <li className={styles.item}>
          <Link href="users/indexUser/">User</Link>
        </li>
      </ul>
    </header>
  );
}
