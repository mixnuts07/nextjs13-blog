import { GetJsonPlaceholder } from "@/src/lib/GetJsonPlaceholder";
import styles from "../page.module.css";
import Link from "next/link";

async function page() {
  const posts = await GetJsonPlaceholder();
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Blog List</h1>
      <div className={styles.grid}>
        {posts.map(({ id, title }) => (
          <Link key={id} href={`/blog/${id}`} className={styles.card}>
            <div>{title}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default page;
