import React from "react";

const OrgCard = () => {
  return (
    <div>
      <div className="rounded-lg mt-6 w-64 h-64 border-2 border-gray-600 flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-blue-600 rounded-full"></div>

        <div className="text-white text-2xl mt-4">Organization</div>
        <div className="text-white text-lg">Jai</div>

        <div className="text-gray-300 text-md">30 members</div>
        <div className="text-gray-300 text-md">40 bugs</div>
      </div>
    </div>
  );
};

export default OrgCard;
