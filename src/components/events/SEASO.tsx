import { Button, Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventCard from './EventCard';

const calendarHref =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  '&text=SEASO+2026' +
  '&dates=20260903T230000Z/20260904T040000Z' +
  '&details=Southeast+Asian+Student+Orientation+for+first-year+and+transfer+students.' +
  '&location=Tilden+Room,+MLK+Student+Union,+UC+Berkeley';

const SEASO = () => {
  return (
    <EventCard
      statusLabel="UPCOMING"
      statusBgColor="primary.main"
      borderColor="primary.main"
      image={{
        src: '/grid/workshop.jpg',
        alt: 'Students gathered for a SASC workshop',
        sx: { objectPosition: 'center 30%' },
      }}
    >
      <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
        SEASO 2026
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 0.5 }}>
        Southeast Asian Student Orientation
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
        Wednesday, September 3, 2026 · 4:00–9:00 PM · Tilden Room
      </Typography>

      <Typography variant="body1" sx={{ mb: 1.5 }}>
        Orientation for first-year and transfer Southeast Asian students. Dinner, workshops, SEA RSO intros, and
        small groups with current students.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Agenda is still getting locked. Follow @ucbsasc for updates.
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <Button
          variant="contained"
          color="primary"
          href={calendarHref}
          target="_blank"
          rel="noopener"
          startIcon={<CalendarMonthIcon />}
        >
          Add to Calendar
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="https://www.instagram.com/ucbsasc"
          target="_blank"
          rel="noopener"
        >
          Updates on Instagram
        </Button>
      </Stack>
    </EventCard>
  );
};

export default SEASO;
