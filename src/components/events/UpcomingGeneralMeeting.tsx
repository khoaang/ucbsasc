import { Button, Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventCard from './EventCard';

const UpcomingGeneralMeeting = () => {
    return (
        <EventCard
            statusLabel="UPCOMING"
            statusBgColor="primary.main"
            borderColor="primary.light"
            image={{ src: '/student-gathering.jpg', alt: 'SASC General Meeting' }}
        >
            <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
                Spring General Meeting
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                Date &amp; time to be announced • Evening
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                We’re lining up agenda items, speakers, and community announcements for our first general meeting of the new term. Expect
                updates from every branch, space to connect with fellow members, and a sneak peek at upcoming programs.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Finalized details will drop soon—make sure you’re on our newsletter and follow us on Instagram for the official date, location,
                and RSVP info.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <Button variant="contained" color="primary" disabled startIcon={<CalendarMonthIcon />}>
                    Details Coming Soon
                </Button>
                <Button variant="outlined" color="primary" href="mailto:ucb.sasc@gmail.com?subject=General%20Meeting%20Interest">
                    Ask to be Notified
                </Button>
            </Stack>
        </EventCard>
    );
};

export default UpcomingGeneralMeeting;
