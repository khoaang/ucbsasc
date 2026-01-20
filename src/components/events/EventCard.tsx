import { Card, CardContent, CardMedia, Grid, Box, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

interface EventCardImage {
  src: string;
  alt: string;
  component?: React.ElementType;
  sx?: SxProps<Theme>;
}

interface EventCardProps {
  statusLabel?: string;
  statusBgColor?: string;
  statusColor?: string;
  borderColor?: string;
  minMediaHeight?: number;
  maxMediaHeight?: number;
  image?: EventCardImage;
  media?: ReactNode;
  mediaContainerSx?: SxProps<Theme>;
  children: ReactNode;
  cardSx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
}

const EventCard = ({
  statusLabel,
  statusBgColor = 'text.disabled',
  statusColor = 'white',
  borderColor = 'divider',
  minMediaHeight = 300,
  maxMediaHeight = 360,
  image,
  media,
  mediaContainerSx,
  children,
  cardSx,
  contentSx,
}: EventCardProps) => {
  return (
    <Card
      sx={{
        mb: 4,
        position: 'relative',
        border: '2px solid',
        borderColor,
        overflow: 'hidden',
        ...cardSx,
      }}
    >
      {statusLabel && (
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: statusBgColor,
            color: statusColor,
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            zIndex: 2,
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          }}
        >
          {statusLabel}
        </Box>
      )}

      <Grid container alignItems="stretch">
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              minHeight: minMediaHeight,
              maxHeight: maxMediaHeight,
              overflow: 'hidden',
              lineHeight: 0,
              ...mediaContainerSx,
            }}
          >
            {media ??
              (image && (
                <CardMedia
                  component={image.component ?? 'img'}
                  image={image.src}
                  alt={image.alt}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    ...image.sx,
                  }}
                />
              ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <CardContent sx={{ height: '100%', ...contentSx }}>{children}</CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EventCard;
