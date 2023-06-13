import { useEffect } from 'react';
import { jobsService } from '../../services/jobs-service';
import { useJobsStore } from '../../stores/jobsStore';
import { useSearchStore } from '../../stores/searchStore';
import JobDetails from './JobDetails';
import JobList from './JobList';
import JobSearchMeta from './JobSearchMeta';

export default function Jobs() {
  const { jobs, setJobs, selectedJob, setSelectedJob } = useJobsStore();
  const { searchTitle, searchLocation } = useSearchStore();

  // const [selectedJob, setSelectedJob] = useState<Job>();

  const fetchJobs = async () => {
    const result = await jobsService.getJobs({
      title: searchTitle,
      location: searchLocation
    });
    setJobs(result);
    setSelectedJob(result[0]);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="flex justify-center gap-3 mt-10">
      <div className="w-1/5 flex flex-col gap-2">
        <JobSearchMeta jobsCount={jobs.length} />
        <JobList jobs={jobs} setSelectedJob={setSelectedJob} />
      </div>

      <div className="w-2/5">
        <JobDetails selectedJob={selectedJob} />
      </div>
    </div>
  );
}
