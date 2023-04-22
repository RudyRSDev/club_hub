import { Inter } from 'next/font/google'
import Card from '@/components/card'
import EventCard from '@/components/event_card'
import NavBar from '@/components/navbar'
import club_data from '@/data/clubs'
import event_data from '@/data/events'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-base-100">
      <NavBar/>
      <div className="cards-section">
        {club_data.map((item, index) => {
          return (
            <Card key={index} Title={item.title} Descpt={item.description} Links={item.links}/>
          )
        })}
      </div>
      <div className="events-section overflow-x-scroll whitespace-nowrap">
        {event_data.map((item, index) => {
          return (
            <div key={index} className="inline-block">
              <EventCard Title={item.title} Descpt={item.description} Date={item.date} Link={item.link}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}