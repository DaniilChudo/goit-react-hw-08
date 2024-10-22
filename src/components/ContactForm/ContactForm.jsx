import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    dispatch(addContact({ name: name.value, number: number.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" required />
      <input type="tel" name="number" required />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
