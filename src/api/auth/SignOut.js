import { uri } from "../../routes/url.routes";

export const SignOut = async (token) => {
  const requestBody = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  };

  const request = await fetch(
    `${uri.BASE_URL}/api/user/logout`,
    requestBody
  );
  const response = await request.json();

  return response;
};
