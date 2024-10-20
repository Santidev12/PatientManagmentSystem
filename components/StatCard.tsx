import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface StatCardProps {
    type: 'appointments' | 'cancelled' | 'pending'
    count: number
    label: string
    icon: string
}

const StatCard = ({ count = 0, label, icon, type }: StatCardProps) => {
  return (
    <div className={clsx('stat-card', {
        'bg-appointments': type === 'appointments',
        'bg-cancelled': type === 'cancelled',
        'bg-pending': type === 'pending'
    })}>
        <div className='flex items-center gap-4'>
            <Image 
                src={icon}
                height={32}
                width={32}
                alt={label}
                className='size-8 w-fit'
            />
            <h2 className='text-32-bold text-white'>{count}</h2>
        </div>

        <p className='text-14-regular'>{label}</p>
    </div>
  )
}

export default StatCard