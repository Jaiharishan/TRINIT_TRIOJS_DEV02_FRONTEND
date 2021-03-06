import React, { useEffect, useState } from "react";
import axios_ from "../../axios/axios";
import { Navbar, BugPage } from "../../components";
import axios_api from "../../axios/api";

const Bug = ({ bug }: any) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    (async () => {
      const result = await axios_api.get("self/");

      setUser(result.data.user);
      console.log(result.data.user);
    })();
  }, []);
  console.log(bug);
  return (
    <>
      <Navbar user={user} />
      <BugPage bug={bug} />
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await axios_.get("view/bugList/");
  const bugsId = res.data.message;

  console.log(bugsId);
  const paths = bugsId.map((bug: any): Object => {
    const _id = bug._id;
    return { params: { _id } };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const _id = context.params._id;
  const res = await axios_.get(`view/bug/${_id}`);
  const bug = res.data.message;

  return {
    props: { bug: bug },
  };
};

export default Bug;
