export const OvertimeList = async (take, skip) => {
  const bearerToken = "Bearer " + "42|Ogxtkfx7GywoAkR1iQ6HwpIWx46m51QlRHVtgwIs";

  if (isNaN(take, skip)) {
    take = 10;
    skip = 0;
  }

  const requestHeader = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: bearerToken,
    },
  };
  const request = await fetch(
    `http://127.0.0.1:8000/api/overtime/list?take=${take}&skip=${skip}`,
    requestHeader
  );
  const result = await request.json();

  return result;
};
