import React from 'react';
import Section from './Section';
import Container from './Container';
import Image from 'next/image';

const experiences = [
  {
    image: '/colonbroom.png',
    title: 'Frontend Developer',
    company: 'Tech Solutions',
    description: 'Developed responsive and accessible web applications.',
    bulletList: [
      'Built responsive user interfaces with React.js',
      'Optimized performance and accessibility',
      'Collaborated with backend developers for API integration',
    ],
    date: 'May 2023 - Dec 2024',
  },
  {
    image: '/Amazon_logo.svg',
    title: 'Frontend Developer',
    company: 'Personal Project - Amazon Clone',
    description: 'Developed a fully functional Amazon e-commerce clone using React.',
    bulletList: [
      'Built dynamic user interfaces with React and Redux',
      'Implemented product filtering, cart functionality, and checkout process',
      'Integrated Firebase for user authentication and real-time database',
      'Ensured responsive design and seamless user experience',
    ],
    date: 'Jul 2023 - Sep 2023',
  },
  {
    image: '/stachy.png',
    title: 'Frontend Developer',
    company: 'Creative Agency',
    description: 'Crafted interactive websites and web applications.',
    bulletList: [
      'Developed custom animations using JavaScript',
      'Implemented reusable components with TypeScript',
      'Collaborated with the design team to maintain brand consistency',
    ],
    date: 'Feb 2022 - Dec 2023',
  },
  {
    image: '/blog.jpeg',
    title: 'Frontend Developer',
    company: 'BlogSphere Inc.',
    description: 'Developed a modern and feature-rich blogging platform.',
    bulletList: [
      'Designed and implemented dynamic blog pages with React and Next.js',
      'Integrated a content management system (CMS) for easy publishing',
      'Optimized SEO and performance for improved search visibility',
    ],
    date: 'Jan 2024 - Feb 2024',
  },
];

const Experience = () => {
  return (
    <Section id='experience' className='bg-neutral-950 text-white'>
      <Container className='lg:max-w-6xl'>
        <div className='text-center mb-8 text-white'>
          <h2 className='text-green-500 font-bold text-2xl md:text-3xl mb-4'>Experiences</h2>
          <p className='text-neutral-400 text-lg'>
            Here is a quick summary of my most recent experience.
          </p>
        </div>
        <div className='space-y-6'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='grid grid-cols-1 md:grid-cols-[30%_50%_20%] items-center bg-white rounded-lg shadow-lg gap-6 border-2 border-green-500 p-6'
            >
              {/* Image Section */}
              <div className='flex items-center justify-center'>
                <Image
                  src={exp.image}
                  alt={exp.title}
                  width={120}
                  height={120}
                  className='rounded-lg'
                />
              </div>

              {/* Content Section */}
              <div className='col-span-2'>
                <h4 className='text-lg font-bold text-neutral-800 mb-2'>{exp.title}</h4>
                <p className='text-sm text-neutral-600 mb-4'>{exp.company}</p>
                <ul className='list-disc list-inside space-y-2'>
                  {exp.bulletList.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className='text-neutral-700'>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Date Section */}
              <div className='col-span-3 md:col-span-1 text-right text-neutral-500'>
                <p>{exp.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Experience;
