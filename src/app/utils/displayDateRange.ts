const MONTHS = [
  0,
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
]

const dm = (month: string) => MONTHS[Number(month)]

const displayDateRange = (
  from: string, // ISO Date
  to: string // ISO Date
): string => {
  // no need to convert to js Date type here
  const [fromYear, fromMonth, fromDay] = from.split('-')
  const [toYear, toMonth, toDay] = to.split('-')

  const sameYear = Number(fromYear) === Number(toYear)
  const sameMonth = Number(fromMonth) === Number(toMonth)

  return `${dm(fromMonth)} ${Number(fromDay)}${
    sameYear ? '' : `, ${fromYear}`
  }-${sameYear && sameMonth ? '' : `${dm(toMonth)} `}${Number(
    toDay
  )}, ${toYear}`
}

export default displayDateRange
