import { Container, Typography } from '@mui/material';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1">
          Email: UCB.SASC@gmail.com
        </Typography>
        <Typography variant="body1">
          Location: 506 Barrows Hall, Berkeley, CA 94720
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default Contact; 