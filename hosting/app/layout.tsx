'use client';

import React from 'react';
import {
  CssBaseline,
  ThemeProvider,
  Box,
} from '@mui/material';
import theme from './theme';
import Navigation from './components/Navigation';
import Link from 'next/link';
import ImageComponent from './components/ImageComponent';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              minHeight: '100vh',
            }}
          >
            {/* Navigation */}
            <Box
              sx={{
                flex: { xs: '0 0 auto', md: '0 0 240px' }, // Fixed width on desktop
                backgroundColor: 'background.paper',
                borderRight: { md: '1px solid', borderColor: 'grey.300' },
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  color: 'text.primary',
                  textAlign: 'center',
                }}
              >
                <Link href='/' color="white">
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'primary.main',
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    <ImageComponent imageName='images/logo.png' />
                  </Box>
                </Link>
              </Box>
              {/* Navigation Links */}
              <Navigation />
            </Box>

            {/* Main Content */}
            <Box
              sx={{
                flex: 1,
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Main Content Area */}
              <Box sx={{ flexGrow: 1 }}>{children}</Box>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
