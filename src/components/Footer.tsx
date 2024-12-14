import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4 md:p-6 lg:p-8 mt-4">
      <p className="text-sm md:text-base lg:text-lg">
        &copy; {new Date().getFullYear()} Nabila Bannay Khan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
