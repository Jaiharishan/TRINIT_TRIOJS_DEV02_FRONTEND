import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import axios_api from "../axios/api";
import {useRouter} from 'next/router'
export default function AddUserModal() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [profilePic, setProfilePic]: any = useState(null);

  const handleSubmit = async () => {
    console.log("submit working");

    const formData = new FormData();

    // Update the formData object
    formData.append("profilePic", profilePic);
    formData.append("name", name);
    formData.append("description", description);

    const data = await axios_api.post("org/create", formData);
    if(data.status==200){
      router.push('/')
    }
    console.log(data);
    

    // using axios i will send the data
    setShowModal(false);
  };
  return (
    <>
      <button
        className="rounded-lg mt-6 w-48 h-48 border-2 border-gray-600 flex items-center justify-center hover:border-gray-400 transition duration-200"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <PlusIcon className="text-white w-10 h-10" />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Create Organization
                  </h3>
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
                  <p className="mb-3">Name</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="outline-none w-96 border border-gray-400 px-4 py-2 rounded-lg"
                  />
                  <p className="mb-3">Description</p>
                  <input
                    type="text"
                    value={description}
                    placeholder="Give a description"
                    onChange={(e) => setDescription(e.target.value)}
                    className="outline-none w-96 border border-gray-400 px-4 py-2 rounded-lg"
                  />
                  <p className="mb-3">Add Image</p>
                  <input
                    type="file"
                    onChange={(e: any) => setProfilePic(e.target.files[0])}
                    // value={profilePic}
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
                    Create
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
