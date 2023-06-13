import { create } from 'zustand';
import { Job } from '../types/job';

type Store = {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  selectedJob: Job | null;
  setSelectedJob: (selectedJob: Job) => void;
};

export const useJobsStore = create<Store>((set) => ({
  jobs: [],
  setJobs: (jobs: Job[]) => set(() => ({ jobs })),
  selectedJob: null,
  setSelectedJob: (selectedJob: Job) => set(() => ({ selectedJob }))
}));
