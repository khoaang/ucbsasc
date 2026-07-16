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
import PageHeader from '../components/PageHeader';
import {
  leadBenefits,
  leadBranches,
  leadApplicationSteps,
  BenefitIconKey,
  ApplicationStepIconKey,
} from '../data/lead';
import { directors as leadershipDirectors } from '../data/leadership';
import { usePageTitle } from '../hooks/usePageTitle';

const getBenefitIcon = (icon: BenefitIconKey) => {
  switch (icon) {
    case 'workspace':
      return <WorkspacePremium fontSize="large" color="inherit" />;
    case 'groups':
      return <Groups fontSize="large" color="inherit" />;
    case 'campaign':
      return <Campaign fontSize="large" color="inherit" />;
    default:
      return null;
  }
};

const getStepIcon = (icon: ApplicationStepIconKey) => {
  switch (icon) {
    case 'lightbulb':
      return <Lightbulb color="primary" />;
    case 'diversity':
      return <Diversity3 color="primary" />;
    case 'event':
      return <EventAvailable color="primary" />;
    case 'volunteer':
      return <VolunteerActivism color="primary" />;
    default:
      return null;
  }
};

const Lead = () => {
  usePageTitle('Lead');
  return (
    <Box>
      <PageHeader
        title="Lead with SASC"
        subtitle="SASComm is the student leadership group that keeps SASC’s programs running: planning events, telling our stories, supporting members, and pushing for resources."
        image="/sasc-old.jpg"
      >
        <Typography
          variant="body1"
          sx={{
            opacity: 0.9,
            maxWidth: 720,
            mt: 2,
            textShadow: '0 1px 10px rgba(0,0,0,0.45)',
          }}
        >
          We&apos;re looking for folks ready to run programs, help tell our stories, support members, and push for
          resources. Some weeks are relaxed; other weeks are full of meetings and last-minute tasks. We do it together.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            opacity: 0.85,
            maxWidth: 720,
            mt: 1.5,
            textShadow: '0 1px 6px rgba(0,0,0,0.35)',
            fontWeight: 600,
          }}
        >
          Recruitment for the last cycle has closed. Follow along for next year&apos;s timeline, or reach out if you want
          to learn where your energy could fit.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="inherit"
            size="large"
            href="https://www.instagram.com/ucbsasc"
            target="_blank"
            rel="noopener"
            sx={{
              color: 'primary.main',
              bgcolor: 'white',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
            }}
          >
            Follow @ucbsasc
          </Button>
          <Button variant="outlined" color="inherit" size="large" href="/contact">
            Contact Us
          </Button>
        </Stack>
      </PageHeader>

      <Container sx={{ mb: 8 }}>
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
                SASComm in Action
              </Typography>
              <Typography variant="body1" color="text.secondary">
                SASC feels like home because people show up, especially when it’s messy. We have wellness nights when people are burnt
                out, pull together teach-ins when something happens, and check in off the agenda to make sure folks are doing okay.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Bring your skills and curiosity. Our alumni include educators, organizers, policy advocates, and creatives who still
                stay involved and mentor us, and we try to offer that same care to new members.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                As a coalition, we host SEAsgiving with alumni, run history workshops, meet with other orgs for shared planning, and
                put on cultural events like Night Market and SEACF. For a clearer picture of what a year looks like,{' '}
                <Button
                  variant="text"
                  color="primary"
                  href="/events"
                  sx={{ p: 0, minWidth: 0, textTransform: 'none', fontWeight: 600 }}
                >
                  browse our event archive
                </Button>
                .
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Why Lead with SASC
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760, mb: 3 }}>
          Some weeks you might be printing flyers and lining up volunteers. Other weeks you’re processing what happened at a
          demonstration or cooking for SEAsgiving. We stay connected to the history of Southeast Asian organizing at Berkeley and
          respond to the issues people are facing today, while keeping each other accountable and cared for.
        </Typography>
        <Grid container spacing={3}>
          {leadBenefits.map((benefit) => (
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
                  {getBenefitIcon(benefit.icon)}
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

      <Container sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Ways to Lead
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 760 }}>
          Officer roles typically take about 5 hours a week between branch meetings, SASComm planning, and preparation. When big events
          or campaigns come up, we share the load; when things quiet down, we reset and plan ahead. If you’re curious about what the work
          actually looks like, reach out. All majors, class years, and lived experiences are welcome, especially folks grounded in
          Southeast Asian storytelling, mutual aid, and intergenerational care.
        </Typography>
        <Grid container spacing={4}>
          {leadBranches.map((branch) => {
            const branchDirectors = leadershipDirectors.filter(
              (member) => member.committee === branch.committee
            );

            return (
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
                      {branchDirectors.length > 0 && (
                        <Box>
                          <Typography variant="subtitle2" color="primary.main" sx={{ fontWeight: 600, mb: 0.5 }}>
                            Directors
                          </Typography>
                          <Stack spacing={0.5}>
                            {branchDirectors.map((director) => (
                              <Typography key={director.email} variant="body2" color="text.secondary">
                                {director.name} • {director.email.replace('@', ' AT ')}
                              </Typography>
                            ))}
                          </Stack>
                        </Box>
                      )}
                      {branch.keyFocus.length > 0 && (
                        <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                            Key Focus Areas
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
                            {branch.keyFocus.map((bullet) => (
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
                      )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            );
          })}
        </Grid>
      </Container>

      <Container sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          How to Get Involved
        </Typography>
        <Grid container spacing={3}>
          {leadApplicationSteps.map((step) => (
            <Grid item xs={12} md={6} key={step.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                    {getStepIcon(step.icon)}
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

      <Container sx={{ mb: 8 }}>
        <Card sx={{ p: { xs: 3, md: 5 }, backgroundColor: 'rgba(33, 150, 243, 0.08)' }}>
          <Stack spacing={2}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Thinking about leading with SASC next year?
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We care more about curiosity, humility, and a real commitment to community than job titles or resumes. Our pace
              shifts with the season, so follow our next recruitment cycle, DM us, or come to a general meeting when programming
              resumes.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              <Button
                variant="contained"
                color="primary"
                href="https://www.instagram.com/ucbsasc"
                target="_blank"
                rel="noopener"
              >
                Follow @ucbsasc
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
