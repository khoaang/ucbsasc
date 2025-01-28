import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRef } from 'react';
import Footer from '../components/Footer';

const ProgramCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5)
  }
}));

const TimelineSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  background: '#000',
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',
    padding: theme.spacing(8, 0)
  }
}));

const IntroSection = styled(Box)({
  position: 'relative',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#000',
  color: 'white',
  overflow: 'hidden',
});

const ImageContainer = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  width: '45%',
  height: '70vh',
  overflow: 'hidden',
  borderRadius: '20px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    width: '100%',
    height: '40vh',
    marginTop: theme.spacing(4)
  }
}));

const ContentContainer = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  width: '50%',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}));

const StatBox = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const MasonryGrid = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0.5rem',
  padding: '1rem',
  opacity: 0.3,
  zIndex: 0,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.25rem',
    padding: '0.5rem'
  }
}));

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 15,
    stiffness: 30
  });

  const historicalContent = [
    {
      year: '1975-1980',
      title: 'Southeast Asian Refugee Crisis',
      description: 'Following the Vietnam War and subsequent conflicts in Southeast Asia, over 1.2 million refugees fled to the United States, with many families settling in California. This mass migration created unique challenges and needs within the community.',
      image: '/historical1.jpg',
      stats: ['1.2M+ refugees', '48% under poverty line', '35% limited English proficiency']
    },
    {
      year: '1980s',
      title: 'Growing Community Needs',
      description: 'As the Southeast Asian population grew in the Bay Area, first-generation students at UC Berkeley faced unprecedented challenges. Many struggled with cultural identity, limited academic resources, and lack of mental health support tailored to their experiences.',
      image: '/historical2.jpg',
      stats: ['15% college graduation rate', '70% first-generation students', '82% reported discrimination']
    },
    {
      year: '1999',
      title: 'SASC\'s Formation',
      description: 'SASC emerged as a response to these challenges, founded by passionate student leaders who recognized the urgent need for representation and support. They created a space where Southeast Asian students could find community, preserve their cultural heritage, and advocate for their needs.',
      image: '/historical3.jpg',
      stats: ['25+ years of impact', '1000+ students served', '4 flagship programs']
    }
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

  // Pre-calculate transforms for each section
  const sectionTransforms = historicalContent.map((_, index) => ({
    scale: useTransform(
      smoothProgress,
      [
        index * 0.25,
        index * 0.25 + 0.05,
        index * 0.25 + 0.2,
        index * 0.25 + 0.25
      ],
      [0.8, 1, 1, 0.8]
    ),
    opacity: useTransform(
      smoothProgress,
      [
        index * 0.25,
        index * 0.25 + 0.08,
        index * 0.25 + 0.17,
        index * 0.25 + 0.25
      ],
      [0, 1, 1, 0]
    ),
    y: useTransform(
      smoothProgress,
      [
        index * 0.25,
        index * 0.25 + 0.05,
        index * 0.25 + 0.2,
        index * 0.25 + 0.25
      ],
      [50, 0, 0, -50]
    ),
    imageScale: useTransform(
      smoothProgress,
      [
        index * 0.25,
        index * 0.25 + 0.08,
        index * 0.25 + 0.17,
        index * 0.25 + 0.25
      ],
      [1.1, 1, 1, 1.1]
    ),
    imageRotate: useTransform(
      smoothProgress,
      [
        index * 0.25,
        index * 0.25 + 0.08,
        index * 0.25 + 0.17,
        index * 0.25 + 0.25
      ],
      [-2, 0, 0, 2]
    )
  }));

  return (
    <Box ref={containerRef} sx={{ position: 'relative' }}>
      <IntroSection>
        <MasonryGrid>
          {[
            '/historical1.jpg',
            '/historical2.jpg',
            '/historical3.jpg',
            '/historical4.webp',
            '/historical5.webp',
            '/historical6.jpg',
            '/historical7.jpg',
            '/historical8.jpg',
            '/historical9.jpg'
          ].map((src, index) => (
            <motion.div
              key={src}
              style={{
                gridColumn: `span ${index % 3 + 1}`,
                height: `${250 + (index % 4) * 50}px`,
                overflow: 'hidden',
                borderRadius: '1rem',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
            >
              <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          ))}
        </MasonryGrid>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 3,
                background: 'linear-gradient(45deg, #FFF 30%, #AAA 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Our Story
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                maxWidth: '600px',
                opacity: 0.8,
                lineHeight: 1.5
              }}
            >
              25 years of empowering Southeast Asian voices at Berkeley
            </Typography>
          </motion.div>
        </Container>
      </IntroSection>

      <Box sx={{ bgcolor: '#000', color: 'white', minHeight: '300vh' }}>
        {historicalContent.map((content, index) => (
          <TimelineSection key={content.year}>
            <Container sx={{ position: 'relative' }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                position: 'relative',
                flexDirection: { xs: 'column', md: 'row' }
              }}>
                <ContentContainer
                  style={{
                    scale: sectionTransforms[index].scale,
                    opacity: sectionTransforms[index].opacity
                  }}
                >
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Typography 
                      variant="h6" 
                      className="text-gradient"
                      sx={{ mb: 2, fontFamily: 'Playfair Display' }}
                    >
                      {content.year}
                    </Typography>
                    <Typography 
                      variant="h3" 
                      gutterBottom
                      sx={{ 
                        fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' }
                      }}
                    >
                      {content.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontSize: { xs: '1rem', md: '1.2rem' }, 
                        opacity: 0.9, 
                        mb: 4 
                      }}
                    >
                      {content.description}
                    </Typography>
                    
                    {content.stats.map((stat, i) => (
                      <StatBox
                        key={stat}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Typography variant="h4" className="text-gradient">
                          {stat}
                        </Typography>
                      </StatBox>
                    ))}
                  </motion.div>
                </ContentContainer>

                <ImageContainer
                  style={{
                    y: sectionTransforms[index].y,
                    opacity: sectionTransforms[index].opacity,
                    scale: sectionTransforms[index].imageScale,
                    rotate: sectionTransforms[index].imageRotate
                  }}
                >
                  <motion.img
                    src={content.image}
                    alt={content.title}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                      transition: 'opacity 0.3s ease',
                      '&:hover': {
                        opacity: 0.7
                      }
                    }}
                  />
                </ImageContainer>
              </Box>
            </Container>
          </TimelineSection>
        ))}
      </Box>

      <Container>
        <Typography variant="h4" gutterBottom>
          Our Mission Today
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Today, SASC continues to strengthen our Southeast Asian American (SEAA) communities as we face unique challenges and hurdles. Through our various programs and initiatives, we create spaces for cultural celebration, academic support, and community building.
        </Typography>
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
          As we look into the future, SASC will continue its duty to support those who are here already and those who will carry on the torch of our SEAA communities.
        </Typography>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default About; 