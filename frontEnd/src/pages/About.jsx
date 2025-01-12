import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="about-img" className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis veritatis, non harum a, ab consectetur quibusdam perferendis accusantium aspernatur dignissimos provident nihil voluptatum aut eos nesciunt laboriosam veniam earum hic aperiam delectus vero consequatur?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sequi nam? Minus et odio magni iste, culpa repellendus accusantium doloremque. Dolorem sapiente enim ut aspernatur.</p>
<b className='text-gray-800'>OUR GOALS</b>
<p>Our Goal at forever is to Empower Customers with choice, convenience</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'Choose Us'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 flex flex-col md:px-16 py-8 sm:py-20 gap-5'>
            <b>
              Quality Assurence:
            </b>
            <p className='text-gray-600'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, odit.
            </p>
          </div>
          <div className='border px-10 flex flex-col md:px-16 py-8 sm:py-20 gap-5'>
            <b>
              Conveninence:
            </b>
            <p className='text-gray-600'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, odit.
            </p>
          </div>
          <div className='border px-10 flex flex-col md:px-16 py-8 sm:py-20 gap-5'>
            <b>
              Exceptional Coustomer service:
            </b>
            <p className='text-gray-600'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, odit.
            </p>
          </div>
      </div>
        <NewsletterBox/>
    </div>
  )
}

export default About
