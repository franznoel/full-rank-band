'use client'; // If you need client-side features like hooks or dynamic rendering

import React from 'react';
import { Box, Typography } from '@mui/material';

export default function VideosPage() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Videos
      </Typography>
      <Typography variant="body1">
        Here you can find all the videos of the Full Rank Band. Stay tuned for the latest updates!
      </Typography>
      {/* Add video content here */}
    </Box>
  );
}
