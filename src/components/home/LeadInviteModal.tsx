import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

type LeadInviteModalProps = {
  open: boolean;
  onClose: () => void;
};

const LeadInviteModal = ({ open, onClose }: LeadInviteModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Lead with SASC</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" sx={{ mb: 2 }}>
          SASComm brings together students who care about Southeast Asian community building, storytelling, and advocacy. Roles are
          flexible, collaborative, and grounded in shared responsibility.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          Curious about the work? Check out the leadership page to see branch focus areas, expectations, and ways to connect before the
          next recruitment cycle.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
          Recruitment for the last cycle has closed. Follow @ucbsasc or join the mailing list for the next timeline.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ flexWrap: 'wrap', gap: 1.5, justifyContent: 'flex-end', px: 3, py: 2 }}>
        <Button onClick={onClose} color="inherit">
          Not Now
        </Button>
        <Button
          component="a"
          href="/lead"
          variant="contained"
          color="primary"
          onClick={onClose}
        >
          Learn More
        </Button>
        <Button
          component="a"
          href="https://www.instagram.com/ucbsasc"
          target="_blank"
          rel="noopener"
          variant="outlined"
          color="primary"
          onClick={onClose}
        >
          DM @ucbsasc
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LeadInviteModal;
