import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import axios_api from "../axios/api";
export default function AddBugModal({ orgId }: any) {
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");

  const handleSubmit = async () => {
    console.log("submit working");
    const res = await axios_api.post(`bug/create/${orgId}`, {
      title,
      description,
      severity,
    });

    console.log(res);

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
        Add Bugs
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Bug</h3>
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
                  <p className="mb-3">Title</p>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Give a title"
                    className="outline-none w-96 border border-gray-400 px-4 py-2 rounded-lg"
                  />

                  <p className="my-3">Description</p>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe the bug"
                    className="outline-none w-96 border border-gray-400 px-4 py-2 rounded-lg"
                  />

                  <p className="my-3">Severity</p>
                  <input
                    type="text"
                    value={severity}
                    onChange={(e) => setSeverity(e.target.value)}
                    placeholder="mild, moderate, severe"
                    className="outline-none w-96 border border-gray-400 px-4 py-2 rounded-lg"
                  />
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
                    onClick={() => handleSubmit()}
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
