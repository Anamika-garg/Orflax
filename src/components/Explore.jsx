import React from 'react'
import { Link } from 'react-router-dom';
const Explore = () => {
  return (
    <div id='Explore' className='container mt-9 text-white gap-7 min-h-[90vh] relative w-[100vw] m-auto flex items-center flex-col'>
      {/* Main Heading */}
      <h1 className="main-heading text-5xl font-bold border-b-2 p-5 text-color border-yellow-500"> Explore </h1>

      <div className="categories-container gap-8 relative w-[90%] min-h-[590px] flex items-center justify-center flex-wrap">
        <Link to={'Products'}>
          <div className="cables-wires category text-2xl p-3 font-semibold flex relative w-[380px] rounded-md h-[500px]">
            Cables and Wires
          </div>
        </Link>

        <div className="other-items flex relative w-[400px] rounded-md h-[500px] flex-col ietms-center justify-between">
          <Link to={'Products'}>
            <div className="switches category text-2xl p-3 font-semibold relative h-[240px] w-[100%] rounded-md bg-black flex">
              Switches
            </div>
          </Link>
          <Link to={'Products'}>
            <div className="EPC category text-2xl p-3 font-semibold relative h-[240px] w-[100%] rounded-md bg-black flex">
              EPC
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Explore