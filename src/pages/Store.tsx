import { useEffect } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Footer from '../components/Footer';

const Store = () => {
  useEffect(() => {
    const url = 'https://sasc.bigcartel.com';
    const t = setTimeout(() => {
      try {
        window.location.assign(url);
      } catch {}
    }, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          SASC Store
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Redirecting you to our merch store… If you are not redirected, use the button below.
        </Typography>
        <Box>
          <Button variant="contained" size="large" href="https://sasc.bigcartel.com" target="_blank" rel="noopener noreferrer">
            Go to sasc.bigcartel.com
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Store;


