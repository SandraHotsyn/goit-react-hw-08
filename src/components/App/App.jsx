import { useEffect } from "react";
import "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import { Layout } from "../Layout/Layout";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Телефонна книга</h1>
      <ContactForm />
      <h2>Контакти</h2>
      <SearchBox />
      {loading && <p>Завантаження контактів...</p>}
      {error && <p>Помилка: {error}</p>}
      <ContactList />
    </Layout>
  );
}

export default App;
