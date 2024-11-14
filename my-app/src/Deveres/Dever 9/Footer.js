// Footer.js
import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  // Dados locais do footer
  const links = [
    { name: 'Home', url: '/' },
    { name: 'Sobre Nós', url: '/about' },
    { name: 'Contato', url: '/contact' },
    { name: 'Política de Privacidade', url: '/privacy' }
  ];

  const social = [
    { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' }
  ];

  return (
    <Box component="footer" sx={{ backgroundColor: '#333', color: '#fff', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Navegação</Typography>
            <Box>
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  underline="none"
                  color="inherit"
                  sx={{ display: 'block', my: 1 }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Redes Sociais</Typography>
            <Box display="flex" alignItems="center">
              {social.map((network, index) => (
                <Link
                  key={index}
                  href={network.url}
                  color="inherit"
                  sx={{ mr: 2 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {network.icon === 'facebook' ? <FacebookIcon /> : <InstagramIcon />}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box mt={3} textAlign="center">
          <Typography variant="body2">
            © 2024 Carioca Sport. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}; 

export default Footer;
