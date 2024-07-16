import styles from './contact-page.module.css'
import phoneImage from "../../components/assets/phone.svg"
import mailImage from "../../components/assets/mail.svg"
import React, { useState } from 'react';


export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePhoneChange = (event) => {
      setPhone(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (name && email && phone) {
        // Все поля заполнены, можно отправить форму
        console.log('Форма отправлена:', { name, email, phone });
        setFormSubmitted(true);
      } else {
        // Не все поля заполнены, выводим сообщение об ошибке
        console.log('Пожалуйста, заполните все обязательные поля');
      }
    };
  




    return (
        <>
            <div className={styles.main}>
                <div className={styles.contact}>
                    <div className={styles.path}>
                        <span className={styles.span}>Home &nbsp; &nbsp;/</span>
                        <p className={styles.paragraph}>&nbsp; &nbsp;Contact</p>
                    </div>
                    <div className={styles.blockContact}>
                        <div><img src={phoneImage} alt="phone" /> Call To Us</div>
                        <p className={styles.paragraph}>We are available 24/7, 7 days a week.</p>
                        <p className={styles.paragraph}>Phone: +8801611112222</p>
                        <div className={styles.line} />
                        <div><img src={mailImage} alt="mail" /> Write To US</div>
                        <p className={styles.paragraphExt}>Fill out our form and we will contact<wbr /> you within 24 hours.</p>
                        <p className={styles.paragraph}>Emails: customer@exclusive.com</p>
                        <p className={styles.paragraph}>Emails: support@exclusive.com</p>
                    </div>
                </div>
                <div className={styles.central}>
                    {/* <div className={styles.form}>
                        <div className={styles.inputBox}>
                            <div className={styles.name}>
                                <input type="text" className={styles.form_control} required />
                                <div className={styles.placeholder}>Your Name <span className={styles.red}>*</span></div>
                            </div>
                            <div className={styles.email}>
                                <input type="email" className={styles.form_control} required />
                                <div className={styles.placeholder}>Your Email  <span className={styles.red}>*</span></div>
                            </div>
                            <div className={styles.phone}>
                                <input type="phone" className={styles.form_control} required />
                                <div className={styles.placeholder}>Your Phone  <span className={styles.red}>*</span></div>
                            </div>
                        </div>
                        <div className={styles.messageBox}>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.buttonRed}>Send Massage</button>
                        </div>
                    </div> */}
                    <div className={styles.form}>
                        <div className={styles.inputBox}>
                            <div className={styles.name}>
                                <input type="text" className={styles.form_control} value={name} onChange={handleNameChange} required />
                                <div className={styles.placeholder}>Your Name <span className={styles.red}>*</span></div>
                            </div>
                            <div className={styles.email}>
                                <input type="email" className={styles.form_control} value={email} onChange={handleEmailChange} required />
                                <div className={styles.placeholder}>Your Email  <span className={styles.red}>*</span></div>
                            </div>
                            <div className={styles.phone}>
                                <input type="tel" className={styles.form_control} value={phone} onChange={handlePhoneChange} required />
                                <div className={styles.placeholder}>Your Phone  <span className={styles.red}>*</span></div>
                            </div>
                        </div>
                        <div className={styles.messageBox}>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.buttonRed} onClick={handleSubmit}>Send Message</button>
                        </div>
                        {formSubmitted && <p>Thank you for your message!</p>}
                    </div>
                </div>
            </div>
        </>
    )
}