import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  
  return (
  <div className='flex justify-center'>
    <div className='w-2/5 border-2'>
    <h2 className='p-3'>Split cost</h2>
    <div className='flex bg-slate-100 p-2 m-4 justify-between'>
      <div >
      <p>unsettled amount per user</p>
      <p className='font-bold text-6xl'>$60.00</p>
      </div>
      <div>
      <button className='bg-blue-600 rounded p-3 text-white  mt-7 mb-7'>SETTLE NOW</button>
      </div>
      
    </div>
    <div>
    <div className="flex mt-4  m-4 space-x-3">
            <div className="rounded-full bg-gray-100 p-8 border-blue-50"></div>
            <div className="rounded-full bg-gray-100 p-8 border-blue-50"></div>
            <div className="rounded-full bg-gray-100 p-8 border-blue-50"></div>
            <div className="rounded-full bg-gray-100 p-8 border-blue-50"></div>
          </div>
    </div>
    <div className='flex bg-slate-100 p-2 m-4 '>
    <form className='w-full'>
      <div className='flex flex-col object-cover mx-4'><label for="description">Description<span className='text-red-500'>*</span></label>
            <input className='p-2' type="text" id="description" name="description" required></input></div>
            <div className='flex justify-between mt-4 '>     
              <div className='flex flex-col mx-4 my-2'><label for="description">Amount$<span className='text-red-500'>*</span></label>
              <input className='p-2' type="text" id="amount" name="description" required></input>
              </div>
              <button className='bg-black rounded-lg text-white px-8 py-2 font-bold  my-2 mx-4'>ADD NEW</button>
            </div>
            
      </form>
    </div>
    <div>
      
    </div>
      
    </div>
    
  </div> 
  
  );
}

export default App
