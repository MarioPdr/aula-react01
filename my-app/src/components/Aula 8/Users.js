// components/Users.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function Users() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  return (
    <div>
      <h2>Users Page</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      {/* Possibilita que seja renderizado abaixo 
      o UserDetail */}
      <Outlet />
    </div>
  );
}
export default Users;