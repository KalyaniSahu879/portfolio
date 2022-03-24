import './contact.css';
import {useRef, useState, useContext} from 'react'
import phone from '../../img/phone.png';
import email from '../../img/email.png';
import address from '../../img/address.png';
import git from '../../img/git.png';
import linkedin from '../../img/linkedin.png'
import emailjs from 'emailjs-com'

import { ThemeContext } from '../../context';




const Contact = ()=>{
const formRef = useRef();
const [done, setDone] = useState(false);
const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode ;

const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_5rnn7qz', 'template_qkt2eoa', formRef.current, 'JnRp_g4eJ_A62I5iK')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  

}

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className='c-title'>let's Discuss your Project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                            src={phone} alt="" 
                            className="c-icon" />
                            +91 7205461749
                        </div>
                        <div className="c-info-item">
                            <img 
                            src={git} alt="" 
                            className="c-icon" />
                            <a href="https://github.com/KalyaniSahu879" target="_blank">KalyaniSahu879</a>
                        </div>
                        <div className="c-info-item">
                            <img 
                            src={linkedin} alt="" 
                            className="c-icon" />
                            <a href="https://www.linkedin.com/in/kalyani-sahu-31266a1a9/" target="_blank">Kalyani Sahu</a>
                        </div>
                        <div className="c-info-item">
                            <img 
                            src={email} alt="" 
                            className="c-icon" />
                            sahu.kalyani879@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img 
                            src={address} alt="" 
                            className="c-icon" />
                            Dubey Colony, Muniguda, Rayagada, Odisha, 765020, India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                    <b>What's your story?</b> Get in tauch. Always available for freelancing if the right project comes along me.

                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor : darkMode && "#333"}} type="text" placeholder='Name' name="user_name" />
                    <input style={{backgroundColor : darkMode && "#333"}} type="text" placeholder='Subject' name="user_subject" />
                    <input style={{backgroundColor : darkMode && "#333"}} type="text" placeholder='Email' name="user_email" />
                    <textarea style={{backgroundColor : darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
                    <button>Submit</button>
                    {done && "Thank You"}
                </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;