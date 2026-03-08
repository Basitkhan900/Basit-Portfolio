import React from 'react'
import Card from './Card'
const Carddata = ({ data }) => {
  return (
    <div>
      <h1 className='text-amber-50 font-bold text-center text-4xl mt-34'>My Projects</h1>
      <div className="flex items-center justify-center mt-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-10">
          {data.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              disc={item.disc}
              live={item.live}
              githubLink={item.co}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carddata
