import { Header } from "../UI/Header";
import { Footer } from "../UI/Footer";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};
