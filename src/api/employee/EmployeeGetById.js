import axios from "axios";

export const GetEmployeeByIdAsync = async (id, token) => {
  const bearerToken = "Bearer " + String(token);

  const requestHeader = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: bearerToken,
    },
  };
  const request = await fetch(
    `http://127.0.0.1:8000/api/employee/${id}`,
    requestHeader
  );
  const result = await request.json();

  return result;

  // const result = axios.get()
};
