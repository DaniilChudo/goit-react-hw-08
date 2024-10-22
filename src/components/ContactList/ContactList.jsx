import { useSelector } from "react-redux";
import { selectItems } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectItems);

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
