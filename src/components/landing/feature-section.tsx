import { FC } from 'react';

import { Button } from '@/components/ui/button';

interface FeatureProps {
  title: string;
  description: string;
  imageUrl: string;
  isImageLeft: boolean;
}

const Feature: FC<FeatureProps> = ({ title, description, imageUrl, isImageLeft }) => (
  <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-24">
    {isImageLeft && (
      <div className="order-1 md:order-1">
        <img className="w-full max-w-2xl rounded-xl shadow-xl ring-1 ring-gray-400/10" src={imageUrl} alt={title} />
      </div>
    )}
    <div className={`order-2 ${isImageLeft ? 'md:order-2' : 'md:order-1'}`}>
      <h3 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{title}</h3>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">{description}</p>
      <div className="mt-4">
        <Button variant="secondary">Learn more</Button>
      </div>
    </div>
    {!isImageLeft && (
      <div className="order-1 md:order-2">
        <img className="w-full max-w-2xl rounded-xl shadow-xl ring-1 ring-gray-400/10" src={imageUrl} alt={title} />
      </div>
    )}
  </div>
);

export const FeatureSection: FC = () => {
  const features: FeatureProps[] = [
    {
      title: 'Code Export and Integration',
      description: 'Export clean, optimized code that seamlessly integrates with your existing projects, saving valuable development time.',
      imageUrl: 'https://ui.convertfa.st/images/convertfast-ui-light-demo.png',
      isImageLeft: true,
    },
    {
      title: 'Responsive Design',
      description: 'Create mobile-friendly landing pages that look great on all devices, ensuring a consistent user experience.',
      imageUrl: 'https://ui.convertfa.st/images/convertfast-demo.png',
      isImageLeft: false,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">ConvertFast</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 text-primary sm:text-4xl">
          Everything you need to build landing pages
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          ConvertFast is a powerful landing page builder for developers, offering code templates and components inspired by shadcn. Create
          beautiful, functional landing pages quickly and efficiently.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-16">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};
