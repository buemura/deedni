import { Job } from '../../../types/job';
import { formatDate } from '../../../utils/dates';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="flex flex-col p-4 border rounded-lg border-neutral-300 cursor-pointer hover:border-neutral-400 focus:border-blue-800">
      <h1 className="font-semibold">{job.title}</h1>
      <span className="text-neutral-700">{job.company.name}</span>
      <span className="text-neutral-700">{job.location}</span>
      <span className="my-2 ml-2 text-neutral-600 text-sm truncate">
        {job.description}
      </span>
      <span className="text-neutral-600 text-xs">
        {formatDate(new Date(job.createdAt))}
      </span>
    </div>
  );
}
