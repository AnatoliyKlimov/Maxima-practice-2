import styles from './contact-page.module.css'
import phoneImage from "../../components/assets/phone.svg"
import mailImage from "../../components/assets/mail.svg"


export default function ContactPage() {
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


                        <div><img src={mailImage} alt="mail" /> Write To US</div>
                        <p className={styles.paragraphExt}>Fill out our form and we will contact<wbr /> you within 24 hours.</p>
                        <p className={styles.paragraph}>Emails: customer@exclusive.com</p>
                        <p className={styles.paragraph}>Emails: support@exclusive.com</p>
                    </div>
                </div>
                <div className={styles.central}>
                    <div className={styles.form}>
                        <div className={styles.inputBox}>
                            <input type="text" placeholder="Your Name " />
                            <input type="email" placeholder="Your Email " />
                            <input type="phone" placeholder="Your Phone " />
                        </div>
                        <div className={styles.messageBox}>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.buttonRed}>Send Massage</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}