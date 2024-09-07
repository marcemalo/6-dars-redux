import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from '../redux/user-Slice';

const UserListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);

  useEffect(() => {
    dispatch(setUsers(users));
  }, [dispatch]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-list-container">
      <h1>Guruhdagilar ro'yxati</h1>
      <input
        type="text"
        placeholder="Qidirish..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ism</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListPage;
