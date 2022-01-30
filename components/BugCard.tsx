import React from "react";

const BugCard = ({ BugName, CreatedBy, Tags }: any) => {
  console.log(CreatedBy);
  return (
    <div className="rounded-lg mt-6 w-64 h-64 border-2 border-gray-600 p-4 flex flex-col items-start justify-start cursor-pointer hover-style">
      <div className="text-xl text-white">{BugName}</div>

      <div className="flex gap-2 items-center mt-6">
        <div className="w-5 h-5 rounded-full bg-blue-600"></div>
        <div className="text-md text-white">{CreatedBy?.userName}</div>
      </div>

      <div className="flex gap-2 items-center mt-6">
        <div className="rounded-xl px-4 py-1 border border-gray-600 text-white text-sm cursor-pointer">
          {Tags}
        </div>
        {/* {Tags.map((Tag: any) => {
          return (
            <div className="rounded-xl px-4 py-1 border border-gray-600 text-white text-sm cursor-pointer">
              {Tag}
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default BugCard;
