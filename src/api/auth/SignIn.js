import { uri } from "../../routes/url.routes";

const SignIn = async (username, password) => {
  const requestBody = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  };

  const request = await fetch(
    `${uri.BASE_URL}/api/user/login`,
    requestBody
  );
  const response = await request.json();

  return response;
};

export default SignIn;
