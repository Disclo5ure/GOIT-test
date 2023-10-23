import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { selectLoggedIn } from 'redux/auth/selectors';

const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    dispatch(register({ name, email, password }));
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
