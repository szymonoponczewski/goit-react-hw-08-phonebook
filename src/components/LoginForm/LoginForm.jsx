import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
    event.target.reset();
  };

  return (
    <div className={css.wrapper}>
      <form className={css.element} onSubmit={handleSubmit}>
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
          Sign in
        </button>
        <p>
          New user? Sign up
          <a href="szymonoponczewski.github.io/goit-react-hw-08-phonebook/register" className={css.link}>
            {" "}
            here
          </a>
        </p>
      </form>
    </div>
  );
};
