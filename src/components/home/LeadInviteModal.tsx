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
      <DialogTitle>Lead with SASC · Fall 2026</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Recruiting for Internal, External, Ops, and PR. Branch details are on the Lead page.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dates aren&apos;t set. Follow @ucbsasc for updates.
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
          See the branches
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
          Follow @ucbsasc
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LeadInviteModal;
