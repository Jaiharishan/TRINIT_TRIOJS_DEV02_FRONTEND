import React, { useState, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import axios_api from "../axios/api";
import { useRouter } from "next/router";
export default function CloseBugModal({ bugId, status }: any) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const res = await axios_api.put(`bug/close/${bugId}/`);
    console.log(res);
    if (res.status == 200) {
      router.push(`/bugs/${bugId}`);
    }
    // using axios i will send the data
    setShowModal(false);
  };
  return (
    <>
      {status == "closed" ? (
        <button
          disabled
          className=" text-white px-4 bg-red-900 py-3 rounded-md flex items-center gap-2 hover-style"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Close Bug
        </button>
      ) : (
        <button
          className=" text-white px-4 bg-red-600 py-3 rounded-md flex items-center gap-2 hover-style"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Close Bug
        </button>
      )}

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Closing Bug</h3>
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
                  <p className="mb-3">Your Comment</p>
                  <p className="text-xl">
                    Are you sure you want to close the bug.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    No
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleSubmit()}
                  >
                    Close Bug
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
