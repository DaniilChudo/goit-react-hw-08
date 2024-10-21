import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default AppBar;
