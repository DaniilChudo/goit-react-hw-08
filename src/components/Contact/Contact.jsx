import styles from "./Contact.module.css";
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact as deleteContactOp } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactOp(id));
  };

  return (
    <li className={styles.item}>
      <p>
        <IoIosContact className="menIcon" size="24" />
        {name}
      </p>
      <p>
        <FaPhoneAlt className="phoneIcon" size="24" />
        {number}
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
