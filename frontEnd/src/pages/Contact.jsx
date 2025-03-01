import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} alt="Contact-img" className='w-full md:max-w-[450px]' />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>46532 allahabad <br /> abd road </p>
          <p className='text-gray-500'>Tel: (91) 1234567890 <br /> Email: absc@gail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Carrers at Forever</p>
          <p className='text-gray-500'>Lear More About the Job Openings</p>
          <button className='border borber-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs </button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
