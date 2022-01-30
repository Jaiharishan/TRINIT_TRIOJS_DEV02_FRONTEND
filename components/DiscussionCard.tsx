import React from "react";
import { AddThreadModal } from ".";
const DiscussionCard = ({ elem, bugId }: any) => {
  return (
    <>
      <div className="flex align-center">
        <div className="flex rounded-xl flex-col border-2 border-gray-600 md:w-9/12 lg:w-8/12">
          <div className="px-2 py-4 border-b-2 border-gray-600 text-white text-lg flex items-center gap-2">
            {elem?.openedBy?.profilePic ? (
              <img
                className="w-6 h-6 rounded-full object-cover"
                src={`http://localhost:4000/${elem.openedBy.profilePic}`}
                alt=""
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-blue-600"></div>
            )}
            {elem.openedBy.userName}
          </div>
          <div className="text-md text-white py-4 px-4">{elem.description}</div>
        </div>

        <div className=" m-5">
          <AddThreadModal commentId={elem._id} bugId={bugId} />
        </div>
      </div>
      <div>
        {elem?.comments?.map((com: any) => (
          <div className="flex rounded-xl flex-col border-2 border-gray-600 w-96 md:w-9/12 lg:w-8/12 ml-8 m-5">
            <div className="px-4 py-4 border-b-2 border-gray-600 text-white text-lg flex items-center gap-2">
              {com?.openedBy?.profilePic ? (
                <img
                  className="w-6 h-6 rounded-full object-cover"
                  src={`http://localhost:4000/${com.openedBy.profilePic}`}
                  alt=""
                />
              ) : (
                <div className="w-6 h-6 rounded-full bg-blue-600"></div>
              )}

              {com.openedBy.userName}
            </div>
            <div className="text-md text-white py-4 px-4">
              {com.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DiscussionCard;
