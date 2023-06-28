import { Link } from "react-router-dom"
import Logo from '../assets/images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
          Shape City is a forward-thinking, luxury fitness club with an emphasis on community and customer experience. We believe that all people should strive to live pain-free, healthy, and well-rounded lives.
          </p>
          <div className="footer__socials">
            <a href="https://linkedin.com/" target="_black" rel='noreferrer noopener'><FaLinkedin /></a>
            <a href="https://linkedin.com/" target="_black" rel='noreferrer noopener'><FaFacebookF /></a>
            <a href="https://linkedin.com/" target="_black" rel='noreferrer noopener'><AiOutlineTwitter /></a>
            <a href="https://linkedin.com/" target="_black" rel='noreferrer noopener'><AiFillInstagram /></a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainer</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2022 EGATOR TUTORIALS &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer