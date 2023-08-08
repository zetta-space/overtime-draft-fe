import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex w-full h-screen flex-col justify-center items-center gap-4">
      <h1 className="text-6xl capitalize font-semibold">404 not found!</h1>
      <p className="text-base text-slate-500 capitalize">Sorry, an unexpected error has occurred.</p>
      <div className="my-9">
        <p className="italic text-sm text-slate-800">{error.statusText || error.message}</p>
      </div>
    </div>
  );
};

export default Error;
