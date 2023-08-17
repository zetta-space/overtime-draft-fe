/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import SignIn from "../api/auth/SignIn";
import Profile from "../components/ui/Profile";
import { UserContext } from "../state/UserContext";
import AlertDanger from "../components/AlertDanger";
import { redirect, useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { getUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  const authentication = () => {
    /**
     * 
    const response = SignIn(username, password);

    response
      .then(({ message, status_code, data }) => {
        status_code === 401
          ? setError(message)
          : getUser({
              token: data.token,
              username: data.user.username,
              name: data.user.name,
              email: data.user.email,
            });
      })
      .then(() => navigation());
  };

  const navigation = () => {
    user.length > 0
      ? navigate("/dashboard/index")
      : setTimeout(() => {
          setError(null);
        }, 3500);
  */
    return navigate("/dashboard/index");
  };

  return (
    <div className="w-full flex flex-row">
      <div className="flex flex-col px-4 justify-center items-center w-1/4 h-screen border-r-[1px] border-slate-400 bg-gradient-to-r from-green-50 to-green-200">
        <h2 className="text-lg font-semibold capitalize">Over-time draft</h2>
        <h2 className="text-5xl font-light mb-4 capitalize">sign in</h2>
        <div className="flex flex-col items-start">
          {error !== null ? <AlertDanger message={error} /> : null}
          <form className="">
            <div className="px-4 my-4">
              <label htmlFor="userName" className="text-base font-medium">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="input-control"
                onChange={(text) => setUsername(text.target.value)}
              />
            </div>
            <div className="px-4 my-4">
              <label htmlFor="userPassword" className="text-base font-medium">
                Password
              </label>
              <input
                type="password"
                name="passCode"
                id="passCode"
                className="input-control"
                onChange={(text) => setPassword(text.target.value)}
              />
            </div>
            <div className="flex flex-row justify-center items-center">
              <button
                type="button"
                className="btn btn-success mt-3"
                onClick={() => authentication()}
              >
                continue
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-9/12 background-img"></div>
    </div>
  );
};

export default LoginScreen;
