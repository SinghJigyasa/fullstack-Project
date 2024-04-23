import { Outlet } from "react-router-dom";

const MainLayoutComp = () => {
  return (
    <div>
        <header className="bg-dark text-white d-flex align-items-center justify-content-center fs-1" style={{ height: '25vh' }}>
          Wlecome to Jigyasa Fullstack Project
      </header>
      <Outlet/>
    </div>
  );
};
export default  MainLayoutComp;
