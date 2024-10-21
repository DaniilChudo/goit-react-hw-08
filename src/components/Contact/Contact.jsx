import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      {name}: {phone}
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};
