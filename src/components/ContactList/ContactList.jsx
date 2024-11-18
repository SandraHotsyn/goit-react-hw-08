import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts); // Отримання відфільтрованих контактів

  return (
    <div className={css.contactListContainer}>
      {filteredContacts.length > 0 ? (
        <ul className={css.contactList}>
          {filteredContacts.map((contact) => (
            <li key={contact.id} className={css.contactItem}>
              <Contact contact={contact} />{" "}
              {/* Використання компонента Contact */}
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noContacts}>Контакти не знайдено</p>
      )}
    </div>
  );
};

export default ContactList;
