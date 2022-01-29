import { useEffect } from "react";
import { useRecoilState } from "recoil";
import userState from "../atoms/userAtom";
import axios_api from "../axios/api";

export default function Home() {
  const [user, setUser]: [any, Function] = useRecoilState(userState);

  // type user = any;

  // if (typeof window !== 'undefined') {
  //   console.log(localStorage.getItem('token'))
  // }

  useEffect(() => {
    (async () => {
      const result = await axios_api.get("self/");

      setUser(result.data.user);
    })();
  }, []);

  return (
    <div className="font-bold text-4xl">hello! {user && user.userName}</div>
  );
}
