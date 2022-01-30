import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import userState from "../atoms/userAtom";
import axios_api from "../axios/api";
import { PlusIcon } from "@heroicons/react/solid";
import { AddOrgModal, Navbar, OrgCard } from "../components";
import Link from "next/link";
import axios_ from "../axios/axios";

export default function Home() {
  // const [user, setUser]: [any, Function] = useRecoilState(userState);
  const [user, setUser] = useState({});
  const array = [1, 1, 1, 1, 1];
  const [ownOrgs, setOwnOrgs] = useState([]);
  const [employeeOrgs, setEmployeeOrgs] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios_api.get("self/");

      setUser(result.data.user);
      console.log(result.data.user);
      //   })();
      // }, []);

      // useEffect(() => {
      //   (async () => {
      const userId = result.data.user._id;
      if (userId) {
        const result = await axios_.get(`user/orgList/${userId}`);
        setOwnOrgs(result.data.message.ownOrg);
        setEmployeeOrgs(result.data.message.employeeAt);
      }
    })();
  }, []);

  console.log(ownOrgs);
  return (
    <>
      <Navbar />
      <div className="w-full h bg-gray-900 mt-20 py-16 min-h-screen">
        <div className="px-4 flex items-center md:items-start flex-col">
          <p className="text-white text-3xl">Create Organization</p>
          <AddOrgModal />
        </div>

        <div className="px-4 mt-20 flex items-center md:items-start flex-col">
          <p className="text-white text-3xl">Owned organizations</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {ownOrgs.map((ownOrg: any) => {
              return (
                <Link href={`organizations/${ownOrg?._id}`}>
                  <a>
                    <OrgCard org={ownOrg} />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
