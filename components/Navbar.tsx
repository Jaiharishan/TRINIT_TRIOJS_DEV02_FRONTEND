import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-2 py-6 bg-gray-900  border-b border-gray-600 fixed top-0 left-0 w-full">
        <div className="font-bold text-2xl text-white">TrioJS</div>
        <div className="rounded-full w-10 h-10 bg-blue-600"></div>
      </div>
    </>
  );
};

export default Navbar;
