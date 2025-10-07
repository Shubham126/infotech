'use client';

import Image from 'next/image';
import resumeImg from '../../../public/resume.png';
import coverImg from '../../../public/cover.png';
import linkedinImg from '../../../public/linkedin.png';
import interviewImg from '../../../public/interview.png';

type FeatureCardProps = {
  title: string;
  description: string;
  imageSrc: any; // StaticImageData type
  imageAlt: string;
};

function FeatureCard({ title, description, imageSrc, imageAlt }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-xl shadow-neutral-360/80 transition-all hover:shadow-xl hover:shadow-neutral-400/70">
      <div className="mb-6 h-40 w-40 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={160}
          height={160}
          className="h-auto w-full object-contain"
        />
      </div>
      
      <h3 className="mb-4 text-center text-lg font-semibold leading-tight text-neutral-950">
        {title}
      </h3>
      
      <p className="text-center text-sm leading-relaxed text-neutral-600">
        {description}
      </p>
    </div>
  );
}

export default function Features() {
  const features = [
    {
      title: 'A Resume Format That Gets You Interviews',
      description: 'Get a professionally written, keyword-optimized resume that lands in recruiter inboxes.',
      imageSrc: resumeImg,
      imageAlt: 'Resume format illustration',
    },
    {
      title: 'A Cover Letter Style That Stands Out Strong',
      description: 'Stand out with a cover letter that speaks directly to the role and reflects your strengths.',
      imageSrc: coverImg,
      imageAlt: 'Cover letter illustration',
    },
    {
      title: 'A LinkedIn Profile That Works For You',
      description: 'Attract the right eyes, start conversations, and show up in recruiter searches.',
      imageSrc: linkedinImg,
      imageAlt: 'LinkedIn profile illustration',
    },
    {
      title: 'An Interview Strategy That Builds Confidence',
      description: 'Interview preparation with real HR professionals so you speak clearly confidently.',
      imageSrc: interviewImg,
      imageAlt: 'Interview strategy illustration',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-600 mb-4">
            What You Get
          </span>
          
          <h2 className="text-3xl font-bold leading-tight text-neutral-950 md:text-4xl lg:text-5xl">
            You're Not Just <span className="text-rose-600">Another Applicant</span> And Your
            <br className="hidden md:block" />
            Resume Shouldn't Look Like One
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
