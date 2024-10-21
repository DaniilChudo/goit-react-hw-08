import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      onChange={handleChange}
      className={css.searchBox}
    />
  );
};
