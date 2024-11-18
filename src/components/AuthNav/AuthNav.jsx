import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Реєстрація</Link>
      <Link to="/login">Вхід</Link>
    </div>
  );
};

export default AuthNav;
