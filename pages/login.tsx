import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios_auth from "../axios/auth";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const result = await axios_auth.post("login", {
      email,
      password,
    });

    if (!result) {
      router.push("/login");
    }

    router.push("/");
    console.log(result);
    localStorage.setItem("token", result.data.token);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        {/* img */}
        <div className="hidden md:flex h-screen w-2/4 bg-yellow-300 items-center justify-center">
          <img className="w-96 h-96" src="./loginImg.png" alt="" />
        </div>

        {/* login cred */}
        <div className="h-screen w-full md:w-1/2 flex items-center justify-center">
          <div className="flex flex-col items-center sm:w-4/6 w-96 px-3 py-5 rounded-lg">
            <div className="text-5xl font-bold mb-10">TrioJS</div>

            <div className="self-start mb-1 ml-1">Email</div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 bg-yellow-100 border-gray-800 px-4 py-2 w-full rounded-full outline-none mb-3"
            />

            <div className="self-start mb-1 ml-1">Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 bg-yellow-100 border-gray-800 px-4 py-2 w-full rounded-full outline-none"
            />

            <button
              onClick={handleSubmit}
              type="button"
              className="border-2 bg-yellow-300 border-gray-800 px-8 py-2 rounded-full mt-7"
            >
              Login
            </button>

            <Link href="/register">
              <a className="my-4">
                Don't have an account?{" "}
                <span className="text-yellow-400">register</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
