import { Helmet, HelmetProvider } from "react-helmet-async";
import { LoginForm } from "../components/LoginForm/LoginForm";

const Login = () => (
  <HelmetProvider>
    <Helmet>
      <title>Sign in</title>
    </Helmet>
    <LoginForm />
  </HelmetProvider>
);

export default Login;
