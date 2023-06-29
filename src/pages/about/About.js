import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../assets/images/header_bg_1.jpg'
import StoryImage from '../../assets/images/about/about1.jpg'
import VisionImage from '../../assets/images/about/about2.jpg'
import MissionImage from '../../assets/images/about/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        <p>
          Shape City is a forward-thinking, luxury fitness club with an emphasis on community and customer experience. We believe that all people
          should strive to live pain-free, healthy, and well-rounded lives.
        </p>
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              We’re a passionate and committed team, unified by our mission to 
              build the most engaged community of athletes in the world.
            </p>
            <p>
              To enhance the quality of life in the communities, we serve through our fitness philosophy, 
              facilities, programs, and products and to instill in the lives of people everywhere the value of health and fitness.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              To provide a high-quality fitness experience in a welcoming, non-intimidating environment, which we call the Judgement
              Free Zone, where anyone can feel they belong.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              We are passionate about high-performance living and we practice what 
              we preach – investing time in our health and fitness.
            </p>
            <p>
              We believe that everyone has untapped potential within them and it takes a 
              disruptive approach to unleash it. We dream big and don’t settle for the status quo.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About