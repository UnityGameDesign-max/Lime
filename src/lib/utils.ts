import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDateString(dateStr: string) {

  const dateObj = new Date(dateStr);

  const month = dateObj.toLocaleString('en-US', { month: 'long' });
  const day = dateObj.getUTCDate();


  const year = dateObj.getUTCFullYear();


  let hours = dateObj.getUTCHours();
  const minutes = dateObj.getUTCMinutes();


  const period = hours >= 12 ? 'PM' : 'AM';


  hours = hours % 12 || 12;


  const formattedMinutes = minutes.toString().padStart(2, '0');


  const formattedDate = `${month} ${day}, ${year} ${hours}:${formattedMinutes} ${period}`;

  return formattedDate;
}