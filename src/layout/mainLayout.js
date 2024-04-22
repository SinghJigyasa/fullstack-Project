import { Outlet } from "react-router-dom";

const MainLayoutComp = () => {
  return (
    <div>
      <header className="bg-dark text-white ">
          Wlecome to Jigyasa Fullstack Project
      </header>
      <Outlet/>
    </div>
  );
};
export default  MainLayoutComp;
