import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = (props) => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6576dcb5197926adf62c9df8.mockapi.io/myData`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  return (
    <>
      <h1>Profile Page</h1>
      {APIData.map((data) => {
        return (
          <h3>
            {data.username} {data.email} {data.phone}{" "}
          </h3>
        );
      })}
    </>
  );
};

export default Profile;
