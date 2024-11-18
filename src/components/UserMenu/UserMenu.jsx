import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations"; // Операція для лог-ауту

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Логаут користувача
  };

  return (
    <div>
      <button onClick={handleLogout}>Вийти</button>
    </div>
  );
};

export default UserMenu;
