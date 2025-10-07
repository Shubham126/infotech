'use client';

import Image from 'next/image';
import Link from 'next/link';
import girl from '../../../public/girl.png';
import rating from '../../../public/rating.png';
import created from '../../../public/hat.png';
import underline from '../../../public/underline.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-y-12 px-4 pt-12 md:grid-cols-12 md:gap-x-8 md:px-6 md:pt-20 lg:pt-24">
        
        {/* Left Section */}
        <div className="relative md:col-span-6 lg:col-span-6">
          <div className="relative inline-block max-w-[640px] pb-12 md:pb-20 lg:pb-24">
            <div aria-hidden className="hero-grid absolute inset-0" />

            <h1 className="relative z-10 text-[64px] font-bold leading-tight tracking-[-0.02em] text-neutral-950">
              <span className="block">Your Resume</span>
              <span className="relative mt-1 inline-block">
                <span className="text-rose-600">Deserves A Yes</span> Let's
                <Image
                  src={underline}
                  alt="underline accent"
                  width={363}
                  height={17}
                  className="pointer-events-none absolute left-0 -bottom-2.5 w-[63%] max-w-[520px] select-none"
                  priority
                />
              </span>
              <span className="block mt-1"> Make It Happen</span>
            </h1>

            <p className="relative z-10 mt-5 max-w-md text-base font-normal leading-[39px] text-neutral-900">
              If Your Resume Isn't Getting Responses, It's Time For An Upgrade. Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land More Interviews. Our Resumes Are Designed To Get Your Foot In The Door And Place Your Name At The Top Of The Shortlist.
            </p>

            <div className="relative z-10 mt-7 flex items-center gap-4">
              <Link
                href="#packages"
                className="rounded-full border border-rose-300 bg-white px-4 py-2 text-sm font-medium text-rose-600 shadow-sm hover:border-rose-400 hover:shadow"
              >
                RESUME PACKAGES
              </Link>
              <Link
                href="#contact"
                className="rounded-full bg-rose-600 px-5 py-2.5 text-sm font-medium text-white shadow-[0_6px_20px_rgba(244,63,94,0.35)] hover:bg-rose-700"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative md:col-span-6 lg:col-span-6">
          {/* Ring perfectly centered behind girl */}
          <div
            className="hero-rings absolute left-1/2 top-1/2 z-0 -translate-x-[41%] -translate-y-[52%]"
            aria-hidden="true"
          />

          <div className="relative z-10 ml-auto max-w-[420px] sm:max-w-[440px] md:-mt-8 md:max-w-[460px] lg:-mt-12 lg:max-w-[500px]">
            <Image
              src={girl}
              alt="Smiling student holding notebook"
              width={633}
              height={727}
              className="h-auto w-full"
              priority
            />

            {/* Rating badge — shifted further left */}
            <div className="absolute left-0 top-[54%] w-[58%] max-w-[280px] translate-x-10 translate-y-5 sm:-translate-x-16">
              <Image
                src={rating}
                alt="4.9 Instructor Rating"
                width={350}
                height={117}
                className="h-auto w-full drop-shadow-md"
              />
            </div>

            {/* Created badge */}
            <div className="absolute bottom-4 right-4 w-[52%] max-w-[300px] translate-x-10 -translate-y-10 sm:bottom-6 sm:right-6">
              <Image
                src={created}
                alt="260+ Online Resume Created"
                width={270}
                height={133}
                className="h-auto w-full drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
