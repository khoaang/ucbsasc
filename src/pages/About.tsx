import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';

const ProgramCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5)
  }
}));

// timeline removed for simpler layout

const IntroSection = styled(Box)({
  position: 'relative',
  height: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#000',
  color: 'white',
  overflow: 'hidden',
});

// image container removed; using CardMedia directly in grid

// removed animated ContentContainer and stat boxes

// removed mosaic grid for a cleaner hero

const About = () => {

  const historicalImages = [
    { src: '/historical1.jpg', alt: 'Community gathering, archival photo' },
    { src: '/historical2.jpg', alt: 'Students in discussion, archival photo' },
    { src: '/historical3.jpg', alt: 'SASC early days, archival photo' },
    { src: '/historical4.webp', alt: 'Cultural performance, archival photo' },
    { src: '/historical5.webp', alt: 'Event crowd, archival photo' },
    { src: '/historical6.jpg', alt: 'Speakers at event, archival photo' },
    { src: '/historical7.jpg', alt: 'Workshop session, archival photo' },
    { src: '/historical8.webp', alt: 'Community celebration, archival photo' },
    { src: '/historical9.jpg', alt: 'Group photo, archival photo' }
  ];

  const programs = [
    {
      title: "Southeast Asian Mentorship Program (SEAM)",
      description: "Supporting and guiding SEA high school students through cultural education and university preparation, SEAM helps students navigate their journey to higher education while staying connected to their heritage.",
      goals: "To ensure students are well-prepared, informed, and equipped to thrive in their university journey as Southeast Asian students."
    },
    {
      title: "Southeast Asian Orientation (SEASO)",
      description: "A welcoming space for incoming and current students to connect with SASC and the broader Southeast Asian community. Through community-bonding activities and alumni insights, we address the underrepresentation of Southeast Asian students at UC Berkeley.",
      goals: "To build a stronger, more empowered future for Southeast Asian students through community connection and support."
    },
    {
      title: "Southeast Asian Cultural Festival (SEACF)",
      description: "Our flagship celebration bringing together various Southeast Asian organizations to showcase the rich diversity of their cultures through traditional dances, music, and regional arts.",
      goals: "To celebrate and promote the vibrant traditions of Southeast Asian countries while fostering cultural understanding and pride."
    },
    {
      title: "SEAgraduation",
      description: "An intimate celebration honoring our graduating Southeast Asian seniors, providing a space where each student's unique journey and achievements are recognized and celebrated.",
      goals: "To acknowledge and celebrate the resilience and success of our Southeast Asian graduates."
    }
  ];

  const directors = [
    { name: 'Ilene Park', role: 'Internal Director', committee: 'Internal', email: 'ilene.park@ucbsasc.org', image: '/Ilene.jpg' },
    { name: 'April Marie Le', role: 'Internal Director', committee: 'Internal', email: 'le.april@berkeley.edu', image: '/April.jpg' },
    { name: 'Alida Phuthama', role: 'External Director', committee: 'External', email: 'alidaphuthama@berkeley.edu', image: '/Alida.jpg' },
    { name: 'Lan Vy Nguyen', role: 'External Director, SEAM Director', committee: 'External', email: 'nguyen_nvl@berkeley.edu', image: '/LanVy.jpg' },
    { name: 'Jordan Vu', role: 'Operations Director', committee: 'Operations', email: 'jordanvu@berkeley.edu', image: '/Jordan.jpg' },
    { name: 'Tyler Htut', role: 'Operations Director', committee: 'Operations', email: 'tylerhtut7@berkeley.edu', image: '/Tyler.jpg' },
    { name: 'Khoa Nguyen', role: 'PR Director', committee: 'PR', email: 'khoan@berkeley.edu', image: '/Khoa.jpg' },
  ];

  const officers = [
    { name: 'Earn Maneenop', role: 'PR Officer', committee: 'PR', email: 'rinradamaneenop7@berkeley.edu', image: '/headshots.jpg' },
    { name: 'Sydney Dinh', role: 'PR Officer', committee: 'PR', email: 'sydneydinh@berkeley.edu', image: '/headshots.jpg' },
    { name: 'Timothy Kwan', role: 'Operations Officer', committee: 'Operations', email: 'timothy.kwan.teemo@berkeley.edu', image: '/headshots.jpg' },
    { name: 'Maycy Phan', role: 'Operations Officer', committee: 'Operations', email: 'mayaycy@berkeley.edu', image: '/headshots.jpg' },
    { name: 'Krishna Sam', role: 'Internal Officer', committee: 'Internal', email: 'krishnaksam@berkeley.edu', image: '/headshots.jpg' },
    { name: 'Noah Brand', role: 'Internal Officer', committee: 'Internal', email: 'noahtbrand@berkeley.edu', image: '/headshots.jpg' },
    { name: 'Evangeline Lim', role: 'External Officer', committee: 'External', email: 'evangelinelim@berkeley.edu', image: '/headshots.jpg' },
  ];

  // removed scroll-based animations for stability

  return (
    <Box sx={{ position: 'relative' }}>
      <IntroSection sx={{
        backgroundImage: 'url(/historical4.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)' }} />
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '0 2px 16px rgba(0,0,0,0.5)'
            }}
          >
            About SASC
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: '700px',
              opacity: 0.95,
              lineHeight: 1.6,
              textShadow: '0 1px 8px rgba(0,0,0,0.4)'
            }}
          >
            Empowering Southeast Asian voices at Berkeley since 2000
          </Typography>
        </Container>
      </IntroSection>

      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Founded in 2000 by student organizers, the Southeast Asian Student Coalition (SASC) was created to
          uplift Southeast Asian voices at UC Berkeley. From day one, our mission has centered on supporting
          students, celebrating culture, and building power with our communities.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We provide mentorship and leadership opportunities, host cultural and educational programs, and
          advocate for resources and representation on campus. Beyond Berkeley, we collaborate with local
          organizations and community members to share knowledge, amplify stories, and strengthen the SEAA
          ecosystem in the Bay Area.
        </Typography>
        <Typography variant="body1">
          Two decades later, our guiding belief remains the same: when students are supported and culture is
          honored, we all thrive.
        </Typography>
      </Container>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Our History in Photos
        </Typography>
        <Grid container spacing={2}>
          {historicalImages.map((img) => (
            <Grid item xs={12} sm={6} md={4} key={img.src}>
              <Card sx={{ height: '100%' }}>
                <CardMedia component="img" image={img.src} alt={img.alt} sx={{ height: 180, objectFit: 'cover' }} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ pb: 10, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Get Involved
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Join our community, volunteer, or partner with us. Questions or ideas? Email us at
          <strong> UCB.SASC@gmail.com</strong>.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" href="/lead">Officer Recruitment</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" href="mailto:UCB.SASC@gmail.com?subject=Hello%20SASC">Email Us</Button>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Typography variant="h4" gutterBottom>
          Our Mission Today
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          SASC advances the wellbeing and leadership of Southeast Asian American (SEAA) students and
          communities at UC Berkeley and beyond. We provide culturally-grounded mentorship, advocate for
          equity in higher education, and build spaces for connection, healing, and celebration—so every
          student can thrive and lead with pride in their identity.
        </Typography>
      </Container>

      <Container sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Our Impact
        </Typography>
        <Grid container spacing={3}>
          {[ 
            { stat: '25+ years', desc: 'of sustained community impact' },
            { stat: '1,000+ students', desc: 'supported across our programs' },
            { stat: '50+ events/year', desc: 'centered on culture and community' },
            { stat: '200+ mentors & alumni', desc: 'in our growing network' },
          ].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.stat}>
              <Card sx={{ height: '100%', p: 2, textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {item.stat}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Our Values
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              title: 'Community',
              body: 'We cultivate belonging and mutual care across generations of SEAA students and families.'
            },
            {
              title: 'Culture',
              body: 'We uplift our histories, languages, and traditions as sources of strength and knowledge.'
            },
            {
              title: 'Advocacy',
              body: 'We organize for resources, representation, and educational equity for our communities.'
            },
          ].map((value) => (
            <Grid item xs={12} md={4} key={value.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {value.body}
                  </Typography>
                </CardContent>
              </Card>
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
                <CardMedia component="img" image={member.image} alt={member.name} sx={{ height: 200, objectFit: 'cover' }} />
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
                <CardMedia component="img" image={member.image} alt={member.name} sx={{ height: 180, objectFit: 'cover' }} />
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

      <Container>
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
                  <Typography variant="body2" color="primary.main" sx={{ fontWeight: 500 }}>
                    {program.goals}
                  </Typography>
                </CardContent>
              </ProgramCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Looking Forward
        </Typography>
        <Typography variant="body1">
          We envision a campus—and a world—where SEAA students are fully resourced, represented, and
          celebrated. In the years ahead, SASC will deepen partnerships across campus, expand mentorship and
          professional pipelines, and continue telling our stories with care and power.
        </Typography>
      </Container>

      <Footer />
    </Box>
  );
};

export default About; 