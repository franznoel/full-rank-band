import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

export default function PageTemplate({ title, description }: { title: string; description: string }) {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          {description}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: 'secondary.main',
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <Typography variant="h5">Placeholder 1</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: 'primary.main',
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <Typography variant="h5">Placeholder 2</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: 'secondary.main',
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <Typography variant="h5">Placeholder 3</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
