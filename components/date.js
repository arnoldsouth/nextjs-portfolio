// To format the date, we’ll use the date-fns library

import { parseISO, format } from "date-fns";

// add the following Date component

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
