export async function getWhyChooseUsContent() {
  if (!process.env.STRAPI_API_URL) {
    throw new Error('STRAPI_API_URL is not defined');
  }

  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/why-choose-us?populate=*`,
    // {
    //   headers: {
    //     Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    //   },
    // }
  );
//   console.log('responseee',response)
  if (!response.ok) {
    throw new Error(`Failed to fetch Why Choose Us content: ${response.statusText}`);
  }

  const data = await response.json();
  console.log(data)
  return data;
} 