import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contacts/slice"; // Переконайтеся, що цей шлях вірний
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Search contacts"
      className={styles.searchInput}
    />
  );
}
