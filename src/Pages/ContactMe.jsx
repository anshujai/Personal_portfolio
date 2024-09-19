import React, { useEffect, useState } from 'react'

const FORM_ENDPOINT =
'https://public.herotofu.com/v1/9af085b0-769a-11ef-a990-4dfb14355b50'
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()

    const inputs = e.target.elements
      const data = {}
      

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Form response was not ok')
        }

        setSubmitted(true)
      })
      .catch(err => {
        e.target.submit()
      })

    //   const anotherHandler = () => {
          
          
    //   }
  }

  if (submitted) {
    return (
      <div div className='contactContainer font'>
        <h2>Thank you soo much!</h2>
            <div>We'll be in touch soon.</div>
            <button onClick={() => {
                setSubmitted(false)
                useEffect(() => {
                  },[submitted])
            }}>Send Another</button>
      </div>
    )
  }

  return (
    <div className='contactContainer'>
      <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method='POST'>
        <div>
          <input type='text' placeholder='Your name' name='name' required />
        </div>
        <div>
          <input type='email' placeholder='Email' name='email' required />
        </div>
        <div>
          <textarea className='textInput' placeholder='Your message' name='message' required />
        </div>
        <div>
          <button type='submit'> Send a message </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
