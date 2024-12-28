import React from 'react';

const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id: string }) => {
  return (
    <section className={`py-8 md:py-16 ${className}`} id={id}>
      {children}
    </section>
  );
};

export default Section;
