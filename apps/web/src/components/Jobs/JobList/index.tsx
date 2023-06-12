import { Job } from '../../../types/job';
import JobCard from './JobCard';

interface JobListProps {
  jobs: Job[];
  setSelectedJob: (job: Job) => void;
}

export default function JobList({ jobs, setSelectedJob }: JobListProps) {
  return (
    <ul className="flex flex-col">
      {jobs?.map((job) => (
        <li key={job.id} className="mb-2" onClick={() => setSelectedJob(job)}>
          <JobCard job={job} />
        </li>
      ))}
    </ul>
  );
}
