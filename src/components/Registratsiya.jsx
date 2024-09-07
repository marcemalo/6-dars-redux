import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/user-Slice';
import {  useNavigate } from 'react-router-dom';


const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email }));
    setName('');
    setEmail('');
    navigate('/users'); 
  };

  return (
    <div className="container">
      <h1>Ro'yxatga olish</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ism:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          Ro'yxatga olish
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
