import Card from '@/components/clubCard'
import EventCard from '@/components/eventCard'
import NavDropdown from '@/components/navDropdown'
import EventBar from '@/components/eventBar'

import clubData from '@/data/clubs'
import eventData from '@/data/events'
import NavBar from '@/components/navBar'

export default function Home() {
  return (
    <div className="bg-accent">
      <div className="cards-section whitespace-nowrap">
        {clubData.map((item, index) => {
          return (
            <Card key={index} Title={item.title} Descpt={item.description} Links={item.links}/>
          )
        })}
      </div>
      <EventBar/>
    </div>
  )
}