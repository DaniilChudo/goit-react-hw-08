import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <div>
      {!isLoggedIn && <p>Please register or login</p>}
      {isLoggedIn && <p>Welcome {name}!</p>}
    </div>
  );
}
