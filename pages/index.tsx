import { useEffect } from "react";
import { useRecoilState } from "recoil";
import userState from "../atoms/userAtom";
import axios_api from "../axios/api";
import { PlusIcon } from "@heroicons/react/solid";
import { Navbar, OrgCard } from "../components";

export default function Home() {
  const [user, setUser]: [any, Function] = useRecoilState(userState);

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
        <div className="px-4">
          <p className="text-white text-3xl">Create Orgainization</p>

          <div className="rounded-lg mt-6 w-48 h-48 border-2 border-gray-600 flex items-center justify-center">
            <PlusIcon className="text-white w-10 h-10" />
          </div>
        </div>

        <div className="px-4 mt-20">
          <p className="text-white text-3xl">Your organizations</p>

          <OrgCard />
        </div>
      </div>
    </>
  );
}
