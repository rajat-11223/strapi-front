// components/WhyChooseUs/WhyChooseUs.tsx
import React from 'react';
import Image from 'next/image';

interface Feature {
  id: number;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  title: string;
  subtitle: string;
  features: Feature[];
  expertImage: string;
}

const WhyChooseUs = ({
  title,
  subtitle,
  features,
  expertImage,
}: WhyChooseUsProps) => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-wide text-red-600 mb-2">
          WHY CHOOSE US
        </h2>
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side with circular overlapping design */}
        <div className="relative">
          <div className="w-72 h-72 bg-red-600 rounded-full flex items-center justify-center p-8">
            <div className="text-white">
              <h4 className="text-xl font-semibold mb-4">Industry experts</h4>
              <p className="text-sm opacity-90">
                {features[0]?.description}
              </p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2">
            <div className="w-72 h-72 overflow-hidden rounded-full">
              <Image
                src={expertImage}
                alt="Industry Expert"
                width={288}
                height={288}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right side feature list */}
        <div className="space-y-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center bg-gray-50 rounded-lg p-4 transition-transform hover:translate-x-2"
            >
              <span className="text-red-600 mr-4">&lt;</span>
              <div>
                <h4 className="font-semibold">{feature.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;