import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const Sidebar: React.FC = () => (
  <List>
    <ListItemButton disabled>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Вакансии" />
    </ListItemButton>
    <ListItemButton disabled>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Курсы" />
    </ListItemButton>
  </List>
);

export default Sidebar;
