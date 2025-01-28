import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { People, School, HandshakeOutlined, Event } from '@mui/icons-material';
import Footer from '../components/Footer';

const opportunities = [
  {
    title: 'Join SASCommunity',
    description: 'Become part of our non-hierarchical committee structure and help shape SASC\'s future through various initiatives and programs.',
    icon: <People />,
    action: 'Learn More',
  },
  {
    title: 'SEA Summer Institute',
    description: 'Support our summer program that empowers Southeast Asian high school students through workshops, cultural activities, and college preparation.',
    icon: <School />,
    action: 'Get Involved',
  },
  {
    title: 'SEA Prison Outreach',
    description: 'Participate in our initiative to support incarcerated Southeast Asian community members through letter writing, advocacy, and education.',
    icon: <HandshakeOutlined />,
    action: 'Join Us',
  },
  {
    title: 'Cultural Events',
    description: 'Help organize and participate in our cultural celebrations, workshops, and community gatherings throughout the year.',
    icon: <Event />,
    action: 'View Calendar',
  },
];

const GetInvolved = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Get Involved
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Join our community and make a difference
          </Typography>
        </Container>
      </Box>
      <Container sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {opportunities.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box 
                      sx={{ 
                        mr: 2,
                        color: 'primary.main',
                        bgcolor: 'primary.light',
                        p: 1,
                        borderRadius: 1,
                        opacity: 0.1,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h5" component="h3">
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3, flexGrow: 1 }}>
                    {item.description}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    color="primary"
                    sx={{ alignSelf: 'flex-start' }}
                  >
                    {item.action}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default GetInvolved;
