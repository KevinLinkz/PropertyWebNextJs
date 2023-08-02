"use client"
import React from 'react'

interface props {
    children: React.ReactNode,
    className: string
}

const AnimatedAOS = ({ children, className, ...aosConfig }: props) => {

    return (
        <div className={className} data-aos {...aosConfig}>{children}</div>
    )
}

export default AnimatedAOS