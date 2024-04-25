import React from 'react'

function Contact() {
  return (
    <div className='contact-main'>
        <div className='wrap-contact'>
            <div className='information-message'>
                <div className='information-box'>
                    <h3> Personal information</h3>
                    <ul>
                        <li><p><strong>Mail: </strong>Josepcortes6@gmail.com</p></li>
                        <li><p><strong>Phone:</strong> +34 643 705 774</p></li>
                        <li><p><strong>City: </strong>Barcelona</p></li>
                        <li><p><strong>Address: </strong>Bacardi Street 49-51</p></li>
                        <li><p><strong>Postal code:</strong> 08028</p></li>
                    </ul>
                </div>

                <div className='message-box'>
                    <form action="">
                        <label htmlFor="">De:</label>
                        <input type="text" />
                        <label htmlFor="">Mensaje:</label>
                        <textarea>

                        </textarea>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        

            <div>

            </div>
        </div>
    </div>
  )
}

export default Contact
