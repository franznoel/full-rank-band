import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';

export default function Navigation() {
  const navItems = [
    { text: 'Videos', icon: <VideoLibraryIcon />, href: '/videos' },
    { text: 'Photos', icon: <PhotoLibraryIcon />, href: '/photos' },
    { text: 'Music', icon: <MusicNoteIcon />, href: '/music' },
    { text: 'Bio', icon: <PersonIcon />, href: '/bio' },
    { text: 'Tours', icon: <EventIcon />, href: '/tours' },
  ];

  return (
    <List sx={{ width: '100%' }}>
      {navItems.map((item) => (
        <ListItem
          key={item.text}
          sx={{
            '&:hover': {
              backgroundColor: 'grey.200',
            },
          }}
        >
          <Link href={item.href} passHref style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', width: '100%' }}>
            <ListItemIcon sx={{ color: 'primary.main' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
