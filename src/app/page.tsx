import Form from '@/components/organisms/form/form'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <main>
      <section className="hero bg-black" style={{minHeight: "1250px"}} >
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-4 lg:grid-cols-12 lg:pt-28">
          <div className="lg:col-span-6 p-4">
            <h1 className='text-yellow-400 text-7xl font-bold'>Contact<br /><span className='text-white'>with uxbee</span> </h1>
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-10">
                <p className='text-white text-lg mt-9'>
                  Are you eager to find out how our ecommerce and marketing technology can benefit your organization? Engaging in a conversation with uxbee is cost-free and can provide valuable insights.
                </p>
                <h2 className='text-white text-4xl font-semibold mt-9'>Contact Information</h2>
                <div className='flex my-4'>
                  <Image src="https://uxbee.eu/assets/images/contact/icon-02.svg" className='mr-4' alt='logo' width={25} height={25} />
                  <h3 className='text-white text-3xl font-light' >Elektronicaweg 37, 2628 XG Delft</h3>
                </div>
                <div className='flex my-4'>
                  <Image src="https://uxbee.eu/assets/images/contact/icon-03.svg" className='mr-4' alt='logo' width={25} height={25} />
                  <h3 className='text-white text-3xl font-light' >00 31 (0) 15 - 79 00 100</h3>
                </div>
                <div className='flex my-4'>
                  <Image src="https://uxbee.eu/assets/images/contact/icon-01.svg" className='mr-4' alt='logo' width={25} height={25} />
                  <h3 className='text-white text-3xl font-light' >hello@uxbee.nl</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="hero-box bg-yellow-400 p-12 rounded-lg">
              <h1 className='text-black text-3xl font-bold'>How can we help you</h1>
              <h1 className='text-black text-lg font-semibold my-6'>Are you ready to truly make a difference for your customers? Do you have any questions about us, our ecommerce platform, or our marketing technology? Let us know, and well be happy to tell you all about it!</h1>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
