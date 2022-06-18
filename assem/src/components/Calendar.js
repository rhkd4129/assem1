import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import './Calendar.module.css';

class Calendar extends Component {

  render() {
    return (
      <div className="calendar-container">
        <FullCalendar 
          defaultView="dayGridMonth" 
          plugins={[ dayGridPlugin ]}

          // 캘린더 언어 설정
          // locale='ko' 
          weekends={true}
          // 스케줄 박아둠
          events={[
              { title: 'schedule 1', date: '2022-05-03' },
              { title: 'event 1', date: '2022-05-25' },
              { title: '월간발표회', date: '2022-05-26' }
          ]}
        />
      </div>
    );
  }

}

export default Calendar;