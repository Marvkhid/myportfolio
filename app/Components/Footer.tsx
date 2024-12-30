import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="py-8 bg-neutral-100 text-neutral-100">
      <Container>
        <div className="text-center space-y-6">
          {/* Custom Message */}
          <p className="text-lg font-semibold text-green-400">
            &quot;Creating meaningful solutions, one line of code at a time.&quot;
          </p>

          {/* Newsletter Subscription */}
          <div className="space-y-2">
            <p className="text-sm text-neutral-400">Subscribe to my newsletter for updates:</p>
            <form className="flex justify-center items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md w-64 bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/Marvkhid" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://github.com/Markhid" target="_blank" rel="noopener noreferrer">
              <img src="/github.png" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/Marv_Khid" target="_blank" rel="noopener noreferrer">
              <img src="/twitter4.png" alt="Twitter" className="w-6 h-6" />
            </a>
          </div>

          {/* Footer Bottom Text */}
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Marvel. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
