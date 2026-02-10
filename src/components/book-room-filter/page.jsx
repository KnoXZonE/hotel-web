import React from 'react'

const BookRoomFilter = () => {
    return (
        <div className='mt-[5%] max-w-7xl mx-auto bg-background p-15 px-10'>
            <div className="flex gap-x-5">
                <div className='flex-1'>
                    <input type="date" name='fromDate' className='border border-primary/20 px-5 w-full h-16' />
                </div>

                <div className='flex-1'>
                    <input type="date" name='toDate' className='border border-primary/20 px-5 w-full h-16' />
                </div>

                <div className='flex-1'>
                    <select name="no-of-adult" id="noOfAdult" className='border border-primary/20 px-5 w-full h-16'>
                        <option defaultValue='Adult' disabled>Adult</option>
                        <option value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                        <option value="four">Four</option>
                    </select>
                </div>

                <div className='flex-1'>
                    <select name="no-of-child" id="noOfChild" className='border border-primary/20 px-5 w-full h-16'>
                        <option defaultValue='Children' disabled>Children</option>
                        <option value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                        <option value="four">Four</option>
                    </select>
                </div>

                <div className='flex-1 bg-red-300'>
                    <button className='bg-primary text-black flex items-center justify-center h-16 w-full uppercase font-medium'>Check Availability</button>
                </div>
            </div>
        </div >
    )
}

export default BookRoomFilter