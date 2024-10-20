import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Filters from './components/Filters';
import JobList from './components/JobList';
import { useState } from 'react';

function App() {
  const [filters, setFilters] = useState({ skills: '', city: '' });

  const handleSearch = (skills: string, city: string) => {
    setFilters({ skills, city });
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box mt={4}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Sidebar />
            </Grid >
            <Grid  item xs={9}>
              <Filters onSearch={handleSearch} />
              <JobList filters={filters} />
            </Grid>
          </Grid >
        </Box>
      </Container>
    </>
  );
}

export default App;

