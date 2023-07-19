import React from 'react'
import { BiSolidChevronDown } from 'react-icons/bi'

const Inquiry = () => {
    return (
        <section id='Inquiry' className='w-full h-28 bg-green flex justify-start items-center  px-10 py-16'>


            <input type='text' placeholder='Search Keyword' className='w-full h-14 rounded-md p-3 mr-2 placeholder:p-2' />
            <div className='relative w-full h-14 mr-2 '>
                <select id="PropertyType" className={`w-full h-full rounded-md p-3 appearance-none`}>
                    <option value="Property Type">Property Type</option>
                    <option value="Property Type 1">Property Type 1</option>
                    <option value="Property Type 2">Property Type 2</option>
                    <option value="Property Type 3">Property Type 3</option>
                </select>
                <BiSolidChevronDown size='2em' className='absolute top-[15px] left-[87%]' />
            </div>
            <div className='relative w-full h-14 mr-2 '>
                <select id="Location" className='w-full h-14 rounded-md mr-2 p-3 appearance-none relative'>
                    <option value="Location">Location</option>
                    <option value="Location 1">Location 1</option>
                    <option value="Location 2">Location 2</option>
                    <option value="Location 3">Location 3</option>
                </select>
                <BiSolidChevronDown size='2em' className='absolute top-[15px] left-[87%]' />
            </div>


            <button className='w-3/5 h-14 bg-darkblue text-white rounded-md mr-2'>Search</button>
        </section>
    )
}

export default Inquiry