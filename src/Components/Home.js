import React from 'react'


let time = new Date().toLocaleTimeString();
let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]
let date = new Date().getDate();
let month = ['Jan', 'Feb', ',March', 'April', 'May', 'Jun', 'Jul','Aug','Sept','Oct','Nov','Dec'][new Date().getMonth()]
export default function Home() {
  return (
    <div className="init-home">
      <div className="init-sub">
        <div className="init-time">
          {time}
        </div>
        <div className="init-other">
          <div className="init-day">
            {weekday},
          </div>
          <div className="init-date">
            {date}
          </div>
          <div className="init-month">
            {month}
          </div>
        </div>
      </div>
      <div className="alert">
        Refresh to see current time and date
      </div>
    </div>
  )
}
