import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js 13!</a>
      </h1>

      <div className={styles.grid}>
        <Link href="/blog" className={styles.card}>
          <h2>Blog (SSG) </h2>
          <p>Here are Blogs with SSG when build</p>
        </Link>
      </div>
    </main>
  );
}
