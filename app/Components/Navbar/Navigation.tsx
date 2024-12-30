"use client";

import React, { useState } from "react";
import Container from "../Container";
import Button from "./Button";
import Logo from "./Logo";
import { CgClose } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import { Links } from "./Links";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <Logo />

        {/* Hamburger Button (for mobile) */}
        <Button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <CgClose size="24" /> : <CiMenuBurger size="24" />}
        </Button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Links />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10 p-6">
          <Links isVertical onClick={closeMenu} />
        </nav>
      )}
    </Container>
  );
};

export default Navigation;
