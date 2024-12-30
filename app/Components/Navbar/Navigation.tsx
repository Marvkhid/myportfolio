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

  // Toggle the state when the hamburger is clicked
  const toggleMenu = () => {
    console.log("Menu toggled:", !isOpen);  // Debugging: Check state toggle
    setIsOpen((prev) => !prev);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    console.log("Closing menu...");  // Debugging: Log when menu closes
    setIsOpen(false);
  };

  return (
    <Container>
      <div className="flex justify-between items-center py-4">
      
        <Logo />

        {/* Desktop Links (Hidden on mobile, visible on larger screens) */}
        <div className="hidden md:flex space-x-8">
          <Links />
        </div>

        {/* Hamburger Menu Button (Visible only on mobile) */}
        <Button onClick={toggleMenu} className="md:hidden">
          {isOpen ? (
            <CgClose size="24" className="text-black" /> // Show close button when open
          ) : (
            <CiMenuBurger size="24" className="text-black" /> // Show burger when closed
          )}
        </Button>
      </div>

      {/* Mobile Menu (Only visible when isOpen is true) */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10 p-6">
          <Links isVertical onClick={closeMenu} />
        </nav>
      )}
    </Container>
  );
};

export default Navigation;
