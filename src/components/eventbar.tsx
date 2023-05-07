import EventCard from '@/components/event_card'
import event_data from '@/data/events'

const EventBar = () => {
    return (
      <div className="events-section overflow-x-scroll whitespace-nowrap flex flex-row bg-accent">
        {event_data.map((item, index) => {
          return (
            <div key={index} className="inline-block ml-3 mr-3">
              <EventCard Title={item.title} Descpt={item.description} Date={item.date} Link={item.link}/>
            </div>
          )
        })}
      </div>
    );
}

export default EventBar;