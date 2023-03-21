import { getPost } from "@/src/lib/GetJsonPlaceholder";

type paramsType = {
  id: string;
};

async function head({ params }: { params: paramsType }) {
  const title = await getPost(params.id);
  return <title>{title}</title>;
}

export default head;
