import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => (
  <div>
    <h1>Contacts</h1>
    <SearchBox />
    <ContactForm />
    <ContactList />
  </div>
);

export default ContactsPage;
