import React from "react";

const OrgCard = ({ org }: any) => {
  return (
    <div>
      <div className="rounded-lg mt-6 w-64 h-64 border-2 border-gray-600 flex flex-col items-center justify-center hover:border-gray-400 transition duration-200">
        <div className="w-20 h-20 bg-blue-600 rounded-full"></div>

        <div className="text-white text-2xl mt-4">Organization</div>
        <div className="text-white text-lg">{org?.head}</div>

        <div className="text-gray-300 text-md">
          {org?.rank1.length + org?.rank2.length + 1} members
        </div>
        <div className="text-gray-300 text-md">{org?.bugs.length} bugs</div>
      </div>
    </div>
  );
};

export default OrgCard;
