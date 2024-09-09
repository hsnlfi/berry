import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="flex justify-around">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/about" className="text-white">About</Link>
        <Link to="/contact" className="text-white">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;