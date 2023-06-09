import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <>
      <h3 className="title">Register</h3>
      <form action="" className="form">
        <input type="text" value={name} onChange={onNameChange} placeholder="nama" className="input" />
        <input type="email" value={email} onChange={onEmailChange} placeholder="email" className="input" />
        <input type="password" value={password} onChange={onPasswordChange} placeholder="password" className="input" />
        <button type="submit" onClick={() => register({ name, email, password })} className="p-1 text-xl text-white bg-blue-900">Register</button>
      </form>
    </>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
