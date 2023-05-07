import { Inter } from 'next/font/google'
import Card from '@/components/card'
import EventCard from '@/components/event_card'
import NavBar from '@/components/navbar'

import EventBar from '@/components/eventbar'
import club_data from '@/data/clubs'
import event_data from '@/data/events'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-base-100">
      <NavBar/>
      <div className="cards-section whitespace-nowrap">
        {club_data.map((item, index) => {
          return (
            <Card key={index} Title={item.title} Descpt={item.description} Links={item.links}/>
          )
        })}
      </div>
      <EventBar/>
    </div>
  )
}