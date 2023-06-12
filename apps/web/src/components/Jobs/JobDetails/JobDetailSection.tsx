import { JobDetailProps } from '.';

export function JobDetailSection({ selectedJob }: JobDetailProps) {
  if (!selectedJob) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <h2>Job details</h2>
      <span className="text-sm text-neutral-500">Description</span>
      <p className="text-xs">{selectedJob.description}</p>
    </div>
  );
}
