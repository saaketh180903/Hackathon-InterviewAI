import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10); // adjust this value if needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 bg-[#D9D9D9] shadow-md rounded-[15px] px-6 w-[95%]`}
    >
      <div className="flex justify-between items-center py-3">
        <h1 className="text-xl font-bold">Logo</h1>
        <ul className="flex space-x-6 font-medium">
          <li><a href="/" className="hover:text-blue-500">Home</a></li>
          <li><a href="/login" className="hover:text-blue-500">Login</a></li>
          <li><a href="/signup" className="hover:text-blue-500">SignUp</a></li>
          <li><a href="/dashboard" className="hover:text-blue-500">Dashboard</a></li>
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;
