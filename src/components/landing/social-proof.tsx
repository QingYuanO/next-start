import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    body: "The AI-powered analytics dashboard revolutionized our decision-making process. It's intuitive, fast, and provides insights we never knew we needed. Absolutely game-changing for our business!",
    author: {
      name: 'Emily Chen',
      handle: 'emilychen_tech',
      imageUrl: 'https://ui.convertfa.st/avatars/avatar-1.svg',
    },
  },
  {
    body: "I was skeptical about AI tools, but this platform changed my mind. The natural language processing capabilities are remarkable. It's like having a brilliant assistant always at your fingertips.",
    author: {
      name: 'Marcus Johnson',
      handle: 'marcusj_ai',
      imageUrl: 'https://ui.convertfa.st/avatars/avatar-2.svg',
    },
  },
  {
    body: "As a small business owner, I thought advanced AI was out of reach. This solution proved me wrong. It's affordable, scalable, and has dramatically improved our customer service efficiency.",
    author: {
      name: 'Sarah Thompson',
      handle: 'sarahT_biz',
      imageUrl: 'https://ui.convertfa.st/avatars/avatar-3.svg',
    },
  },
];

type Testimonial = {
  body: string;
  author: {
    name: string;
    handle: string;
    imageUrl: string;
  };
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="my-4">
    <CardContent className="pt-6">
      <blockquote>
        <p>&quot;{testimonial.body}&quot;</p>
      </blockquote>
      <div className="mt-6 flex items-center gap-x-4">
        <Avatar>
          <AvatarImage src={testimonial.author.imageUrl} alt={testimonial.author.name} />
          <AvatarFallback>{testimonial.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold">{testimonial.author.name}</div>
          <div className="text-zinc-600">@{testimonial.author.handle}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsGrid = ({ testimonials }: { testimonials: Testimonial[] }) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {testimonials.map(testimonial => (
      <TestimonialCard key={testimonial.author.handle} testimonial={testimonial} />
    ))}
  </div>
);

export function SocialProof() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="my-8 text-center">
          <div className="text-sm font-semibold uppercase tracking-wide">Social Proof</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Hear from Our Customers</h2>
        </div>
        <TestimonialsGrid testimonials={testimonials} />
      </div>
    </div>
  );
}
