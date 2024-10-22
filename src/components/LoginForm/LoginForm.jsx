import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/slice"; // Переконайтеся, що шлях правильний

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
