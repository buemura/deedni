import { JobDetailProps } from '.';

export function JobDetailHeader({ selectedJob }: JobDetailProps) {
  if (!selectedJob) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold">{selectedJob.title}</h2>
      <a
        className="text-sm underline text-blue-600"
        href={`/company/${selectedJob.companyId}`}
      >
        {selectedJob.company.name}
      </a>
      <span className="text-xs text-neutral-500 font-semibold">
        {selectedJob.location}
      </span>
      <div className="my-4 border-b" />
    </div>
  );
}
