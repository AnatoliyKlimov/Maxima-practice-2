import styles from './contact-page.module.css'
import phoneImage from "../../components/assets/phone.svg"
import mailImage from "../../components/assets/mail.svg"
import React, { useState } from 'react';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [messageDirty, setMessageDirty] = useState(false);
    const [nameError, setNameError] = useState('Имя не может быть пустым');
    const [emailError, setEmailError] = useState('Емейл не может быть пустым');
    const [phoneError, setPhoneError] = useState('Телефон не может быть пустым');
    const [messageError, setMessageError] = useState('Сообщение не может быть пустым');


    const emailHandler = (e) => {
        setEmail(e.target.value)
        const emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
        if (!emailExp.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный емейл')
        }
        else {
            setEmailError('')
        }
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
        const phoneExp = /^\d{10}$/;
        if (!phoneExp.test(Number(e.target.value))) {
            setPhoneError('Номер телефона должен содержать 10 цифр');
        } else {
            setPhoneError('');
        }
    };

    const nameHandler = (e) => {
        setName(e.target.value)
        if ((e.target.value.length < 2)) {
            setNameError('Имя должно содержать не менее 2 букв');
        } else {
            setNameError('');
        }
    };

    const messageHandler = (e) => {
        setMessage(e.target.value)
        if ((e.target.value.length < 10)) {
            setMessageError('Сообщение должно содержать не менее 10 символов');
        } else {
            setMessageError('');
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'phone':
                setPhoneDirty(true)
                break
            case 'message':
                setMessageDirty(true)
                break
        }
    }

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
                    <div className={styles.form}>
                        <div className={styles.inputBox}>
                            <div className={styles.name}>
                                <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name='name' type="text" className={styles.form_control} required />
                                <div className={styles.placeholder}>Your Name <span className={styles.red}>*</span></div>
                                {(nameDirty && nameError) && <div className={styles.smallErr} style={{ color: 'red' }}>{nameError}</div>}
                            </div>
                            <div className={styles.email}>
                                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="email" className={styles.form_control} required />
                                <div className={styles.placeholder}>Your Email  <span className={styles.red}>*</span></div>
                                {(emailDirty && emailError) && <div className={styles.smallErr} style={{ color: 'red' }}>{emailError}</div>}
                            </div>
                            <div className={styles.phone}>

                                <input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)} name='phone' type="tel" className={styles.form_control} required />
                                <div className={styles.placeholder}>Your Phone  <span className={styles.red}>*</span></div>
                                {(phoneDirty && phoneError) && <div className={styles.smallErr} style={{ color: 'red' }}>{phoneError}</div>}
                            </div>
                        </div>
                        <div className={styles.messageBox}>
                            <textarea onChange={e => messageHandler(e)} value={message} onBlur={e => blurHandler(e)} name='message' type="tel" cols="30" rows="10" placeholder="Your Message" ></textarea>
                        </div>
                        {(messageDirty && messageError) && <div className={styles.bigErr} style={{ color: 'red' }}>{messageError}</div>}
                        <div className={styles.buttons}>
                            <button className={styles.buttonRed}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}