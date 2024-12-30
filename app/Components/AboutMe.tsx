import React from 'react';
import Image from 'next/image';
import Section from './Section';
import Container from './Container';
import SocialMediaLink from './SocialMediaLink';

const AboutMe = () => {
  return (
    <Section id="about" className="bg-neutral-950 text-white">
      <Container className="lg:max-w-6xl">
        <h3 className="mb-8 text-green-500 text-center font-bold text-3xl md:text-4xl">
          About Me
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Content Section */}
          <div className="relative z-10">
            <p className="text-lg md:text-xl font-semibold leading-relaxed tracking-wide">
              I am a <b>Frontend Developer</b> with a passion for building
              interactive and accessible web applications. With years of
              experience, I focus on crafting <b>meaningful solutions</b> that
              meet user needs and offer seamless user experiences. My work is a
              blend of creativity, attention to detail, and technical skills.
              <br />
              <br />
              When I&apos;m not coding, I enjoy exploring new technologies,
              sharing ideas, and learning to improve my craft. Let&apos;s connect and build
              something amazing!
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-full h-full top-4 left-4 rounded-lg bg-green-500 z-[-1] hidden lg:block"></div>

            <Image
              src="/ankara.jpg"
              alt="About Me"
              width={500}
              height={200}
              className="rounded-lg relative z-10 border-8 border-white"
            />
          </div>
        </div>

        <h2 className="mb-4 font-extrabold">Get some insights into my Life</h2>
        <p>
          <b>Programming is a big part of my life for past 2 years.</b>
          I strongly lean into Front end engineering for now.
          <br />
          <br />
          <b>Although transitioning and learning tech has been quite tasking</b>
          <br />
          <br />
          but I never relented... This has made me realize that I can catch up with new things really fast.
          <br />
          <br />
          As a result, the next thing I learnt was <b>React and Next</b>
          <br />
          <br />
          This powerful tool has been quite useful for me in developing websites and handling myself
          <b>greater opportunities to come</b>
          I hope to still be better as I get hooked with more job opportunities
          Looking forward to widening my skills
          <br />
          <br />
          Who knows ... We could both become the next <b>BIG THING</b>
        </p>

        <div className="flex items-center md:justify-start gap-4 mt-8">
          <div className="flex items-center gap-4">
            <SocialMediaLink src="/linkedin.png" hasBg />
            <SocialMediaLink src="/youtube.png" hasBg />
            <SocialMediaLink src="/github.png" hasBg />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutMe;
