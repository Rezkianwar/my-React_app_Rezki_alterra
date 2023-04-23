import React from "react";
import { USERS_DATA } from "./Constants";
import "./aboutMe.css";
import { useParams } from "react-router-dom";
import { useGetUsers } from "./Hooks/useUsersData";
import { useEffect } from "react";
import LoadingComponent from "../../Component/loadingComponent/loadingComponent";
import { Card } from "antd";

const Aboutme = () => {
  const { id } = useParams();

  const [isLoadingUserData, usersData, getUsersData] = useGetUsers();
  console.log({ usersData });

  const data = id ? USERS_DATA.filter((item) => item.id == id) : USERS_DATA;

  useEffect(() => {
    getUsersData();
  }, []);
  return (
    <div className="data">
      <h1 className="title">About me</h1>
      {isLoadingUserData ? (
        <LoadingComponent />
      ) : (
        usersData?.map((user) => (
          <Card title={user.firstName + " " + user.lastName} key={user.id}>
            <div>{user.hobby}</div>
            <div>{user.age}</div>
          </Card>
        ))
      )}
    </div>
  );
};

export default Aboutme;
