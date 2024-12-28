import React from 'react';
import Image from 'next/image';
import SocialMediaLink from './SocialMediaLink';
import Section from './Section';
import Container from './Container';

const Hero = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_24rem] items-center gap-4 md:gap-12">
          {/* Left Content */}
          <div className="order-2 md:order-1">
          <h1 className="mb-4 text-green-500 font-bold text-4xl md:text-5xl">
                          Hi, I am Aden Marvel
            </h1>
            <p className="text-neutral-700 mb-8">
              I am a <b>Frontend developer</b> with <b>2 years of experience</b>. 
              I enjoy crafting solutions that are <b>meaningful</b> and at the same time <b>challenging</b>.
              <br />
              <br />
              I am <b>open for work</b>, so feel free to reach out to me.
            </p>

            <div className="space-y-2 mb-8">
              {/* Location */}
              <div className="flex items-center gap-4">
                <Image src="/location.png" alt="location" width={24} height={24} />
                <p>Ado-Ekiti, Nigeria</p>
              </div>

              {/* Open for Work */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <p className="text-white text-xs">✔</p>
                </div>
                <p className="text-neutral-700">Open for work</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <SocialMediaLink src="/linkedin.png" />
              <SocialMediaLink src="/youtube.png" />
              <SocialMediaLink src="/github.png" />
            </div>
          </div>

          {/* Right Content */}
          <div className="relative md:order-2 order-1">
          <div className="absolute w-full h-full top-4 left-4 rounded-lg bg-green-500 z-[-1] hidden lg:block"></div>
            <Image
              src="/suit2.jpg"
              alt="hero"
              sizes="100vw"
              height={0}
              layout='responsive'
              width={0}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
