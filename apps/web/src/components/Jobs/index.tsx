import { useEffect, useState } from 'react';
import { jobsService } from '../../services/jobs-service';
import { Job } from '../../types/job';

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  const fetchJobs = async () => {
    const result = await jobsService.getJobs();
    setJobs(result);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="flex flex-col">
      {jobs?.map((job) => (
        <>
          <span>{job.title}</span>
          <span>{job.company.name}</span>
        </>
      ))}
    </div>
  );
}
