import React, { useState } from "react";
import { createPopper } from "@popperjs/core";
import { LogoutIcon } from "@heroicons/react/solid";
import Link from "next/link";
const Dropdown = ({ color, user }: any) => {
  console.log(user);
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className="rounded-full w-10 h-10"
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {user.profilePic ? (
                <img
                  className=" w-10 h-10 rounded-full object-cover"
                  src={`http://localhost:4000${user.profilePic}`}
                  alt=""
                />
              ) : (
                <div className="rounded-full w-10 h-10 bg-blue-600"></div>
              )}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <Link href="/profile">
                <a
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent border-b border-gray-300 hover:bg-gray-100 transition duration-200" +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  <p>My Profile</p>
                </a>
              </Link>

              <Link href="/">
                <a
                  className={
                    "text-sm py-2 px-3 font-normal w-full whitespace-nowrap bg-transparent flex items-center gap-2 hover:bg-gray-100 transition duration-200" +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  <LogoutIcon className="w-4 h-4" />
                  Logout
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function ProfileDropDown({ user }: any) {
  return (
    <>
      <Dropdown color="white" user={user} />
    </>
  );
}
