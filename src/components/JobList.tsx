import React, { useState } from 'react';
import JobItem from './JobItem';

interface JobListProps {
  filters: {
    skills: string;
    city: string;
  };
}

const JobList: React.FC<JobListProps> = ({ filters }) => {
  const [jobs, setJobs] = useState([
    { title: 'Вакансия №1', salary: '15000 - 20000 руб.', company: 'ООО Компания', city: 'Москва', skills: 'JavaScript' },
    { title: 'Вакансия №2', salary: '20000 - 25000 руб.', company: 'ООО Компания', city: 'Санкт-Петербург', skills: 'React' },
    { title: 'Вакансия №3', salary: '25000 - 30000 руб.', company: 'ООО Компания', city: 'Москва', skills: 'TypeScript' },
  ]);

  const filteredJobs = jobs.filter(
    (job) =>
      job.skills.toLowerCase().includes(filters.skills.toLowerCase()) &&
      job.city.toLowerCase().includes(filters.city.toLowerCase())
  );

  return (
    <div style={{ height: '500px', overflow: 'auto' }}>
      {filteredJobs.length ? (
        filteredJobs.map((job, index) => (
          <JobItem key={index} title={job.title} salary={job.salary} company={job.company} />
        ))
      ) : (
        <p>Ничего не найдено</p>
      )}
    </div>
  );
};

export default JobList;

