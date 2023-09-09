import Input from '@/components/atoms/input/input'
import Button from '@/components/molecules/button/button'
import React from 'react'

export default function Form() {
  return (
    <form action="" className='mx-auto'>
    <Input name={"Name"}/>
    <Input name={"Email"}/>
    <Input name={"Phone"}/>
    <textarea className='text-gray-400 w-full block p-4 my-2' defaultValue={"Your question / message"}>
    </textarea>
      <div className="grid lg:grid-cols-12">
        <div className="col-span:12 lg:col-span-8">
          <div className="flex">
            <input className='w-8 h-8 appearance-none cursor-pointer align-middle mr-2' aria-checked="false" role="checkbox" />
            <label className='text-black text-lg align-middle'>I consent to the processing of my data. You can read more about how we handle your data in our general terms and conditions .</label>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-2 mx-auto"></div>
        <div className="col-span-12 mt-20 lg:mt-0 lg:col-span-2 relative">
          <Button />
        </div>
      </div>
    </form>
  )
}
