import { useDispatch } from "react-redux";
import { filterContact } from "../../redux/contacts/filterSlice";
import css from "./Filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    const filterValue = event.target.value;
    dispatch(filterContact(filterValue));
  };

  return (
    <label className={css.Label}>
      Search contacts by name
      <input
        type="text"
        placeholder="Search..."
        onChange={handleFilter}
        className={css.input}
      />
    </label>
  );
};
