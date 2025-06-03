import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

export const Logos = () => {
  return (
    <div className="flex">
      <a href="https://vite.dev" target="_blank">
        <img
          src={viteLogo}
          className="h-50 m-5 will-change hover:drop-shadow-[0px_0px_30px] hover:drop-shadow-purple-600 transition-[filter 300ms]"
          alt="Vite logo"
        />
      </a>
      <a href="https://react.dev" target="_blank">
        <img
          src={reactLogo}
          className="h-50 m-5 will-change hover:drop-shadow-[0px_0px_30px] hover:drop-shadow-sky-300 transition-[filter 300ms] animate-[spin_20s_linear_infinite]"
          alt="React logo"
        />
      </a>
    </div>
  );
};
