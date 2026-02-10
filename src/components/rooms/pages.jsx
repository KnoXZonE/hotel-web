import React from 'react'
import SectionTitle from '../section-title/page'
import RoomCard from './room-card'
import Room1 from '../../assets/room1.jpg'
import Room2 from '../../assets/room2.jpg'

export const ROOMS_DATA = [
    {
        id: 1,
        name: "Standard Room",
        description: "Our standard rooms are 150 sq ft in areas offering king size bed o with thick and comfortable mattress. The rooms are spacious with tv connected to local cable displaying unto 80 channels, dressing table, fan, 24 hr electricity back up, attached bathroom and private balcony in some rooms.",
        price: 4000,
        image: Room1,
        info: [
            {
                id: 3,
                bed_count: 1,
                washroom_count: 1,
                area: '150 sq ft',
            },
        ]
    },
    {
        id: 2,
        name: "Deluxe Room",
        description: "Our Deluxe rooms are 200 sq ft in areas offering king size bed with thick and comfortable mattress. The rooms are spacious with TV connected to local cable displaying unto 80 channels, dressing table, fan, 24 hr. electricity back up, attached bathroom .",
        price: 6000,
        image: Room2,
        info: [
            {
                id: 4,
                bed_count: 2,
                washroom_count: 2,
                area: '250 sq ft',
            },
        ]
    },
]

const Rooms = () => {
    return (
        <div className='w-full pt-36'>
            <div className="container mx-auto">
                <SectionTitle title="Room / Suits" subTitle="Accomodation" />
                <RoomCard />
            </div>
        </div>
    )
}

export default Rooms