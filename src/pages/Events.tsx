import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button, Card, CardContent, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../components/Footer';
import { gradients } from '../theme/theme';
import GeneralMeeting from '../components/events/GeneralMeeting';
import NightMarket from '../components/events/NightMarket';
import SEAGrad from '../components/events/SEAGrad';
import SEAPicnic from '../components/events/SEAPicnic';
import SEAGrad26 from '../components/events/SEAGrad26';
import ProfessionalHeadshots from '../components/events/ProfessionalHeadshots';
import HalloweenMovieNight from '../components/events/HalloweenMovieNight';
import ProfessionalHeadshotsOct1Past from '../components/events/ProfessionalHeadshotsOct1Past';
import SEAHistoryWorkshop from '../components/events/SEAHistoryWorkshop';
import AnniversaryRecap from '../components/events/AnniversaryRecap';
import UpcomingGeneralMeeting from '../components/events/UpcomingGeneralMeeting';
import BondingEventPreview from '../components/events/BondingEventPreview';
import ProfessionalHeadshotsFeb2026 from '../components/events/ProfessionalHeadshotsFeb2026';
import GameNight from '../components/events/GameNight';
import TasteOfSeaNightMarket from '../components/events/TasteOfSeaNightMarket';
import ResumeWorkshop from '../components/events/ResumeWorkshop';

const Events = () => {
  // Define events with dates so we can auto-sort
  const upcomingEvents: { date: Date; key: string; render: () => JSX.Element }[] = [];

  const pastEvents: { date: Date; key: string; render: () => JSX.Element }[] = [
    { date: new Date('2026-05-09T18:00:00-07:00'), key: 'seagrad-2026', render: () => <SEAGrad26 /> },
    { date: new Date('2026-04-29T17:00:00-07:00'), key: 'seapicnic-2026', render: () => <SEAPicnic /> },
    { date: new Date('2026-04-06T18:00:00-07:00'), key: 'nightmarket-2026', render: () => <TasteOfSeaNightMarket /> },
    { date: new Date('2026-04-01T18:00:00-07:00'), key: 'resume-workshop-2026-04-01', render: () => <ResumeWorkshop /> },
    { date: new Date('2026-03-11T19:00:00-08:00'), key: 'game-night-2026', render: () => <GameNight /> },
    { date: new Date('2026-02-21T18:30:00-08:00'), key: 'bonding-2026', render: () => <BondingEventPreview /> },
    { date: new Date('2026-02-10T19:00:00-08:00'), key: 'gm-2026-spring', render: () => <UpcomingGeneralMeeting /> },
    { date: new Date('2026-02-06T14:00:00-08:00'), key: 'headshots-feb-2026', render: () => <ProfessionalHeadshotsFeb2026 /> },
    { date: new Date('2025-11-12T19:00:00-08:00'), key: 'anniv-2025', render: () => <AnniversaryRecap /> },
    { date: new Date('2025-10-28T19:00:00-07:00'), key: 'sea-history-2025', render: () => <SEAHistoryWorkshop /> },
    { date: new Date('2025-10-24T19:00:00-07:00'), key: 'halloween-2025', render: () => <HalloweenMovieNight /> },
    { date: new Date('2025-10-01T15:00:00-07:00'), key: 'headshots-2025-10-01', render: () => <ProfessionalHeadshotsOct1Past /> },
    // Legacy cards (no explicit date in component): keep near bottom
    { date: new Date('2024-09-17T20:00:00-07:00'), key: 'gm-2024', render: () => <GeneralMeeting /> },
    { date: new Date('2025-05-07T00:00:00-07:00'), key: 'headshots-may-2025', render: () => <ProfessionalHeadshots /> },
    { date: new Date('2025-05-15T00:00:00-07:00'), key: 'seagrad-2025', render: () => <SEAGrad /> },
    { date: new Date('2025-04-20T00:00:00-07:00'), key: 'nightmarket-2025', render: () => <NightMarket /> },
  ];

  // Sort upcoming ascending (soonest first), past descending (most recent first)
  upcomingEvents.sort((a, b) => a.date.getTime() - b.date.getTime());
  pastEvents.sort((a, b) => b.date.getTime() - a.date.getTime());
  return (
    <>
      <Container sx={{ py: 8 }}>
        <Typography variant="overline" sx={{ color: 'secondary.dark' }}>
          What&apos;s happening
        </Typography>
        <Typography variant="h2" component="h1" sx={{ color: 'info.main', mt: 1, mb: 2 }}>
          Events
        </Typography>
        <Box sx={{ width: 56, height: 4, borderRadius: 4, background: gradients.brand, mb: 3 }} />
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760, mb: 4 }}>
          Our 2025-26 programming has wrapped. We are getting ready for the next school year, and new events will be posted here once
          dates, rooms, and partner details are confirmed.
        </Typography>
        {upcomingEvents.length > 0 ? (
          <Box sx={{ display: 'contents' }}>
            {upcomingEvents.map((ev) => (
              <Box key={ev.key}>{ev.render()}</Box>
            ))}
          </Box>
        ) : (
          <Card sx={{ mb: 4, border: '1px solid', borderColor: 'divider' }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h5" component="h2" sx={{ mb: 1, fontWeight: 700 }}>
                Next school year is in the works
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 720 }}>
                Follow SASC or join the mailing list for the first wave of general meetings, cultural programs, community care spaces, and
                opportunities to get involved.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button variant="contained" href="https://www.instagram.com/ucbsasc" target="_blank" rel="noopener">
                  Follow @ucbsasc
                </Button>
                <Button variant="outlined" href="/contact">
                  Contact Us
                </Button>
              </Stack>
            </CardContent>
          </Card>
        )}

        {/* Collapsible past events */}
        <Accordion sx={{ mt: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Recent Event Archive</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {pastEvents.map((ev) => (
              <Box key={ev.key}>{ev.render()}</Box>
            ))}
          </AccordionDetails>
        </Accordion>
      </Container>
      <Footer />
    </>
  );
};

export default Events;
