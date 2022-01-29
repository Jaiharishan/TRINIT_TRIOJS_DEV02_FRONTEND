import React, { useEffect } from "react";
import axios_ from "../axios/axios";

const User = ({ user }: any) => {
  return (
    <div className="text-3xl">
      {" "}
      hi! {user.userName} {user.email}{" "}
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await axios_.get("users/");
  const usersName = res.data.usersName;

  const paths = usersName.map((userName: String): Object => {
    return { params: { userName } };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const userName = context.params.userName;
  const res = await axios_.get(`user/${userName}`);
  const user = res.data.user;

  return {
    props: { user: user },
  };
};

export default User;
