import { Job } from '../../../types/job';
import { JobDetailHeader } from './JobDetailHeader';
import { JobDetailSection } from './JobDetailSection';

export interface JobDetailProps {
  selectedJob: Job | null;
}

export default function JobDetails({ selectedJob }: JobDetailProps) {
  if (!selectedJob) {
    return null;
  }

  return (
    <div className="flex flex-col p-4 border border-neutral-300 rounded-lg">
      <JobDetailHeader selectedJob={selectedJob} />
      <JobDetailSection selectedJob={selectedJob} />
    </div>
  );
}
