import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps"; // Функція видалення контакту
import { IoPersonOutline, IoPhonePortraitOutline } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contactContainer}>
      <ul className={css.contactDetails}>
        <li className={css.contactItem}>
          <IoPersonOutline className={css.icon} />
          <span>{contact.name}</span>
        </li>
        <li className={css.contactItem}>
          <IoPhonePortraitOutline className={css.icon} />
          <span>{contact.number}</span>
        </li>
      </ul>
      <button className={css.button} onClick={handleDelete}>
        ВИДАЛИТИ
      </button>
    </div>
  );
}
