"use client"
import React from 'react'



const loading = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <div className={`w-24 h-24 border-slate-300 border-t-green border-[15px] rounded-full animate-spin`}></div>
        </div>
    )
}

export default loading