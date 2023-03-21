import styles from "../../page.module.css";
import { GetJsonPlaceholder, getPost } from "@/src/lib/GetJsonPlaceholder";

type paramsType = {
  id: string;
};

// https://beta.nextjs.org/docs/api-reference/generate-static-params
export async function generateStaticParams(): Promise<paramsType[]> {
  const posts = await GetJsonPlaceholder();
  return posts.map((post) => ({ id: post.id.toString() }));
}

async function page({ params }: { params: paramsType }) {
  const { title, body } = await getPost(params.id);
  const bodys = body.split("\n");
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.article}>
        {bodys.map((body, index) => (
          <p key={index}>{body}</p>
        ))}
      </div>
    </main>
  );
}

export default page;
// idが1,2以外は404を返す
export const dynamicParams = false;
