import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Contacts App</h1>
      <p>
        This application allows you to store and manage your contacts securely.
      </p>
      <p>
        If you dont have an account, please <Link to="/register">Register</Link>{" "}
        to get started.
      </p>
      <p>
        If you already have an account, you can <Link to="/login">Login</Link>.
      </p>
      <footer>
        <p>Developed by Alexander Repeta</p>
        <p>
          Check out my website: <a href="https://www.example.com">My Website</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
