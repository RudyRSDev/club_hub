import { Inter } from 'next/font/google'
import Card from '@/components/card'
import NavBar from '@/components/navbar'
import data from '@/data/clubs'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-base-100">
      <NavBar/>
      {data.map((item, index) => {
        return (
          <Card key={index} Title={item.title} Descpt={item.description} Links={item.links}/>
        )
      })}
    </div>
  )
}