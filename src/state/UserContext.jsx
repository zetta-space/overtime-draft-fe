/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const getUser = (data) => {
    const { token, username, name, email } = data;
    setUser((current) => [...current, { username, name, email, token }]);
  };

  return (
    <UserContext.Provider value={{ getUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
