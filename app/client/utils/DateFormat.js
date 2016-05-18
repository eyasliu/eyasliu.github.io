import format from 'date-format';



export default function formate(date, dateFormate = 'yyyy-MM-dd'){
  const dateObj = new Date(date)
  if(isNaN(dateObj)) {
    throw new Error('date must be an date formate')
  }
  return format(dateFormate, dateObj);
}