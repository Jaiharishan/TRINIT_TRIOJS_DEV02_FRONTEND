import React from "react";

const UserCard = ({ Name, profilePic, id, rank }: any) => {
  return (
    <div className="rounded-lg mt-6 w-44 h-44 border-2 border-gray-600 flex flex-col items-center justify-center hover-style cursor-pointer">
      {profilePic ? (
        <img
          src={`http://localhost:4000${profilePic}`}
          className="w-20 h-20 rounded-full object-cover"
          alt=""
        />
      ) : (
        <div className="w-20 h-20 rounded-full bg-blue-600"></div>
      )}

      <div className="text-white mt-5 text-xl">{Name}</div>

      <div className="text-white mt-1 text-xs">{id}</div>
      <p className="text-white mt-1 text-xs">{rank}</p>
    </div>
  );
};

export default UserCard;
