import { ButtonHTMLAttributes } from 'react';
import { jobsService } from '../../services/jobs-service';
import { useJobsStore } from '../../stores/jobsStore';
import { useSearchStore } from '../../stores/searchStore';

type SearchButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function SearchButton(props: SearchButtonProps) {
  const { setJobs, setSelectedJob } = useJobsStore();
  const { searchTitle, searchLocation } = useSearchStore();

  const handleSearch = async () => {
    const result = await jobsService.getJobs({
      title: searchTitle,
      location: searchLocation
    });

    setJobs(result);
    setSelectedJob(result[0]);
  };

  return (
    <button
      className="p-1 px-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700"
      {...props}
      onClick={handleSearch}
    >
      Find jobs
    </button>
  );
}
