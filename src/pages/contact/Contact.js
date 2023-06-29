import {MdEmail} from "react-icons/md";
import {BsMessenger} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";
import HeaderImage from "../../assets/images/header_bg_2.jpg";
import Header from "../../components/Header";
import './contact.css';

const Contact = () => {
  return (
    <>
      <Header title={"Get In Touch"} image={HeaderImage}>
        <p>
          Our team is always ready to hear from you when you Contact Us. Shape
          City is one of the top fitness club and we are available 24/7.
        </p>
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:codearvind@gmail.com"
              target="blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a href="https://wa.me/" target="blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
            <a
              href="https://www.messenger.com"
              target="blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;