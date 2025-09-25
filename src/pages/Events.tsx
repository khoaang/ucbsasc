import { Container, Typography } from '@mui/material';
import Footer from '../components/Footer';
import GeneralMeeting from '../components/events/GeneralMeeting';
import NightMarket from '../components/events/NightMarket';
import SEAGrad from '../components/events/SEAGrad';
import ProfessionalHeadshots from '../components/events/ProfessionalHeadshots';
import ProfessionalHeadshotsUpcoming from '../components/events/ProfessionalHeadshotsUpcoming';

const Events = () => {
  return (
    <>
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Events
        </Typography>
        <ProfessionalHeadshotsUpcoming />
        <GeneralMeeting />
        <ProfessionalHeadshots />
        <SEAGrad />
        <NightMarket />
        <Typography variant="body1" sx={{ mt: 4 }}>
          More upcoming events will be listed here.
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default Events;
