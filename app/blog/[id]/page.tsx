import React from "react";

type paramsType = {
  id: string;
};
// https://beta.nextjs.org/docs/api-reference/generate-static-params
export async function generateStaticParams(): Promise<paramsType[]> {
  return [{ id: "1" }, { id: "2" }];
}

function page({ params }: { params: paramsType }) {
  return <div>blog articles:: {params.id}</div>;
}

export default page;
// idが1,2以外は404を返す
export const dynamicParams = false;
