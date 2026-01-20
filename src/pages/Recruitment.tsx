import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import {
  Campaign,
  Diversity3,
  EventAvailable,
  Groups,
  Lightbulb,
  VolunteerActivism,
  WorkspacePremium,
} from '@mui/icons-material';
import Footer from '../components/Footer';

const benefits = [
  {
    title: 'Lead with Purpose',
    description:
      'Shape the future of SASC programming, grow your leadership portfolio, and guide newer members with intention.',
    icon: <WorkspacePremium fontSize="large" color="inherit" />,
  },
  {
    title: 'Build Community',
    description:
      'Create affirming spaces for Southeast Asian students, collaborate with peers, and build friendships that last beyond campus.',
    icon: <Groups fontSize="large" color="inherit" />,
  },
  {
    title: 'Grow Your Impact',
    description:
      'Organize campaigns, develop workshops, and connect with community partners who value your voice and creativity.',
    icon: <Campaign fontSize="large" color="inherit" />,
  },
];

const branches = [
  {
    name: 'Internal Affairs',
    focus: 'Community Care & Mentorship',
    overview:
      'Cultivate the heartbeat of SASC through wellness programming, mentorship, and member development.',
    highlights: [
      {
        title: 'Key Focus Areas',
        bullets: [
          'Lead culturally grounded care spaces and restorative practices.',
          'Coordinate bonding events that keep our coalition tight-knit.',
          'Connect members with mentorship, wellness, and resource partners.',
        ],
      },
    ],
  },
  {
    name: 'External Affairs',
    focus: 'Community Partnerships & Advocacy',
    overview:
      'Bridge SASC with community organizations, campus departments, and coalitions fighting for Southeast Asian equity.',
    highlights: [
      {
        title: 'Key Focus Areas',
        bullets: [
          'Maintain relationships with Bay Area partners and grassroots orgs.',
          'Co-create events that uplift Southeast Asian voices on and off campus.',
          'Mobilize students around campaigns impacting the SEAA diaspora.',
        ],
      },
    ],
  },
  {
    name: 'Operations',
    focus: 'Logistics, Finance & Event Excellence',
    overview:
      'Keep SASC running smoothly with thoughtful budgeting, logistics, and behind-the-scenes magic that makes every event shine.',
    highlights: [
      {
        title: 'Key Focus Areas',
        bullets: [
          'Own timelines, run-of-show, and vendor coordination for flagship events.',
          'Build systems that make program leads feel supported and resourced.',
          'Manage purchasing, reimbursements, and ASUC funding proposals.',
          'Research grants and sponsorships that sustain our programs.',
          'Partner with directors on budget strategy and transparency.',
        ],
      },
    ],
  },
  {
    name: 'Public Relations',
    focus: 'Storytelling & Creative Strategy',
    overview:
      'Share our narrative boldly across campus and online through visuals, copywriting, and digital engagement.',
    highlights: [
      {
        title: 'Key Focus Areas',
        bullets: [
          'Create branded graphics, short-form video, and print collateral.',
          'Capture photo/video at events and manage our content archive.',
          'Experiment with new storytelling formats that highlight members.',
          'Craft newsletters, email campaigns, and social captions with voice.',
          'Plan social media rollouts that build anticipation for programs.',
          'Monitor insights to refine outreach and grow our community reach.',
        ],
      },
    ],
  },
];

const applicationSteps = [
  {
    title: 'Submit Interest Form',
    detail:
      'Tell us which branches excite you, the skills you bring, and how SASC can support your growth. We welcome all experiences.',
    icon: <Lightbulb color="primary" />,
  },
  {
    title: 'Meet the Directors',
    detail:
      'Participate in a conversational interview focused on alignment, support, and collaboration—not corporate vibes.',
    icon: <Diversity3 color="primary" />,
  },
  {
    title: 'Join Officer Onboarding',
    detail:
      'Kick off with leadership orientation, team bonding, and a semester roadmap so you feel confident and resourced from day one.',
    icon: <EventAvailable color="primary" />,
  },
  {
    title: 'Stay Connective & Impactful',
    detail:
      'Officer roles come with mentorship, professional development, and a community that shows up for each other.',
    icon: <VolunteerActivism color="primary" />,
  },
];

const Recruitment = () => {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 10, md: 14 },
          mb: 8,
          background: 'linear-gradient(120deg, #1b3a4b 0%, #2a6f97 45%, #61a5c2 100%)',
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.7rem', md: '3.75rem' },
            }}
          >
            Join the SASC Officer Team
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 720, lineHeight: 1.6 }}>
            Each branch is recruiting passionate officers ready to build community, execute programs, and
            uplift Southeast Asian voices at Cal. The impact—and the community—you gain is invaluable.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="https://forms.gle/FakeRecruitmentForm"
              target="_blank"
              rel="noopener"
            >
              Apply Now
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              href="mailto:ucb.sasc@gmail.com?subject=SASC%20Officer%20Recruitment"
            >
              Talk with a Director
            </Button>
          </Stack>
        </Container>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/grid.svg)',
            backgroundSize: 'cover',
            opacity: 0.1,
          }}
        />
      </Box>

      <Container sx={{ mb: 10 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/sascomm.jpg"
              alt="SASC community members gathered together"
              sx={{
                width: '100%',
                borderRadius: 3,
                boxShadow: (theme) => theme.shadows[6],
                objectFit: 'cover',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="h4">
                SASCommunity in Action
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Every branch of SASC thrives because of the people who show up for one another. Whether we are
                planning programs, welcoming new members, or celebrating community wins, our officers keep the
                energy grounded in care.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Bring your stories, skills, and curiosity—we will build on them together and lean on an extensive
                alumni network that spans organizers, educators, policy advocates, and creative professionals who
                continue to mentor and uplift our officers long after graduation.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ mb: 10 }}>
        <Typography variant="h4" gutterBottom>
          Why Lead with SASC
        </Typography>
        <Grid container spacing={3}>
          {benefits.map((benefit) => (
            <Grid item xs={12} md={4} key={benefit.title}>
              <Card
                sx={{
                  height: '100%',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    color: 'primary.main',
                    display: 'inline-flex',
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: 'primary.light',
                    width: 'fit-content',
                    opacity: 0.8,
                  }}
                >
                  {benefit.icon}
                </Box>
                <Typography variant="h5" component="h3">
                  {benefit.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {benefit.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ mb: 10 }}>
        <Typography variant="h4" gutterBottom>
          Branches Recruiting This Cycle
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 760 }}>
          Officer roles require approximately 6–8 hours per week, including weekly branch meetings and a
          general body commitment. We encourage applicants of all majors, class years, and lived experiences.
        </Typography>
        <Grid container spacing={4}>
          {branches.map((branch) => (
            <Grid item xs={12} md={6} key={branch.name}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                        {branch.name}
                      </Typography>
                      <Chip
                        label={branch.focus}
                        color="primary"
                        variant="outlined"
                        sx={{ mt: 1, fontWeight: 500 }}
                      />
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      {branch.overview}
                    </Typography>
                    {branch.highlights.map((section) => (
                      <Box key={section.title}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                          {section.title}
                        </Typography>
                        <Box
                          component="ul"
                          sx={{
                            pl: 2,
                            mt: 0,
                            display: 'grid',
                            gap: 0.75,
                            listStyleType: 'disc',
                          }}
                        >
                          {section.bullets.map((bullet) => (
                            <Typography
                              component="li"
                              variant="body2"
                              color="text.secondary"
                              key={bullet}
                              sx={{ listStyleType: 'inherit' }}
                            >
                              {bullet}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ mb: 12 }}>
        <Typography variant="h4" gutterBottom>
          Recruitment Journey
        </Typography>
        <Grid container spacing={3}>
          {applicationSteps.map((step) => (
            <Grid item xs={12} md={6} key={step.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                    {step.icon}
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {step.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {step.detail}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ mb: 10 }}>
        <Card sx={{ p: { xs: 3, md: 5 }, backgroundColor: 'rgba(33, 150, 243, 0.08)' }}>
          <Stack spacing={2}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Ready to bring your gifts to SASC?
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We value curiosity, humility, and a commitment to Southeast Asian empowerment more than existing
              titles. Let’s explore where your energy fits best—email us, drop by our general meetings, or
              send in the interest form so a director can reach out with next steps.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              <Button
                variant="contained"
                color="primary"
                href="https://forms.gle/FakeRecruitmentForm"
                target="_blank"
                rel="noopener"
              >
                Submit Interest
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="mailto:ucb.sasc@gmail.com?subject=SASC%20Officer%20Recruitment"
              >
                Connect with a Director
              </Button>
            </Stack>
          </Stack>
        </Card>
      </Container>

      <Footer />
    </Box>
  );
};

export default Recruitment;
