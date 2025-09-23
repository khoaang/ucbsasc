import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import Footer from '../components/Footer';

const Spotlights = () => {
  return (
    <Box>
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          SEA Spotlight
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: 900 }}>
          SEA Spotlight is our new series highlighting local Southeast Asian–owned businesses. We interview
          owners and share their stories to uplift community voices and encourage support for these beloved
          community spaces.
        </Typography>

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Suggest a Business
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Have a favorite Southeast Asian-owned business you’d like us to feature? Send suggestions to
              <strong> UCB.SASC@gmail.com</strong> with the business name, location, and why you love it.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
              <Button variant="contained" href="mailto:UCB.SASC@gmail.com?subject=Spotlight%20Suggestion">
                Email Your Suggestion
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Typography variant="h5" gutterBottom>
          Upcoming Features
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Check back soon for our first spotlight interview.
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
};

export default Spotlights;


