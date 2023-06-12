import { JobDetailProps } from '.';

export function JobDetailHeader({ selectedJob }: JobDetailProps) {
  if (!selectedJob) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
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
      </div>
      <button className="w-52 text-sm font-bold bg-blue-800 hover:bg-blue-900 text-white rounded-md p-1 py-2">
        Apply on company site
      </button>

      <div className="my-4 border-b" />
    </div>
  );
}
