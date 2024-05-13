import React from 'react'

const LaptopComponent = ({ item }) => {
    return (
        <div className='flex flex-col md:flex-row justify-around w-[80%] items-center'>
            <div className='flex flex-col md:flex-row gap-24'>
                <div> <img src={item.image} className='w-full h-full' /> </div>
                <div>
                    <p className='text-2xl'>{item.name}</p>
                    <p>RAM : {item.ram}</p>
                    <p>Color : {item.color}</p>
                    <p>Processor Name : {item.processorName}</p>
                    <p>TouchScreen : {item.touchScreen}</p>
                    <p>Operating System : {item.os}</p>
                </div>
            </div>
            <div className='text-xl font-medium'>Price : {item.price}</div>
        </div>
    )
}

export default LaptopComponent
