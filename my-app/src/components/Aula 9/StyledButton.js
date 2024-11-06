import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#4CAF50" : "#f4f4f4")};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${(props) => (props.primary ? "#45a049" : "#e0e0e0")};
  }
`;

const StyledButton = () => {
  return (
    <div>
      <Button primary>Botão Primário</Button>
      <Button>Botão Secundário</Button>
    </div>
  );
};

export default StyledButton;
