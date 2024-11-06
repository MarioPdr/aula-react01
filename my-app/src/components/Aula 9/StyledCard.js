import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const Content = styled.p`
  color: #666;
`;

const StyledCard = () => {
  return (
    <Card>
      <Title>Título do Card</Title>
      <Content>
        Este é o conteúdo do card, estilizado com styled-components.
      </Content>
    </Card>
  );
};

export default StyledCard;
