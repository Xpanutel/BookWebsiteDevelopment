import Header from "../../components/Header/Header.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
