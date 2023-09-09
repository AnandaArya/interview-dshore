import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 mt-20 text-center lg:text-left">
      <div className="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="col-span-6 lg:col-span-3 px-2">
          <h3 className='text-2xl font-semibold'>Uxbee</h3>
          <p className='text-xl font-light mt-4'>The road of uxbee leads through magic in e-commerce and marketing technology, always to happy customers. Along the way, you benefit from qualified leads, more sales, higher customer satisfaction, positive reviews, and repeat purchases. This is how win-win works.</p>
        </div>
        <div className="lg:col-span-1"></div>
        <div className="col-span-6 lg:col-span-2 px-2">
          <h3 className='text-2xl font-semibold'>Solutions</h3>
          <ul className="font-light mt-4">
            <li className="mb-2">
              <a href="#" className="hover:underline hover:text-yellow-400">Content management</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline hover:text-yellow-400">Marketing automation</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline hover:text-yellow-400">Personalization</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline hover:text-yellow-400">E-commerce</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline hover:text-yellow-400">Succesful implementation</a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-1"></div>
        <div className="col-span-6 lg:col-span-2 px-2">
          <h3 className='text-2xl font-semibold'>About us</h3>
          <ul className="font-light mt-4">
            <li className="mb-2">
              <a href="#" className=" hover:underline hover:text-yellow-400">About uxbee</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline hover:text-yellow-400">Our way of working</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline hover:text-yellow-400">Team uxbee</a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-1"></div>
        <div className="col-span-6 lg:col-span-2 px-2">
          <h3 className='text-2xl font-semibold'>Contact</h3>
          <ul className="font-light mt-4">
            <li className="mb-2">
              <a href="#" className=" hover:underline hover:text-yellow-400">Elektronicaweg 37</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline hover:text-yellow-400">2628 XG Delft</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline hover:text-yellow-400">015 - 79 00 100</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline hover:text-yellow-400">hello@uxbee.nl</a>
            </li>
          </ul>
        </div>


      </div>
      <hr className="my-6 border-black sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 text-center">
        <div className="lg:col-span-4 mx-auto lg:mx-0 my-4 lg:my-0 px-2">
          <Image src="https://uxbee.eu/assets/images/footer/footer-logo.svg" alt='logo' width={133} height={100} />
        </div>
        <div className="lg:col-span-2 my-4 lg:my-0 lg:text-left">
          <p>Copyright 2023</p>
        </div>
        <div className="lg:col-span-2 my-4 lg:my-0 lg:text-left">
          <p>Terms & Conditions </p>
        </div>
        <div className="lg:col-span-2 my-4 lg:my-0 lg:text-left">
          <p>Privacy statement</p>
        </div>
      
      </div>

    </footer>
  );
}

