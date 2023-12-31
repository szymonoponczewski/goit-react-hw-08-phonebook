import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
            autoComplete="email"
            className={css.input}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="password"
            autoComplete="current-password"
            className={css.input}
          />
        </label>
        <button type="submit" className={css.button}>
          Sign up
        </button>
        <p>
          Already a user? Please sign in{" "}
          <Link to="/login" className={css.link}>
            here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
