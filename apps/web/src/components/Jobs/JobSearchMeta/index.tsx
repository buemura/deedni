interface JobSearchMetaProps {
  jobTitleTerm?: string;
  jobLocationTerm?: string;
  jobsCount: number;
}

export default function JobSearchMeta({
  jobTitleTerm,
  jobLocationTerm,
  jobsCount
}: JobSearchMetaProps) {
  return (
    <div className="flex flex-col gap-1 text-xs">
      <span className="text-neutral-500">
        {jobTitleTerm}jobs in {jobLocationTerm}
      </span>
      <div className="flex justify-between">
        <span>
          Sort by: <strong>Date</strong>
        </span>
        <span>{jobsCount} jobs</span>
      </div>
    </div>
  );
}
