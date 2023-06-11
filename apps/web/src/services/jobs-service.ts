const baseUrl = 'http://localhost:8080';

const getJobs = async () => {
  const res = await fetch(`${baseUrl}/api/jobs`);
  return res.json();
};

export const jobsService = { getJobs };
