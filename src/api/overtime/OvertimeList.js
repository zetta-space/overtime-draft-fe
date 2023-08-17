import axios from "axios";
import { useState } from "react";

export const OvertimeList = (take, skip, token) => {
  const bearerToken = "Bearer " + String(token);

  if (isNaN(take, skip)) {
    take = 10;
    skip = 0;
  }

  // const requestHeader = {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization: bearerToken,
  //   },
  // };
  // const request = await fetch(
  //   `http://127.0.0.1:8000/api/overtime/list?take=${take}&skip=${skip}`,
  //   requestHeader
  // );
  // const result = await request.json();

  // return result;

  const response = axios.get(
    `http://127.0.0.1:8000/api/overtime/list?take=${take}&skip=${skip}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: bearerToken,
      },
    }
  );
  return response;
};
