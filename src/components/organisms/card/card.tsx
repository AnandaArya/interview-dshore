import Image from 'next/image'
import React from 'react'

export default function Card() {
  return (
    <section className='card lg:-mt-64'>
    <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-4 lg:grid-cols-12 lg:pt-28">
      <div className="lg:col-start-2 lg:col-span-10 p-4">
        <div className="contact-box max-w-screen-xl bg-yellow-400 mx-auto rounded-lg p-8">
          <div className="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className='text-2xl font-semibold'>Uxbee creates a successful e-commerce & marketing platform together with you.</h3>
              <p className='text-xl font-light mt-4'>Let technology work in your favor from now on and bring magic to your e-commerce & marketing activities.</p>
            </div>
            <div className="lg:col-span-1"></div>
            <div className="lg:col-span-4">
              <h3 className='text-2xl font-semibold'>Do you have a question? Or would you like to know more about uxbee?</h3>
              <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 grid-cols-12 ">
                <div className="mt-2 col-span-4">
                  <Image src="/img/profile-image-2.png" className='mr-4' alt='logo' width={400} height={400} />
                </div>
                <div className="col-span-6 mx-4 mt-2">
                  
                  <button className="bg-white mx-2 rounded-full py-2 px-4 font-medium text-xl mb-2">
                    
                    0157910020121
                  </button>
                  <button className="bg-white mx-2 rounded-full py-2 px-4 font-medium text-xl mb-2">
                    hello@uxbee.nl
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
