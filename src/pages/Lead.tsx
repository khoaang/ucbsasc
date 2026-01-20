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
      'Hold down wellness spaces, mentorship, and the rituals that keep our coalition accountable and grounded.',
    image: '/internal.jpg',
    directors: [
      { name: 'Ilene Park', email: 'parkilene AT berkeley.edu' },
      { name: 'April Le', email: 'le.april AT berkeley.edu' },
    ],
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
      'Bridge SASC with campus allies and grassroots partners to advance Southeast Asian equity together.',
    image: '/tabling.jpg',
    directors: [
      { name: 'Lan Vy Nguyen', email: 'nguyen_nvl AT berkeley.edu' },
    ],
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
      'Keep SASC steady through sharp budgeting, flexible logistics, and backstage care so every program lands.',
    image: '/operations.jpg',
    directors: [
      { name: 'Tyler Htut', email: 'tylerhtut7 AT berkeley.edu' },
    ],
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
      'Tell our stories loudly and creatively so campus feels Southeast Asian joy, grief, and resistance.',
    image: '/pr.jpg',
    directors: [
      { name: 'Khoa Nguyen', email: 'khoan AT berkeley.edu' },
      { name: 'Rinrada Maneenop', email: 'rinradamaneenop7 AT berkeley.edu' },
    ],
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

const Lead = () => {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          color: 'white',
          py: { xs: 12, md: 16 },
          mb: 8,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/sasc-old.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(4px)',
            transform: 'scale(1.05)',
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(120deg, rgba(219, 136, 64, 0.65), rgba(11, 34, 59, 0.85))',
            zIndex: 1,
          },
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.7rem', md: '3.75rem' },
            }}
          >
            Lead with SASC
          </Typography>
          <Typography
            variant="h5"
            sx={{
              opacity: 0.95,
              maxWidth: 780,
              lineHeight: 1.6,
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            }}
          >
            Since 2000 we’ve organized study-ins, direct actions, and healing spaces with the same urgency that
            launched SASC. SASComm keeps that fire going, calls out gaps on campus, and builds power rooted in
            Southeast Asian history and solidarity.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              maxWidth: 720,
              mt: 2,
              textShadow: '0 1px 10px rgba(0,0,0,0.45)',
            }}
          >
            We’re calling in folks ready to do the work—organize events, document our stories, support members,
            and push for resources. The pace shifts, but when it’s action time we move together and follow
            through.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="inherit"
              size="large"
              href="https://forms.gle/mnqaVF1UhXhoFKdJ6"
              target="_blank"
              rel="noopener"
              sx={{
                color: 'primary.main',
                bgcolor: 'white',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
              }}
            >
              Apply Now
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              href="https://www.instagram.com/ucbsasc"
              target="_blank"
              rel="noopener"
            >
              DM @ucbsasc
            </Button>
          </Stack>
        </Container>
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
                SASC feels like home because people show up—hosting wellness nights, running teach-ins, and
                pulling each other aside for real talk about justice and joy. SASComm keeps that culture sharp
                so our community stays resourced and loved.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Bring your stories, skills, and curiosity. Our alumni crew spans organizers, educators, policy
                advocates, and creatives who still mentor us years later, and we pay that love forward to every
                new member.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ mb: 10 }}>
        <Typography variant="h4" gutterBottom>
          Why Lead with SASC
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760, mb: 3 }}>
          SASComm isn’t about checking boxes; it’s about doing the work when the community calls. Some weeks
          mean late-night agenda builds or rally prep, others shift into debriefs and healing space. Either way,
          you’re alongside people who hold each other accountable and refuse to leave anyone behind.
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
          Officer roles average 6–8 hours per week with branch meetings and SASComm roundtables. When a big
          program or campaign is coming up we stretch together; when the calendar slows we recalibrate and plan
          the next push. All majors, class years, and lived experiences are welcome—especially folks grounded in
          Southeast Asian storytelling, mutual aid, and intergenerational care.
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
                    <Box
                      component="img"
                      src={branch.image}
                      alt={`${branch.name} moments`}
                      sx={{
                        width: '100%',
                        borderRadius: 2,
                        objectFit: 'cover',
                        height: { xs: 180, sm: 210 },
                        boxShadow: (theme) => theme.shadows[3],
                        objectPosition: 'center 40%',
                      }}
                    />
                    {branch.directors && branch.directors.length > 0 && (
                      <Box>
                        <Typography variant="subtitle2" color="primary.main" sx={{ fontWeight: 600, mb: 0.5 }}>
                          Directors
                        </Typography>
                        <Stack spacing={0.5}>
                          {branch.directors.map((director) => (
                            <Typography key={director.email} variant="body2" color="text.secondary">
                              {director.name} • {director.email}
                            </Typography>
                          ))}
                        </Stack>
                      </Box>
                    )}
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
              titles. Our pace shifts with the season, so let’s explore where your energy fits best—DM us, drop
              by our general meetings, or send in the interest form so a director can reach out with next steps.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              <Button
                variant="contained"
                color="primary"
                href="https://forms.gle/mnqaVF1UhXhoFKdJ6"
                target="_blank"
                rel="noopener"
              >
                Submit Interest
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="https://www.instagram.com/ucbsasc"
                target="_blank"
                rel="noopener"
              >
                DM @ucbsasc
              </Button>
            </Stack>
          </Stack>
        </Card>
      </Container>

      <Footer />
    </Box>
  );
};

export default Lead;
