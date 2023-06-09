import { jobs } from '../../__mocks__/jobs';

export default function Jobs() {
  return (
    <div className="flex flex-col">
      {jobs?.map((job) => (
        <span>{job.title}</span>
      ))}
    </div>
  );
}
