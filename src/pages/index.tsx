import { Inter } from 'next/font/google'
import Card from '@/components/card'
import NavBar from '@/components/navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-base-100">
      <NavBar/>
      <Card/>
    </div>
  )
}
