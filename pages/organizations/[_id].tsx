import React from "react";
import axios_ from "../../axios/axios";
import { Navbar, OrgPage } from "../../components";
import { useState, useEffect } from "react";
import axios_api from "../../axios/api";

const Organization = ({ org }: any) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    (async () => {
      const result = await axios_api.get("self/");

      setUser(result.data.user);
      console.log(result.data.user);
    })();
  }, []);
  return (
    <div>
      <Navbar user={user} />
      <OrgPage org={org} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await axios_.get("view/orgs");
  const Ids = res.data.data;

  const paths = Ids.map((id: any): any => {
    const _id = id._id;
    return { params: { _id } };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const _id = context.params._id;
  const res = await axios_.get(`view/orgs/${_id}`);
  const org = res.data.data;
  console.log(org);
  return {
    props: { org: org },
  };
};

export default Organization;
