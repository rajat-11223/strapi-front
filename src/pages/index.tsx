// pages/index.tsx
import { GetStaticProps } from 'next';
import WhyChooseUs from '@/components/whyChooseUs';
import { getWhyChooseUsContent } from '@/utils/api';

interface WhyChooseUsData {
  title: string;
  subtitle: string;
  expertImage: {
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
  return (
    <main>
      <WhyChooseUs
        title={whyChooseUsData.title}
        subtitle={whyChooseUsData.subtitle}
        features={whyChooseUsData.features}
        expertImage={whyChooseUsData.expertImage.formats.medium.url}
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

