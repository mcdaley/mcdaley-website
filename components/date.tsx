//-----------------------------------------------------------------------------
// components/date.tsx
//-----------------------------------------------------------------------------
import { parseISO, format } from 'date-fns'

/**
 * Returns a formatted date string.
 * @function  Date
 * @param     {string} - Date string
 * @returns   {}
 */
export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}