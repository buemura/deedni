const baseUrl = 'http://localhost:8080';

interface getJobsQuery {
  title?: string;
  location?: string;
}

const getJobs = async ({ title, location }: getJobsQuery) => {
  const res = await fetch(
    `${baseUrl}/api/jobs?title=${title}&location=${location}`
  );
  return res.json();
};

export const jobsService = { getJobs };
