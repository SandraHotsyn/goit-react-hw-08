import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Головна</Link>
      <Link to="/contacts">Контакти</Link>
    </nav>
  );
};

export default Navigation;
