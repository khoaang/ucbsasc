import { Container, Typography } from '@mui/material';
import Footer from '../components/Footer';

const Events = () => {
  return (
    <>
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Events
      </Typography>
      <Typography variant="body1">
        Our upcoming events will be listed here.
      </Typography>
    </Container>
    <Footer />
    </>
  );
};

export default Events; 