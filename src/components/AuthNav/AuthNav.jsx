import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <Link to="/register" className="auth-link">
        Register
      </Link>
      <Link to="/login" className="auth-link">
        Login
      </Link>
    </div>
  );
};

export default AuthNav;
