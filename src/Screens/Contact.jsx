import React, {useState} from 'react'
import '../styles/contact.css'
import { motion } from 'framer-motion'
import contactImage from '../images/Saly-14contact.svg'


export default function Contact() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:''
  })

  function handleChange(e){
    const {value,name} = e.target
    setFormData((prevForm)=>{
      return{
        ...prevForm,
        [name]: value
      }
    })
  }

  // function submitHandler(e){
  //   e.preventDefault()
  //   console.log({e})
  // }
 

  return (
    <motion.div
      className='contact'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: window.innerWidth, transition: { duration: '0.1' } }}
    >
      <div className="contact-image">
        <img src={contactImage} alt="contact-img" />
      </div>
      <div className="contact-text">
        <h1>You can reach me any time🙂 </h1>
        <p className='normal-text'>I am open to opportunities where I can apply my knowledge to build scalable software products with the latest on demand technologies. Feel free to contact me via mail or my socials for open roles, collaborations, mentorship, or just to say Hi 👋</p>

        <div className="form">
          <form action="https://formspree.io/f/mrgroapp" method="POST">
            <div className='form-input'>
              <input
                placeholder='Name'
                type="text"
                onChange={handleChange}
                name='name'
                value= {formData.name}
              />
            </div>

            <div className="form-input">
              <input
                placeholder='Email'
                onChange={handleChange}
                name='email'
                value={formData.email}
                type='email'
              />
            </div>

            <div className="form-input">
              <textarea
                placeholder="Message"
                onChange={handleChange}
                name='message'
                value={formData.message}
              />
            </div>

            <button className='style-btn'>Send</button>
          </form>
        </div>
      </div>

    </motion.div>
  )
}
