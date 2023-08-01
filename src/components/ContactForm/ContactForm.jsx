import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = event.target.elements;

    const contactExists = contacts.some(
      (existingContact) =>
        existingContact.name === name.value &&
        existingContact.number === number.value
    );

    if (contactExists) {
      alert(`${name.value} is already in the phonebook`);
    } else {
      const contact = {
        name: name.value,
        number: number.value,
      };

      dispatch(addContact(contact));
      event.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[A-Za-z.' \-]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.input}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.input}
        />
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
