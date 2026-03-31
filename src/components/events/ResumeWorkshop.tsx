import { Button, Stack, Typography, Box, Chip, TextField, Alert } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState } from 'react';
import { addEventRsvp } from '../../firebase/rsvps';
import { auth } from '../../firebase/config';
import { signInAnonymously } from 'firebase/auth';
import EventCard from './EventCard';

const ResumeWorkshop = () => {
  const isPast = false;
  const title = 'Resume Workshop';
  const details =
    "SASC is holding a free, constructive resume workshop run by our PR Director. It's the perfect opportunity to make sure your resume and portfolio are ready for summer internships or full-time roles.";
  const location = 'Wheeler 126, UC Berkeley';
  // April 1, 2026 6:00 PM - 7:00 PM PDT
  const gcalUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' +
    encodeURIComponent(title) +
    '&dates=20260402T010000Z/20260402T020000Z&details=' +
    encodeURIComponent(details) +
    '&location=' +
    encodeURIComponent(location);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const isFirebaseConfigured = Boolean(
    import.meta.env.VITE_FIREBASE_API_KEY &&
      import.meta.env.VITE_FIREBASE_PROJECT_ID &&
      import.meta.env.VITE_FIREBASE_APP_ID
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!name.trim() || !email.trim()) {
      setError('Please enter your name and email.');
      return;
    }
    try {
      setSubmitting(true);
      if (!auth.currentUser) {
        try {
          await signInAnonymously(auth);
        } catch (authErr: any) {
          console.error('Anonymous auth failed:', authErr?.code, authErr?.message, authErr);
        }
      }
      await addEventRsvp('resume-workshop-2026-04-01', name.trim(), email.trim());
      setSuccess('Thanks! Your RSVP has been received.');
      setName('');
      setEmail('');
    } catch (err: any) {
      console.error('RSVP submit failed:', err?.code, err?.message, err);
      setError(`${err?.code || 'Error'}: ${err?.message || 'Something went wrong. Please try again.'}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <EventCard
      statusLabel="UPCOMING"
      statusBgColor="primary.main"
      borderColor="primary.light"
      minMediaHeight={520}
      maxMediaHeight={640}
      image={{
        src: '/resume-workshop.jpeg',
        alt: 'Resume Workshop flyer',
        sx: { objectPosition: 'center' },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 800, letterSpacing: '-0.02em' }}>
            {title}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mb: 3 }} flexWrap="wrap" useFlexGap>
            <Chip
              icon={<AccessTimeIcon />}
              label="Wed, April 1 • 6:00 PM - 7:00 PM"
              color="primary"
              variant="outlined"
              sx={{ mb: 1 }}
            />
            <Chip
              icon={<LocationOnIcon />}
              label="Wheeler 126"
              color="primary"
              variant="outlined"
              sx={{ mb: 1 }}
            />
          </Stack>

          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.6 }}>
            SASC is holding a free, constructive resume workshop this Wednesday, from 6–7 PM in Wheeler 126.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            The workshop will be run by SASC&apos;s PR Director, and it&apos;s the perfect opportunity to ensure your resume and portfolio are
            up to spec to get hired for a full time or summer role.
          </Typography>

          {!isPast && (
            <Box
              sx={{
                mt: 2.5,
                p: 2,
                borderRadius: 2,
                bgcolor: 'action.hover',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }} justifyContent="space-between" spacing={1} sx={{ mb: 1.5 }}>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                    RSVP
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Get updates and help us plan.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  color="primary"
                  href={gcalUrl}
                  target="_blank"
                  startIcon={<CalendarMonthIcon />}
                  sx={{ alignSelf: { xs: 'flex-start', sm: 'center' } }}
                >
                  Add to Calendar
                </Button>
              </Stack>

              {!isFirebaseConfigured && (
                <Alert severity="warning" sx={{ mb: 1.5 }}>
                  RSVP temporarily unavailable. Site configuration is incomplete.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems="stretch">
                  <TextField
                    label="Name"
                    size="small"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                      flex: 1,
                      '& .MuiInputBase-input': { py: 0.75, fontSize: '0.95rem' },
                      '& .MuiInputLabel-root': { fontSize: '0.9rem' },
                    }}
                  />
                  <TextField
                    label="Email"
                    type="email"
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      flex: 1,
                      '& .MuiInputBase-input': { py: 0.75, fontSize: '0.95rem' },
                      '& .MuiInputLabel-root': { fontSize: '0.9rem' },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={submitting || !isFirebaseConfigured}
                    sx={{ minWidth: { sm: 140 } }}
                  >
                    {submitting ? 'Submitting…' : 'RSVP'}
                  </Button>
                </Stack>
              </Box>

              {(success || error) && (
                <Box sx={{ mt: 1.5 }}>
                  {success && <Alert severity="success">{success}</Alert>}
                  {error && <Alert severity="error">{error}</Alert>}
                </Box>
              )}
            </Box>
          )}
        </Box>

        <Box sx={{ display: { xs: 'block', sm: 'none' }, mt: 2 }} />
      </Box>
    </EventCard>
  );
};

export default ResumeWorkshop;

