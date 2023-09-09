import React from 'react'

export default function Input(props:any) {
  return (
    <>
      <input className='w-full block p-4 my-2' type="text" placeholder={props.name}/>
    </>
  )
}
