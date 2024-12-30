import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import { Links } from './Links';

export const NavDesktop = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Links />
        </div>
      </div>
    </Container>
  );
};
