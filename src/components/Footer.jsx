import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import chatIcon from '../assets/chat.svg';
import emailIcon from '../assets/email.svg';
import phoneIcon from '../assets/phone.svg';
import githubIcon from '../assets/github.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content-wrapper"]}>
        <div className={styles['footer-header']}>Cuppa Joe</div>
        <div className={styles['footer-body']}>
          <div className={styles['footer-links-wrapper']}>
            <div className={styles['links-section']}>
              <p className={styles['title']}>CUSTOMER SERVICE</p>
              <ul className={styles['links-list']}>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><Link to='/faqs'>FAQs</Link></li>
                <li><Link to='/shipping'>Shipping & Delivery</Link></li>
                <li><Link to='/returns'>Returns & Exchanges</Link></li>
              </ul>
            </div>
            <div className={styles['links-section']}>
              <p className={styles['title']}>COMPANY</p>
              <ul className={styles['links-list']}>
                <li><Link to='/about'>Our Story</Link></li>
                <li><Link to='/careers'>Careers</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/sustainability'>Sustainability</Link></li>
              </ul>
            </div>
            <div className={styles['links-section']}> 
              <p className={styles['title']}>POLICIES</p>
              <ul className={styles['links-list']}>
                <li><Link to='/policies#privacy'>Privacy Policy</Link></li>
                <li><Link to='/policies#terms'>Terms of Service</Link></li>
                <li><Link to='/policies#refund'>Refund Policy</Link></li>
                <li><Link to='/policies#cookie'>Cookie Policy</Link></li>
                <li><Link to='/policies#accessibility'>Accessibility Statement</Link></li>
              </ul>
            </div>
          </div>
          <div className={styles['footer-contacts-wrapper']}>
            <p>Need help?</p>
            <p>Get connected with a specialist</p>
            <div className={styles['footer-contacts']}>
              <div className={styles['contact']}>
                <img src={emailIcon} alt=''></img>
                <div>email@email.com</div>
              </div>
              <div className={styles['contact']}>
                <img src={phoneIcon} alt=''></img>
                <div>(XXX)-XXX-XXXX</div>
              </div>
              <div className={styles['contact']}>
                <img src={chatIcon} alt=''></img>
                <div>Chat with us</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}><img src={githubIcon} alt=''/>Developed by Derek Tran</div>
      </div>
    </footer>
  )
}

export default Footer;