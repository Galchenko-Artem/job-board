import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

interface FiltersProps {
  onSearch: (skills: string, city: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onSearch }) => {
  const [skills, setSkills] = useState('');
  const [city, setCity] = useState('');

  return (
    <Box display="flex" gap={2} mb={2}>
      <TextField
        label="Навыки"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        variant="outlined"
      />
      <TextField
        label="Город"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSearch(skills, city)}  
      >
        Поиск
      </Button>
    </Box>
  );
};

export default Filters;

