import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

export default function ToursPage() {
  const dates = [
    { date: 'Dec 10, 2024', time: '7:00 PM', location: 'Los Angeles, CA' },
    { date: 'Dec 15, 2024', time: '8:00 PM', location: 'New York, NY' },
    { date: 'Dec 20, 2024', time: '6:30 PM', location: 'Miami, FL' },
    { date: 'Jan 5, 2025', time: '9:00 PM', location: 'Chicago, IL' },
  ];

  return (
    <Box
      sx={{
        marginTop: { xs: 4, md: 0 },
        borderTop: { xs: '1px solid', md: 'none', borderColor: 'grey.300' },
        paddingTop: { xs: 2, md: 0 },
      }}
    >
      <Typography variant="h4" gutterBottom>
        Tours
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" fontWeight="bold">
                  Date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" fontWeight="bold">
                  Time
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" fontWeight="bold">
                  Location
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" fontWeight="bold">
                  Tickets
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dates.map((entry) => (
              <TableRow key={entry.date + entry.time}>
                <TableCell>
                  <Typography variant="body1">{entry.date}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{entry.time}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{entry.location}</Typography>
                </TableCell>
                <TableCell>
                  <Button variant="outlined">Get Tickets</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
