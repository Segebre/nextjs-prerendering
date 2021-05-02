export function formatDateString(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDateString = date.toLocaleDateString('en-DE', options);

  return formattedDateString;
}
