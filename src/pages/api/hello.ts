// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}

export async function getWhyChooseUsContent() {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/why-choose-us?populate=*`,
    // {
    //   headers: {
    //     Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    //   },
    // }
  );
  console.log(response)
  if (!response.ok) {
    throw new Error('Failed to fetch Why Choose Us content');
  }

  const data = await response.json();
  return data.data.attributes;
}