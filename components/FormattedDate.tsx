function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function FormattedDate({ date }: { date?: string }) {
  if (!date) return null
  return <time dateTime={date}>{formatDate(date)}</time>
}
