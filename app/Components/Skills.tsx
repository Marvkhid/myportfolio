import React from 'react'
import Image from 'next/image'
import Section from './Section'
import Container from './Container'

const Skills = () => {
  const skills = [
    { imageSrc: '/js.png', name: 'JavaScript' },
    { imageSrc: '/ts.png', name: 'TypeScript' },
    { imageSrc: '/react.png', name: 'React' },
    { imageSrc: '/next.png', name: 'NextJs' },
    { imageSrc: '/github.png', name: 'GitHub' },
  ];

  return (
    <Section id='skills'>
      <Container className='lg:max-w-6xl'>
      <h3 className="mb-8 text-green-500 text-center font-bold text-3xl md:text-4xl">
          Skills
        </h3>
        <div className='grid grid-cols-3 md:grid-cols-6 gap-8'>
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2">
              <Image 
                src={skill.imageSrc} 
                alt={skill.name} 
                width={84} 
                height={84} 
              />
              <p className='font-bold text-xl text-neutral-700 text-center'>{skill.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Skills
