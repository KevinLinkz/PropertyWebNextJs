import React from 'react'
import { BiSolidChevronDown } from 'react-icons/bi'

const Inquiry = () => {
    return (
        <section id='Inquiry' className='w-full h-full bg-green flex justify-start items-center px-10 py-10'>
            <div className='w-full grid md:grid-cols-[30%,27%,27%,14%] xs:grid-cols-1 grid-rows-1 gap-2 '>
                <input type='text' placeholder='Search Keyword' className='w-full h-14 rounded-md p-3 mr-2 placeholder:p-2' />
                <div className='relative w-full h-14 mr-2 '>
                    <select id="PropertyType" className={`w-full h-full rounded-md p-3 appearance-none text-gray-400`}>
                        <option value="Property Type">Property Type</option>
                        <option value="Property Type 1">Property Type 1</option>
                        <option value="Property Type 2">Property Type 2</option>
                        <option value="Property Type 3">Property Type 3</option>
                    </select>
                    <BiSolidChevronDown size='2em' className='absolute top-[15px] lg:left-[87%] xs:left-[80%]' />
                </div>
                <div className='relative w-full h-14 mr-2 '>
                    <select id="Location" className='w-full h-14 rounded-md mr-2 p-3 appearance-none  text-gray-400'>
                        <option value="Location">Location</option>
                        <option value="Location 1">Location 1</option>
                        <option value="Location 2">Location 2</option>
                        <option value="Location 3">Location 3</option>
                    </select>
                    <BiSolidChevronDown size='2em' className='absolute top-[15px] lg:left-[87%] xs:left-[80%]' />
                </div>
                <div>
                    <button className='w-full h-14 bg-darkblue text-white rounded-md mr-2'>Search</button>
                </div>
            </div>
        </section>
    )
}

export default Inquiry