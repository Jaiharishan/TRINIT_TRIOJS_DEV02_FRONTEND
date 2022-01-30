import React from "react";

const DiscussionCard = ({elem}) => {
  return (
    <div className="flex rounded-xl flex-col border-2 border-gray-600 lg:w-8/12">
      <div className="px-2 py-4 border-b-2 border-gray-600 text-white text-lg flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-blue-600">
          <img src={`http://localhost:4000/${elem.openedBy.profilePic}`} alt="" />
        </div>
        {elem.openedBy.userName}
      </div>
      <div className="text-md text-white py-4 px-2">
      {elem.description}
      </div>
    </div>
  );
};

export default DiscussionCard;
