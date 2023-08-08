export const SignIn = async (username, password) => {
  const requestBody = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  };

  const request = await fetch(
    "http://127.0.0.1:8000/api/user/login",
    requestBody
  );
  const response = await request.json();

  return response;
};
