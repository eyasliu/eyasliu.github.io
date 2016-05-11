import format from 'date-format';



export default function formate(date, dateFormate = 'yyyy-MM-dd hh:mm:ss'){
  return format(dateFormate, new Date(date))
}