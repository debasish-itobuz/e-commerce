import React from 'react'
import { useLocation } from 'react-router-dom'
import LaptopComponent from '../components/LaptopComponent'

const LaptopDetail = () => {
    const {state} = useLocation()
    const data = state.related;
    console.log(data)
    // console.log(state)
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      {
        //structure
        data.map(item => <LaptopComponent key={item.name} item = {item}/>)
      }
    </div>
  )
}

export default LaptopDetail
