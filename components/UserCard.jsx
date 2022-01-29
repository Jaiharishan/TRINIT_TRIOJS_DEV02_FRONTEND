import React from "react";

const UserCard = ({ Name }) => {
  return (
    <div className="rounded-lg mt-6 w-40 h-40 border-2 border-gray-600 flex flex-col items-center justify-center">
      <div className="w-20 h-20 rounded-full bg-blue-600"></div>

      <div className="text-white mt-5 text-xl">{Name}</div>
    </div>
  );
};

export default UserCard;
