import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilter } from "../../redux/contacts/filterSlice";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = [...contacts]
    .sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    )
    .filter((contact) =>
      contact.name.toLowerCase().includes(filter && filter.toLowerCase())
    );

  return filteredContacts.length <= 0 ? (
    <p>No contacts in your phone book ...</p>
  ) : (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.element}>
          <button
            onClick={() => handleDelete(contact.id)}
            className={css.button}
          >
            X
          </button>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};
