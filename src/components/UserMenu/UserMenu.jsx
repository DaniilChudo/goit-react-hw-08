import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div>
      <span>Welcome, {name}</span>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  );
};

export default UserMenu;
