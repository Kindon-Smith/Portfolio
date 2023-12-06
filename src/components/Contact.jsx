import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import {styles} from '../styles';
import {EarthCanvas} from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import Earth from './canvas/Earth';
import { externalLinks, navLinks } from '../constants';
import { linkedin } from '../assets';

// template_kye7ads
// service_0bv4kxv
// hZaX_MmWctYAmVp87

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send( 
      "service_0bv4kxv", 
      "template_kye7ads", 
      {from_name: form.name,
      to_name: 'Kindon',
      from_email: form.email,
      to_email: 'kindonsmith@gmail.com',
      message: form.message,
      },
      'hZaX_MmWctYAmVp87'
    )
    .then(() => {
      setLoading(false);
      alert("Thanks! I'll get back to you as soon as I can.");

      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error)=>{
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    })
}

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex
      gap-10 overflow-hidden">
        <motion.div
          
          className="flex-[0.75] bg-black-100 rounded-2xl p-8"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText} >Contact.</h3>
          <a href={externalLinks[0].source_link} className="flex-row black-gradient w-10 h-10 rounded-full flex justify-center
                items-center cursor-pointer">
              <img src={externalLinks[0].source_image} alt={externalLinks[0].source_image} />
          </a>
          

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6
                placeholder:text-secondary text-white rounded-lg outlined-none
                border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input 
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6
                placeholder:text-secondary text-white rounded-lg outlined-none
                border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7" 
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6
                placeholder:text-secondary text-white rounded-lg outlined-none
                border-none font-medium"
              />
            </label>

            <button type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? 'Sending...':'Send'}
            </button>

          </form>

        </motion.div>

        <motion.div
          variants={slideIn('right', "tween",0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />

        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")