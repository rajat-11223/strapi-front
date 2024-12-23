// pages/index.tsx
import { GetStaticProps } from 'next';
import WhyChooseUs from '@/components/whyChooseUs';
import { getWhyChooseUsContent } from '@/utils/api';

interface WhyChooseUsData {
  title: string;
  subtitle: string;
  expertImage: {
    url: string, 
    formats: {
      medium: {
        url: string;
      };
    };
  };
  features: Array<{
    id: number;
    title: string;
    description: string;
    order: number;
  }>;
}

interface HomePageProps {
  whyChooseUsData: WhyChooseUsData;
}

export default function HomePage({ whyChooseUsData }: HomePageProps) {
  console.log(process.env.STRAPI_API_URL, "STRAPI_API_URLSTRAPI_API_URL", process.env)
  console.log(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${whyChooseUsData.expertImage.formats?.medium?.url || whyChooseUsData.expertImage.url}`, "lkjlkjlkjlkjlkj")
  return (
    <main>
      <WhyChooseUs
        title={whyChooseUsData.title}
        subtitle={whyChooseUsData.subtitle}
        features={whyChooseUsData.features}
        expertImage={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${whyChooseUsData.expertImage.formats?.medium?.url || whyChooseUsData.expertImage.url}`}
      />
    </main>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    const whyChooseUsData = await getWhyChooseUsContent();
    return {
      props: {
        whyChooseUsData,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching Why Choose Us content:', error);
    return {
      notFound: true,
    };
  }
};

