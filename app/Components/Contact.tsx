import React from 'react';
import Section from './Section';
import Container from './Container';
import SocialMediaLink from './SocialMediaLink';

const Contact = () => {
  return (
    <Section id='contact' className="bg-neutral-950 text-white">
      <Container className="max-w-lg text-center">
        <h2 className="text-green-500 font-bold text-2xl md:text-3xl mb-4">Contact Me</h2>
        <p className="mb-8 text-neutral-400 text-lg">
          What's next? Feel free to reach out to me if you're a developer, have a query, or simply want to connect.
        </p>
        <div className="flex flex-col items-center gap-6">
          {/* Email */}
          <div className="flex items-center gap-4">
            <SocialMediaLink src="/mail.png" hasBg />
            <a href="mailto:adeniyimarv@gmail.com" className="text-lg font-medium text-neutral-300">
              adeniyimarv@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <SocialMediaLink src="/telephone.png" hasBg />
            <a href="tel:+2348107387326" className="text-lg font-medium text-neutral-300">
              +234 810 7387 326
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
