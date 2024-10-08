import React from 'react'

const Header = ({data}) => {
  return (
    <>
      <nav className="flex gap-8 self-start mt-5 ml-4 text-sm font-medium text-black whitespace-nowrap max-md:ml-2.5">
        {data?.map(({e,index})=>{
            return <p className='cursor-pointer' key={index}>
                {e}
            </p>
        })}
      </nav>
    </>
  )
}

export default Header
