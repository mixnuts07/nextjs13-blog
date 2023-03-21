export type postType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type postsType = postType[];

export async function GetJsonPlaceholder() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("occur error at getPosts");
  return response.json() as Promise<postsType>;
}

export async function getPost(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) throw new Error("occur error at getPosts");
  return response.json() as Promise<postType>;
}
