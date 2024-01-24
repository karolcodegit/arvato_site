import React from 'react'
import Box from '../../Box/Box'
import Title from '../Title/Title'
import { RightIcon } from '../Icons/Icons'
import Paragraph from '../Paragraph/Paragraph'

const EventCard = () => {

  const events = [
    {
      id: '1',
      date: '7 January',
      name: 'New Year Party',
      time: '8:00 PM',
    },
    {
      id: '2',
      date: '14 February',
      name: 'Valentine\'s Day Party',
      time: '7:00 PM',
    },
    {
      id: '3',
      date: '17 March',
      name: 'St. Patrick\'s Day Celebration',
      time: '6:00 PM',
    },
    {
      id: '4',
      date: '31 October',
      name: 'Halloween Party',
      time: '9:00 PM',
    }
  ]
  return (
    <Box col>
      <Title tag="h3">Upcoming events</Title>
      <ul role="list" className="divide-y">
        {events.map((event) => (
          <li key={event.id} className="flex flex-col md:flex-row justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className='flex-none rounded-md bg-gray-50 text-center px-2 py-1 w-24 md:w-32'>
                {event.date.split(' ').map((item, index) => (
                  <Paragraph key={index} textSize='text-md'>{item}</Paragraph>
                ))}
              </div>
              <div className="min-w-0 flex-auto mt-4 md:mt-0">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {event.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {event.time}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="py-3 flex items-center">
        <span className="px-3 text-gray-900 font-semibold">See more </span>
        <RightIcon className="text-gray-900 w-4 h-4" />
      </div>
    </Box>
  )
}

export default EventCard