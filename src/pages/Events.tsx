import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../components/Footer';
import GeneralMeeting from '../components/events/GeneralMeeting';
import NightMarket from '../components/events/NightMarket';
import SEAGrad from '../components/events/SEAGrad';
import ProfessionalHeadshots from '../components/events/ProfessionalHeadshots';
import AnniversaryRSVP from '../components/events/AnniversaryRSVP';
import HalloweenMovieNight from '../components/events/HalloweenMovieNight';
import ProfessionalHeadshotsOct1Past from '../components/events/ProfessionalHeadshotsOct1Past';
import SEAHistoryWorkshop from '../components/events/SEAHistoryWorkshop';

const Events = () => {
  // Define events with dates so we can auto-sort
  const upcomingEvents: { date: Date; key: string; render: () => JSX.Element }[] = [
    { date: new Date('2025-10-24T19:00:00-07:00'), key: 'halloween-2025', render: () => <HalloweenMovieNight /> },
    { date: new Date('2025-10-28T19:00:00-07:00'), key: 'sea-history-2025', render: () => <SEAHistoryWorkshop /> },
    { date: new Date('2025-11-12T19:00:00-08:00'), key: 'anniv-2025', render: () => <AnniversaryRSVP /> },
  ];

  const pastEvents: { date: Date; key: string; render: () => JSX.Element }[] = [
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
        <Typography variant="h2" component="h1" gutterBottom>
          Events
        </Typography>
        {/* Upcoming events (auto-sorted) */}
        <Box sx={{ display: 'contents' }}>
          {upcomingEvents.map((ev) => (
            <Box key={ev.key}>{ev.render()}</Box>
          ))}
        </Box>

        {/* Collapsible past events */}
        <Accordion sx={{ mt: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Past Events</Typography>
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
