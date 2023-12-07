import { parseISO,formatDistanceToNow } from "date-fns";
import React from 'react'

function TimeAgo({timeStamp}) {
    let time = '';

    if(timeStamp){
        const dated = parseISO(timeStamp)
        const time_ago = formatDistanceToNow(dated)
        time = `${time_ago} ago`
    }

  return (
    <div className="date-format">
        <i>{time}</i>
    </div>
  )
}

export default TimeAgo