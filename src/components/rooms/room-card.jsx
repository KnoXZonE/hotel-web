import { MoveRightIcon } from 'lucide-react';
import { ROOMS_DATA } from './pages';
import Image from 'next/image';
import Link from 'next/link';

const RoomCard = () => {
    return (
        <div className='grid grid-cols-2 gap-20'>
            {ROOMS_DATA.map(room => (
                <div className="flex flex-col gap-y-10" key={room.id}>
                    <div>
                        <Image src={room.image} alt={room.name} className="w-full aspect-video object-cover" />
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        <div className='flex justify-between items-start'>
                            <h3 className="text-4xl font-medium custom-font transition-all duration-300 ease-in-out hover:text-primary">
                                <Link href={`/rooms/${room.id}`}>{room.name}</Link>
                            </h3>
                            <p className="mt-2 text-primary">${room.price}</p>
                        </div>

                        {room.info.length > 0 && (
                            <ul>
                                {room.info.map(i => (
                                    <li key={i.id}>
                                        {i.bed_count} Bed{i.bed_count > 1 ? 's' : ''} | {i.washroom_count} Washroom{i.washroom_count > 1 ? 's' : ''} | {i.area}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <p className='line-clamp-2'>{room.description}</p>

                        <div className='flex'>
                            <Link href={`/rooms/${room.id}`} className="text-primary text-lg flex items-center gap-x-3 transition-all duration-300 ease-in-out hover:gap-x-5 relative before:content-[''] before:absolute before:top-full before:left-0 before:w-0 before:h-0.5 before:bg-primary/50 before:transition-all before:duration-300 before:ease-in-out hover:before:w-[70%]">
                                View Room
                                <MoveRightIcon size={32} />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RoomCard