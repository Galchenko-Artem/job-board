import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

interface JobItemProps {
  title: string;
  salary: string;
  company: string;
}

const JobItem: React.FC<JobItemProps> = ({ title, salary, company }) => (
  <Card variant="outlined" sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography color="textSecondary">{salary}</Typography>
      <Typography color="textSecondary">{company}</Typography>
      <Button variant="contained" sx={{ mt: 2 }} disabled>
        Откликнуться
      </Button>
      <Button variant="outlined" sx={{ mt: 2, ml: 2 }} disabled>
        Посмотреть контент
      </Button>
    </CardContent>
  </Card>
);

export default JobItem;
