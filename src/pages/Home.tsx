import { Box, Container, Typography, useTheme, Grid, Button, IconButton, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Instagram } from '@mui/icons-material';
import MailingListModal from '../components/MailingListModal';
// import HalloweenModal from '../components/events/HalloweenModal';
import SeasgivingModal from '../components/events/SeasgivingModal';
import Footer from '../components/Footer';
// import GeneralMeetingModal from '../components/events/GeneralMeetingModal';

const HeroSection = styled(Box)({
  position: 'relative',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1
  }
});

const MasonryGrid = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
  padding: '1rem',
  opacity: 0.7,
  zIndex: 0
});

const ImageWrapper = styled(motion.div)({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '1rem',
  cursor: 'pointer',
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ContentOverlay = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '1rem',
  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
  color: 'white',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  '&:hover': {
    opacity: 1
  }
});

const Section = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(12, 0),
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',
    padding: theme.spacing(8, 0)
  }
}));



const images = [
  { src: '/cultural-dance.jpg', alt: 'Cultural Dance', span: 2 },
  { src: '/can-drive.jpg', alt: 'Can Drive', span: 1 },
  { src: '/workshop.jpg', alt: 'Workshop Session', span: 2 },
  { src: '/community-event.jpg', alt: 'Community Event', span: 1 },
  { src: '/student-gathering.jpg', alt: 'Student Gathering', span: 2 },
  { src: '/tabling.jpg', alt: 'Tabling', span: 1 }
];

const sections = [
  {
    title: "Community Building",
    description: `For over two decades, SASC has been a cornerstone of the Southeast Asian community at UC Berkeley. Since our founding in 2000, we've created lasting impact through initiatives like the SEA Summer Institute, cultural programming, and advocacy work. Our organization has empowered generations of Southeast Asian students to embrace their identities, share their stories, and create positive change. From our early days addressing educational access to our current role as a hub for cultural celebration and student support, SASC continues to strengthen and unite our community.`,
    instagramPost: "https://www.instagram.com/p/8mkvEjw-66",
    align: "left"
  },
  {
    title: "SEA Grad",
    description: `Celebrating the achievements and resilience of Southeast Asian graduates at UC Berkeley. Each year, we honor our graduating students with a special cultural graduation ceremony that brings together families, friends, and community members. This cherished tradition allows graduates to celebrate their academic accomplishments while embracing their cultural heritage. Through performances, speeches, and the presentation of cultural sashes, we recognize both individual achievements and the collective strength of our Southeast Asian community.`,
    instagramPost: "https://www.instagram.com/p/C-rbAaUOTC8",
    align: "right"
  },
  {
    title: "SEAMentorship",
    description: `Supporting Southeast Asian high school students on their path to higher education. Our dedicated mentors provide guidance on college applications, academic planning, and personal development. Through one-on-one mentoring sessions, workshops, and college preparation activities, we help students navigate the college admissions process while embracing their cultural identity. Our program creates a supportive environment where high school students can learn from experienced mentors who understand their unique experiences and challenges.`,
    instagramPost: "https://www.instagram.com/p/DKcasiB9DBOA7",
    align: "left"
  }
];

const Home = () => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const [mailingListOpen, setMailingListOpen] = useState(false);
  // const [halloweenOpen, setHalloweenOpen] = useState(false);
  const [seasgivingOpen, setSeasgivingOpen] = useState(false);

  // useEffect(() => {
  //   try {
  //     const dismissed = localStorage.getItem('halloween_dismissed');
  //     if (!dismissed) {
  //       const t = setTimeout(() => setHalloweenOpen(true), 1200);
  //       return () => clearTimeout(t);
  //     }
  //   } catch {}
  // }, []);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const forceShow = params.get('showSeasgiving') === '1';
      const dismissed = localStorage.getItem('seasgiving_dismissed_v2');
      if (forceShow || !dismissed) {
        const t = setTimeout(() => setSeasgivingOpen(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {}
  }, []);


  return (
    <Box ref={containerRef}>
      <HeroSection>
        <MasonryGrid>
          {images.map((img, index) => (
            <ImageWrapper
              key={img.src}
              style={{
                gridColumn: `span ${img.span}`,
                height: '250px'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <StyledImage src={img.src} alt={img.alt} />
              <ContentOverlay>
                <Typography variant="h6" color="white">{img.alt}</Typography>
              </ContentOverlay>
            </ImageWrapper>
          ))}
        </MasonryGrid>

        <Container sx={{ 
          position: 'relative', 
          zIndex: 2, 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center',
          px: { xs: 2, sm: 3, md: 4 } 
        }}>
          <motion.div className="hero-content">
            <Typography variant="h1" sx={{ 
              color: 'white',
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' },
              maxWidth: '800px',
              mb: { xs: 3, md: 4 }
            }}>
              Empowering Southeast Asian Voices at Berkeley
            </Typography>
            <Box sx={{ 
              mt: 4, 
              display: 'flex', 
              alignItems: 'center', 
              gap: 3 
            }} className="action-buttons">
              <Button
                variant="contained"
                size="large"
                onClick={() => setMailingListOpen(true)}
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                Join Our Mailing List
              </Button>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                or follow us on 
                <IconButton 
                  href="https://www.instagram.com/ucbsasc" 
                  target="_blank"
                  sx={{ color: 'white' }}
                >
                  <Instagram />
                </IconButton>
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </HeroSection>

      {/* General Meeting modal disabled since event has passed */}
      {/* <GeneralMeetingModal open={gmOpen} onClose={() => setGmOpen(false)} /> */}

      

      {sections.map((section, index) => (
        <Section key={section.title} sx={{ bgcolor: index % 2 ? 'background.paper' : 'background.default' }}>
          <Container>
            <Grid container spacing={3} alignItems="center" direction={section.align === 'right' ? 'row' : 'row-reverse'}>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: section.align === 'right' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography variant="h2" gutterBottom>{section.title}</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>{section.description}</Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: section.align === 'right' ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      maxWidth: '600px',
                      margin: '0 auto',
                      paddingTop: '70%',
                      borderRadius: '1rem',
                      overflow: 'hidden',
                      boxShadow: theme.shadows[10],
                      bgcolor: 'background.paper',
                    }}
                  >
                    <iframe
                      src={`${section.instagramPost}/embed`}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 0,
                      }}
                      scrolling="no"
                      allowFullScreen
                      loading="lazy"
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Section>
      ))}

      <Container sx={{ py: 12 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 6, textAlign: 'center' }}>
          Our Programs
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Southeast Asian Mentorship Program (SEAM)",
              description: "Supporting and guiding SEA high school students through cultural education and university preparation, SEAM helps students navigate their journey to higher education while staying connected to their heritage.",
            },
            {
              title: "Southeast Asian Orientation (SEASO)",
              description: "A welcoming space for incoming and current students to connect with SASC and the broader Southeast Asian community. Through community-bonding activities and alumni insights, we address the underrepresentation of Southeast Asian students at UC Berkeley.",
            },
            {
              title: "Southeast Asian Cultural Festival (SEACF)",
              description: "Our flagship celebration bringing together various Southeast Asian organizations to showcase the rich diversity of their cultures through traditional dances, music, and regional arts.",
            },
            {
              title: "SEAgraduation",
              description: "An intimate celebration honoring our graduating Southeast Asian seniors, providing a space where each student's unique journey and achievements are recognized and celebrated.",
            }
          ].map((program) => (
            <Grid item xs={12} md={6} key={program.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card sx={{
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>{program.title}</Typography>
                    <Typography variant="body2">{program.description}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ 
        bgcolor: 'background.paper', 
        py: 12,
        textAlign: 'center' 
      }}>
        <Container>
          <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
            Stay Connected
          </Typography>
          <Typography variant="body1" sx={{ mb: 6 }}>
            Join our mailing list to stay updated with SASC events and opportunities.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => setMailingListOpen(true)}
            sx={{
              backgroundColor: 'white',
              color: 'black',
              padding: '12px 32px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Join Our Mailing List
          </Button>
        </Container>
      </Box>
      <Footer />
      <MailingListModal 
        open={mailingListOpen}
        onClose={() => setMailingListOpen(false)}
      />
      {/* Halloween modal disabled since event has passed */}
      {/* <HalloweenModal
        open={halloweenOpen}
        onClose={() => setHalloweenOpen(false)}
      /> */}
      <SeasgivingModal
        open={seasgivingOpen}
        onClose={() => setSeasgivingOpen(false)}
      />
    </Box>
  );
};

export default Home;
