import styles from './my-account-page.module.css'
import { NavLink } from 'react-router-dom'


export default function AccountPage() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.menu}>
                    <div className={styles.path}>
                        <span className={styles.span}>Home &nbsp; &nbsp;/</span>
                        <p className={styles.paragraph}>&nbsp; &nbsp;My Account</p>
                    </div>
                    <div className={styles.blockUp}>
                        <p className={styles.paragraph}>Manage My Account</p>
                        <ul className={styles.profile}>
                            <li><NavLink className={({ isActive }) => isActive ? 'isActive' : ''} to='/account'>My Profile</NavLink></li>
                            <li><NavLink to='/adressBook'>Address Book</NavLink></li>
                            <li><NavLink to='/myPaymentOptions'>My Payment Options</NavLink></li>
                        </ul>
                    </div>
                    <div className={styles.blockBottom}>
                        <p className={styles.paragraph}>My Orders</p>
                        <ul>
                            <li><NavLink to='/myReturns'>My Returns</NavLink></li>
                            <li><NavLink to='/myCancellations'>My Cancellations</NavLink></li>
                        </ul>
                    </div>
                    <p className={styles.paragraph}>My WishList</p>
                </div>
                <div className={styles.central}>
                    <div className={styles.welcome}>
                        <p className={styles.paragraph}>Welcome!</p>
                        <span className={styles.mr_ms}>Md Rimel</span>
                    </div>
                    <div className={styles.form}>
                        <h2 className={styles.editProfile}>Edit Your Profile</h2>
                        <div className={styles.inputBox}>
                            <p className={styles.paragraph}>First Name</p>
                            <p className={styles.paragraph}>Last Name</p>
                            <input type="text" placeholder="Md" />
                            <input type="text" placeholder="Rimel" />
                        </div>
                        <div className={styles.inputBox}>
                            <p className={styles.paragraph}>Email</p>
                            <p className={styles.paragraph}>Address</p>
                            <input type="email" placeholder="rimel1111@gmail.com" />
                            <input type="text" placeholder="Kingston, 5236, United State" />
                        </div>
                        <div className={styles.inputBoxPass}>
                            <p className={styles.paragraph}>Password Changes</p>
                            <input type="password" placeholder="Current Passwod" />
                            <input type="password" placeholder="New Passwod" />
                            <input type="password" placeholder="Confirm New Passwod" />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.buttonWhite}>Cancel</button>
                            <button className={styles.buttonRed}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}