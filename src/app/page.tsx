'use client';

import React from 'react';
import { Box } from '@mui/material';

export default function HomePage() {
  return (
    <Box sx={{ transform: 'translateY(10px)' }}>
      <h1 className="text-3xl font-bold mb-4">Welcome to the the Full Rank band&apos;s Official Site</h1>
      <p className="text-gray-700">
        This is where most of the content of the site will go. Stay tuned for updates, music releases, and more!
      </p>
    </Box>
  );
}
