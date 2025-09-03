import { useState } from 'react';
import { Button, Checkbox, Dialog, DialogContent, FormControlLabel, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { motion, AnimatePresence } from 'framer-motion';
import MemberRegistration from '../MemberRegistration';

interface GeneralMeetingModalProps {
  open: boolean;
  onClose: () => void;
}

const GeneralMeetingModal = ({ open, onClose }: GeneralMeetingModalProps) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [memberOpen, setMemberOpen] = useState(false);


  const handleClose = () => {
    if (dontShowAgain) {
      try { localStorage.setItem('gm_dismissed', '1'); } catch {}
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          overflow: 'visible',
          background: 'linear-gradient(180deg, rgba(9, 12, 22, 0.96) 0%, rgba(9, 12, 22, 0.92) 100%)',
          backdropFilter: 'blur(8px)',
          borderRadius: 3,
          border: '1px solid rgba(255,255,255,0.08)'
        }
      }}
    >
      <AnimatePresence>
        {open && (
          <DialogContent sx={{ position: 'relative', p: { xs: 3, sm: 4 } }}>
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', right: 8, top: 8, color: 'rgba(255,255,255,0.7)' }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.8)', letterSpacing: 2 }}>
                Upcoming Event
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mt: 1,
                  mb: 1.5,
                  color: 'white',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}
              >
                SASC General Meeting
              </Typography>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2 }}>
                  September 17, 2024 • 8:00 PM - 9:00 PM
                </Typography>

                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2 }}>
                  Join us for our first general meeting of the semester! Get introduced to SASC, connect with
                  other orgs, have fun, and enjoy free food.
                </Typography>

                <Stack spacing={1.2} sx={{ color: 'rgba(255,255,255,0.9)', mb: 3 }}>
                  <Typography>- Meet the SASC community</Typography>
                  <Typography>- Connect with other Southeast Asian orgs</Typography>
                  <Typography>- Games and community bonding</Typography>
                  <Typography>- Free food and refreshments</Typography>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems="center" justifyContent="center">
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => setMemberOpen(true)}
                    sx={{ fontWeight: 700 }}
                  >
                    Sign Up
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    startIcon={<CalendarMonthIcon />}
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=SASC+General+Meeting&dates=20240918T030000Z/20240918T040000Z&details=Join+us+for+our+first+general+meeting+of+the+semester!+Meet+the+SASC+community,+connect+with+other+orgs,+have+fun,+and+eat+delicious+food.&location=TBA"
                    target="_blank"
                    sx={{
                      borderColor: 'rgba(255,255,255,0.6)',
                      color: 'rgba(255,255,255,0.95)',
                      '&:hover': { borderColor: 'rgba(255,255,255,0.9)', backgroundColor: 'rgba(255,255,255,0.06)' }
                    }}
                  >
                    Add to Calendar
                  </Button>
                  <Button variant="text" color="inherit" onClick={handleClose}>
                    Close
                  </Button>
                </Stack>

                <MemberRegistration
                  open={memberOpen}
                  onClose={() => setMemberOpen(false)}
                  onSuccess={() => setMemberOpen(false)}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dontShowAgain}
                      onChange={(e) => setDontShowAgain(e.target.checked)}
                      sx={{ color: 'rgba(255,255,255,0.7)' }}
                    />
                  }
                  label={<Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>Don't show again</Typography>}
                  sx={{ mt: 1.5 }}
                />
              </motion.div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

export default GeneralMeetingModal;
