import React, { useEffect, useState } from "react";
import { EditUserModal, Navbar, OrgCard } from "../components";
import { useRecoilState } from "recoil";
import axios_api from "../axios/api";
import userState from "../atoms/userAtom";
import axios_ from "../axios/axios";
const profile = () => {
  const [user, setUser]: [any, Function] = useState("");
  const [orgs, setOrgs]: any = useState({});

  useEffect(() => {
    (async () => {
      const result = await axios_api.get("self/");

      setUser(result.data.user);
      //   })();
      // }, []);

      // useEffect(() => {
      //   (async () => {
      //     console.log(user);
      const res = await axios_.get(`user/orgList/${result.data.user._id}`);
      setOrgs(res.data.message);
    })();
  }, []);

  console.log(orgs);
  return (
    <>
      <Navbar user={user} />
      <div className="bg-gray-900 mt-20 py-10 min-h-full">
        {user?.profilePic ? (
          <img
            src={`http://localhost:4000${user?.profilePic}`}
            className="w-48 h-48 rounded-lg object-cover"
            alt=""
          />
        ) : (
          <div className="rounded-lg w-48 h-48 bg-blue-600 mb-4 mx-2"></div>
        )}

        <div className="py-4 mb-10 text-white border-b border-gray-600">
          <p className="text-3xl px-2">{user?.userName}</p>
        </div>

        <div className="text-white text-lg mb-10 px-2">{user?.description}</div>

        <div className="px-2">
          <EditUserModal />
        </div>

        <p className="mt-16 text-3xl text-white px-2">Organizations</p>

        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          {orgs?.employeeAt?.map((elem: any) => {
            return <OrgCard org={elem} />;
          })}
          {orgs?.ownOrg?.map((elem: any) => {
            return <OrgCard org={elem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default profile;
