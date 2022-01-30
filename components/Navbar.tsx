import React from "react";
import Link from "next/link";
import { ProfileDropDown } from ".";
const Navbar = ({ user }: any) => {
  return (
    <>
      <div className="flex items-center justify-between px-2 py-6 bg-gray-900  border-b border-gray-600 fixed top-0 left-0 w-full">
        <Link href="/">
          <a>
            <div className="font-bold text-2xl text-white">TrioJS</div>
          </a>
        </Link>
        <Link href="/profile">
          <a>
            <ProfileDropDown user={user} />
          </a>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
