import { Modal, Box, Typography, TextField, Button, styled, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import MemberRegistration from './MemberRegistration';

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1)
  }
}));

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(4),
  maxWidth: 500,
  width: '90%',
  maxHeight: '90vh',
  overflow: 'auto',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    width: '95%',
    '& .MuiTypography-h4': {
      fontSize: '1.5rem'
    }
  }
}));

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

interface MailingListModalProps {
  open: boolean;
  onClose: () => void;
}

const MailingListModal = ({ open, onClose }: MailingListModalProps) => {
  const [tabValue, setTabValue] = useState(0);
  const [memberRegistrationOpen, setMemberRegistrationOpen] = useState(false);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleMemberRegistrationSuccess = () => {
    setMemberRegistrationOpen(false);
    onClose();
  };

  return (
    <>
      <StyledModal open={open} onClose={onClose}>
        <ModalContent>
          <Typography variant="h4" gutterBottom>
            Join SASC
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Choose how you'd like to get involved with our community
          </Typography>
          
          <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
            <Tab label="Mailing List" />
            <Tab label="Full Membership" />
          </Tabs>

          {tabValue === 0 && (
            <>
              <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                <span style={{ color: '#ff0000' }}>*</span> indicates required
              </Typography>
              <Form
                action="https://instagram.us10.list-manage.com/subscribe/post?u=0811b89d9bab27930c913891f&amp;id=e2f3adc049&amp;f_id=00a447e4f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_self"
              >
                <TextField
                  required
                  id="mce-EMAIL"
                  name="EMAIL"
                  label="Email Address"
                  type="email"
                  fullWidth
                />
                <TextField
                  id="mce-FNAME"
                  name="FNAME"
                  label="First Name"
                  fullWidth
                />
                <TextField
                  id="mce-LNAME"
                  name="LNAME"
                  label="Last Name"
                  fullWidth
                />
                <input
                  type="text"
                  name="b_0811b89d9bab27930c913891f_e2f3adc049"
                  tabIndex={-1}
                  style={{ position: 'absolute', left: '-5000px' }}
                  aria-hidden="true"
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Subscribe to Mailing List
                </Button>
              </Form>
            </>
          )}

          {tabValue === 1 && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" gutterBottom>
                Become a Full Member
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                Join as a full member to get access to exclusive events, mentorship opportunities, 
                and be part of our close-knit community.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  onClose();
                  setMemberRegistrationOpen(true);
                }}
                sx={{ mt: 2 }}
              >
                Register as Member
              </Button>
            </Box>
          )}
        </ModalContent>
      </StyledModal>

      <MemberRegistration
        open={memberRegistrationOpen}
        onClose={() => setMemberRegistrationOpen(false)}
        onSuccess={handleMemberRegistrationSuccess}
      />
    </>
  );
};

export default MailingListModal;
