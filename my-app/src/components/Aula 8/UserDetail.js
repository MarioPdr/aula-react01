// components/UserDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
function UserDetail() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    // Volta para a página anterior
    navigate(-1); 
  };
  return (
    <div>
      <h3>User ID: {userId}</h3>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}
export default UserDetail;