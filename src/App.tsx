import { useState, useEffect } from 'react'
import './styles/globalStyles.scss';
import sanityClient from "./client"
import { Event } from './types/interfaces';

const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
sanityClient
.fetch<Event[]>(
  `
      *[_type == "event" && startDate > now() || _type == "event" && startDate < now()  ] | order(startDate desc)
    `
)
.then((data) => setEvents(data))
.catch(console.error)
  }, [])

  console.log(events)

  return (
    <>
      <h1>Events</h1>
      <div>{events && events.map((event) => <div key={event.title}>{event.title}</div>)}</div>
    </>
  )
}

export default App