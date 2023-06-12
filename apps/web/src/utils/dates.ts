export const formatDate = (date: Date) => {
  const date1 = date.getTime();
  const date2 = new Date().getTime();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    return 'Posted: Today';
  }

  if (diffDays > 30) {
    return `Posted: 30+ days ago`;
  }

  return `Posted: ${diffDays} days ago`;
};
