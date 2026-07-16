import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { programs } from '../data/programs';
import { directors as leadershipDirectors, officers as leadershipOfficers } from '../data/leadership';
import { usePageTitle } from '../hooks/usePageTitle';

const ProgramCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  },
}));

const About = () => {
  usePageTitle('About');
  const directors = leadershipDirectors;
  const officers = leadershipOfficers;

  return (
    <Box sx={{ position: 'relative' }}>
      <PageHeader
        title="About SASC"
        subtitle="Student-run at UC Berkeley since 2000. We support Southeast Asian students through mentorship, cultural programming, and community."
        image="/sascomm.jpg"
      />

      <Container sx={{ py: 2, mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          SASC was founded in 2000 by student organizers who wanted a clearer home for Southeast Asian students at
          Berkeley. From the beginning, that has meant mentorship, cultural space, and room to organize when campus
          resources fell short.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We still run SEAM, SEASO, SEACF, and SEAgrad. We table on Sproul, cook for SEAsgiving, and stay in touch with
          members and alumni beyond meeting agendas. We also partner with Bay Area organizations when our communities
          need support that goes beyond campus.
        </Typography>
        <Typography variant="body1">
          Programs change with each cohort, but the purpose stays steady: Southeast Asian students should have a place
          here to belong, lead, and be taken seriously.
        </Typography>
      </Container>

      <Container sx={{ pb: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Get Involved
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: 640, mx: 'auto' }}>
          Join a general meeting when programming resumes, apply for a leadership role next cycle, or email{' '}
          <strong>UCB.SASC@gmail.com</strong> with questions or ideas.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" href="/lead">
              Leadership & Involvement
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" href="mailto:UCB.SASC@gmail.com?subject=Hello%20SASC">
              Email Us
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          What We Care About
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              title: 'Community',
              body: 'We look out for each other through bonding events, wellness check-ins, and alumni relationships that often last well beyond graduation.',
            },
            {
              title: 'Culture',
              body: 'We treat our languages, food, dance, and histories as sources of knowledge and pride worth sharing on campus.',
            },
            {
              title: 'Advocacy',
              body: 'We work for representation, funding, and campus resources so Southeast Asian students are not overlooked.',
            },
          ].map((value) => (
            <Grid item xs={12} md={4} key={value.title}>
              <Box sx={{ pr: { md: 2 } }}>
                <Typography variant="h5" gutterBottom>
                  {value.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {value.body}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Our Team
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.secondary' }}>
          Directors
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {directors.map((member) => (
            <Grid item xs={6} sm={4} md={3} key={member.name}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{ height: 200, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {member.role}
                  </Typography>
                  <Button size="small" variant="text" href={`mailto:${member.email}`}>
                    {member.email}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.secondary' }}>
          Officers
        </Typography>
        <Grid container spacing={2}>
          {officers.map((member) => (
            <Grid item xs={6} sm={4} md={3} key={member.name}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{ height: 180, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {member.role}
                  </Typography>
                  <Button size="small" variant="text" href={`mailto:${member.email}`}>
                    {member.email}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Our Programs
        </Typography>
        <Grid container spacing={4}>
          {programs.map((program) => (
            <Grid item xs={12} md={6} key={program.title}>
              <ProgramCard>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {program.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {program.description}
                  </Typography>
                  <Typography variant="body2" color="primary.dark" sx={{ fontWeight: 500 }}>
                    {program.goals}
                  </Typography>
                </CardContent>
              </ProgramCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default About;
