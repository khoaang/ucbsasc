import { Button, Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventCard from './EventCard';

const SEAGrad26 = () => {
    return (
        <EventCard
            statusLabel="UPCOMING EVENT"
            statusBgColor="primary.main"
            borderColor="primary.main"
            minMediaHeight={500}
            maxMediaHeight={600}
            image={{ src: '/seagrad26.png', alt: 'Southeast Asian Graduation 2026', sx: { objectFit: 'contain', objectPosition: 'center', bgcolor: 'black' } }}
        >
            <Typography variant="h5" component="h2" sx={{ mb: 0.5 }}>
                Class of 2026 - UC Berkeley SEAGrad
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                May 9, 2026 • 6:00 PM - 8:00 PM PDT
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
                Are you a Cal Southeast Asian identifying student looking for a ceremony that celebrates you? 
                SEAGrad is an annual ceremony hosted by SASC that celebrates the graduating Southeast Asian students within the UC Berkeley community. 
                This form is available for Cal graduates (Bachelor's or Graduate Degree) graduating in Spring/Fall 2026.
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
                ** Please fill out this form by Saturday, May 2nd 8PM PST!
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
                Join us for free food, drinks, gifts, and festivities!
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontSize: '0.8rem', color: 'text.secondary' }}>
                *Note: Cap and gown rental reimbursements ($50) are available for eligible first-generation/low-income graduates. As funds are limited, proof (FAFSA EFC, EBT, etc.) is required. Reimbursement is contingent upon your attendance at the SEAGrad ceremony.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Location: 1 Alumni House<br />
                Berkeley, CA 94720
            </Typography>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                justifyContent="flex-start"
                sx={{ mb: 2 }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    href="https://ucbsasc.org/seagrad2026"
                    target="_blank"
                    size="small"
                >
                    RSVP
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Class+of+2026+-+UC+Berkeley+SEAGrad&dates=20260510T010000Z/20260510T030000Z&details=Are+you+a+Cal+Southeast+Asian+identifying+student+looking+for+a+ceremony+that+celebrates+you?&location=1+Alumni+House,+Berkeley,+CA+94720"
                    target="_blank"
                    size="small"
                    startIcon={<CalendarMonthIcon />}
                >
                    Add to Calendar
                </Button>
            </Stack>
        </EventCard>
    );
};

export default SEAGrad26;
