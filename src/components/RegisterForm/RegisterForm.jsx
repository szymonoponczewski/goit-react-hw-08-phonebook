import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = event.target.elements;
    dispatch(
      register({
        name: username.value,
        email: email.value,
        password: password.value,
      })
    );
    event.target.reset();
  };

  return (
    <div className={css.wrapper}>
      <form className={css.element} onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="username"
            placeholder="username"
            className={css.input}
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className={css.input}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className={css.input}
          />
        </label>
        <button type="submit" className={css.button}>
          Sign up
        </button>
        <p>
          Already a user? Please sign in
          <a href="/goit-react-hw-08-phonebook/login" className={css.link}>
            {" "}
            here
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;