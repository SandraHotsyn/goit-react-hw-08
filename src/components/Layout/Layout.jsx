// import css from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar"; // Імпортуємо AppBar

const Layout = () => {
  return (
    <div>
      <AppBar />
      <main>
        <Outlet /> {/* Тут будуть відображатися всі сторінки */}
      </main>
    </div>
  );
};

export default Layout;
