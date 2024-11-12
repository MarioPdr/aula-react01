import React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import UniformeImagem1 from "./uniforme1.jfif";
import UniformeImagem2 from "./uniforme2.jfif";

const uniformes = [
  { id: 1, name: 'Uniforme A', image: UniformeImagem1 },
  { id: 2, name: 'Uniforme B', image: UniformeImagem2 },
];

const Uniforme = () => {
  const handleAddToCart = (uniforme) => {
    console.log(`Adicionado ao carrinho: ${uniforme.name}`);
  };

  const handleDetails = (uniforme) => {
    console.log(`Detalhes do uniforme: ${uniforme.name}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '80%' }}>
        {uniformes.map((uniforme) => (
          <Card key={uniforme.id} sx={{ maxWidth: 200 }}>
            <CardMedia component="img" height="140" image={uniforme.image} alt={uniforme.name} />
            <CardContent>
              <Typography variant="h6" component="div">{uniforme.name}</Typography>
              <Button variant="contained" color="primary" onClick={() => handleAddToCart(uniforme)}>
                Adicionar ao Carrinho
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => handleDetails(uniforme)} style={{ marginTop: '0.5rem' }}>
                Detalhes
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Uniforme;
