import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { Instagram, Facebook } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ 
      bgcolor: 'primary.main',
      color: 'white',
      py: { xs: 4, md: 6 },
      px: { xs: 2, md: 3 },
      mt: 'auto'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              SASC
            </Typography>
            <Typography variant="body2">
              Southeast Asian Student Coalition at UC Berkeley
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">506 Barrows Hall</Typography>
            <Typography variant="body2">Berkeley, CA 94720</Typography>
            <Typography variant="body2">UCB.SASC@gmail.com</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton 
                href="https://www.instagram.com/ucbsasc" 
                target="_blank"
                sx={{ color: 'white' }}
              >
                <Instagram />
              </IconButton>
              <IconButton 
                href="https://www.facebook.com/ucbsasc" 
                target="_blank"
                sx={{ color: 'white' }}
              >
                <Facebook />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 4, textAlign: 'center' }}>
          © {new Date().getFullYear()} SASC. All rights reserved.
          <Box component="span" sx={{ mx: 1 }}>•</Box>
          <Box component="a" href="/checkin" sx={{ color: 'inherit', textDecoration: 'none', opacity: 0.5, '&:hover': { opacity: 1 } }}>
            Check-in
          </Box>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 