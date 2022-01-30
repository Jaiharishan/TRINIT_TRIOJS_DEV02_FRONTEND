import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import axios_api from "../axios/api";
import { useRouter } from "next/router";
export default function AddUserModal({ orgId }: any) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const [memberId, setMemberId] = useState("");
  const [rank, setRank] = useState("");
  const [visibility, setVisibility] = useState("public");

  const handleSubmit = async () => {
    console.log("submit working");
    const res = await axios_api.put(`org/addMember/${orgId}`, {
      memberId,
      rank,
    });
    if (res.status == 200) {
      router.push(`/${orgId}`);
    }
    // using axios i will send the data
    setShowModal(false);
  };
  return (
    <>
      <button
        className="border text-white border-gray-600 px-5 py-2 rounded-md flex items-center gap-2 hover-style"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <PlusIcon className="w-6 h-6" />
        Add member
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Member</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="mb-3">MemberId</p>
                  <input
                    type="text"
                    value={memberId}
                    onChange={(e) => setMemberId(e.target.value)}
                    className="outline-none w-96 border border-gray-400 px-4 py-2 rounded-lg"
                  />
                  <p className="mb-3">Rank</p>
                  <input
                    type="text"
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                    className="outline-none w-96 border border-gray-400 px-4 py-2 rounded-lg"
                  />
                  <div className="flex gap-2 items-center mt-4">
                    <p>Public</p>
                    <input
                      type="radio"
                      name="visibility"
                      value={visibility}
                      onChange={(e) => setVisibility("public")}
                      className="outline-none w-96 border border-gray-400 px-4 py-2 rounded-lg"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <p>Private</p>
                    <input
                      type="radio"
                      name="visibility"
                      value={visibility}
                      onChange={(e) => setVisibility("private")}
                      className="outline-none w-96 border border-gray-400 px-4 py-2 rounded-lg"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
