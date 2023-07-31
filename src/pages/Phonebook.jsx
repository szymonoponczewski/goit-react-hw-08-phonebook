import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Filter } from "../components/Filter/Filter";
import { ContactList } from "../components/ContactList/ContactList";
import { selectIsLoading } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";

const Phonebook = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
      </HelmetProvider>
      <ContactForm />
      <h2>Phonebook</h2>
      <Filter />
      {isLoading ? <p>Loading contacts...</p> : <ContactList />}
    </div>
  );
};

export default Phonebook;
