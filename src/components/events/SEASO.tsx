import { Button, Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventCard from './EventCard';

const rsvpHref = 'https://forms.gle/hJtHBtT5BRexuVgj8';

const calendarHref =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  '&text=SEASO+2026' +
  '&dates=20260903T230000Z/20260904T040000Z' +
  '&details=Southeast+Asian+Student+Orientation+co-hosted+by+AAPA+and+SASC.+Dinner,+workshops,+campus+resources,+and+SEA+org+tabling.+RSVP:+https://forms.gle/hJtHBtT5BRexuVgj8' +
  '&location=Tilden+Room,+MLK+Student+Union+5th+Floor,+UC+Berkeley';

const SEASO = () => {
  return (
    <EventCard
      statusLabel="UPCOMING"
      statusBgColor="primary.main"
      borderColor="primary.main"
      minMediaHeight={420}
      maxMediaHeight={520}
      image={{
        src: '/grid/workshop.jpg',
        alt: 'Students tabling and talking on campus lawn',
        sx: { objectPosition: 'center 72%' },
      }}
    >
      <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
        SEASO 2026
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 0.5 }}>
        5th Annual New Southeast Asian Student Orientation
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
        Thursday, September 3, 2026 · 4:00–9:00 PM · Tilden Room (MLK 5th Floor)
      </Typography>

      <Typography variant="body1" sx={{ mb: 1.5 }}>
        AAPA and SASC are inviting new students to SEASO. Come meet other new and current SEA students, learn about
        campus resources, and connect with SEA-serving orgs over dinner (we’ll also have a late-night snack).
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
        Our programming and materials center first-gen and low-income students, and those impacted by the American Wars
        in Southeast Asia. Whatever your background, you’re welcome to apply.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
        Space is limited. Priority deadline is August 24; applications after that are reviewed case by case. We’ll email
        you to confirm if you’re in.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        You’ll need to be signed in with your Berkeley email to submit the form.
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} flexWrap="wrap" useFlexGap>
        <Button variant="contained" color="primary" href={rsvpHref} target="_blank" rel="noopener">
          RSVP to SEASO
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href={calendarHref}
          target="_blank"
          rel="noopener"
          startIcon={<CalendarMonthIcon />}
        >
          Add to Calendar
        </Button>
        <Button
          variant="text"
          color="primary"
          href="https://www.instagram.com/calaapa/"
          target="_blank"
          rel="noopener"
        >
          @calaapa
        </Button>
      </Stack>
    </EventCard>
  );
};

export default SEASO;
