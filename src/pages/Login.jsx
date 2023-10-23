import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { selectLoggedIn } from 'redux/auth/selectors';

const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    dispatch(logIn({ email, password }));
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
