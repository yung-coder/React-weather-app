import React from 'react'
import humidity from '../imagesl/humidity.svg'
import sun from '../imagesl/temp.svg'
import wind from '../imagesl/wind.svg'
import pressure from '../imagesl/pressure.svg'
const Wetherinfo = (props) => {
  const {wether}=props;
  const isday=wether?.weather[0].icon?.includes('d');
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
}
  return (
    <div className='flex justify-center items-center'>
      <div className='flex  justify-center items-center flex-col   w-72 h-80 mt-32 text-slate-600  rounded-xl backdrop-blur-3xl shadow-lg shadow-black  md:text-slate-900 font-bold'>
        <img src={` http://openweathermap.org/img/wn/${wether.weather[0].icon}@2x.png`} alt="" className='w-20 inline-block mt-4 hover:animate-pulse '/>
        <h2 className='mt-4'>{`${Math.floor(wether.main.temp -273)}°C`} | {`${wether.weather[0].description}`}</h2>
        <h2 className='text-lg font-mono font-bold mt-3'>{`${wether.name}`},{`${wether.sys?.country}`}</h2>
        <div className=' mt-11  w-48 h-full flex  flex-row flex-wrap  justify-evenly items-center space-x-2'>
          <div className='flex flex-row'>
              <img src={humidity} alt="" className=' w-5'/>
              <div className='flex flex-col justify-start'>
                <p>{`${wether.main.humidity}`}</p>
              <h4 className='mx-1 text-xs'>humidity</h4>
              </div>
          </div>
          <div className='flex flex-row'>
              <img src={sun} alt="" className=' w-5'/>
              <div className='flex flex-col justify-start'>
                <p>{getTime(wether.sys[isday?"sunset":"sunrise"])}</p>
              <h4 className='mx-1 text-xs'>{isday?"sunset":"sunrise"}</h4>
              </div>
          </div>
          <div className='flex flex-row '>
              <img src={wind} alt="" className=' w-5 '/>
              <div className='flex flex-col justify-start'>
                <p>{`${wether.wind.speed}`}</p>
              <h4 className='mx-1 text-xs'>Wind</h4>
              </div>
          </div>
          <div className='flex flex-row '>
              <img src={pressure} alt="" className=' w-5'/>
              <div className='flex flex-col justify-start'>
                <p>{`${wether.main.pressure}`}</p>
              <h4 className='mx-1 text-xs'>pressure</h4>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wetherinfo
