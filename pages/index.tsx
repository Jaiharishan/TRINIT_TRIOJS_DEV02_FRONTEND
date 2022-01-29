import { useEffect } from "react";
import { useRecoilState } from "recoil";
import userState from "../atoms/userAtom";
import axios_api from "../axios/api";
import { PlusIcon } from "@heroicons/react/solid";
import { AddOrgModal, Navbar, OrgCard } from "../components";
import Link from "next/link";

export default function Home() {
  const [user, setUser]: [any, Function] = useRecoilState(userState);
  const array = [1, 1, 1, 1, 1];

  useEffect(() => {
    (async () => {
      const result = await axios_api.get("self/");

      setUser(result.data.user);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full h bg-gray-900 mt-20 py-16">
        <div className="px-4 flex items-center md:items-start flex-col">
          <p className="text-white text-3xl">Create Orgainization</p>
          <AddOrgModal />
        </div>

        <div className="px-4 mt-20 flex items-center md:items-start flex-col">
          <p className="text-white text-3xl">Owned organizations</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {array.map((elem) => {
              return (
                <Link href="/Org">
                  <a>
                    <OrgCard />
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
