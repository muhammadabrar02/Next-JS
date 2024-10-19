// import styles from "./page.module.css";
import "./Styles/Page.css";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      {/* Hero Section  */}
      <div className="Hero-Section">
        <h1>My Website</h1>
        <div className="subheading">Innovating Tomorrow, Sustainably.</div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam adipisci,
          in laboriosam amet voluptatibus aliquid et facere iure tempore, ad eligendi
          accusamus, maxime quis incidunt.
        </p>
        <Link href="/contact"><button className="cta-button">Get in Touch</button></Link>
      </div>
      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <h3>Web Development</h3>
            <p>Building responsive and scalable websites to elevate your online presence.</p>
          </div>
          <div className="service-item">
            <h3>UI/UX Design</h3>
            <p>Creating user-friendly interfaces and experiences that captivate your audience.</p>
          </div>
          <div className="service-item">
            <h3>Digital Marketing</h3>
            <p>Strategizing and executing marketing campaigns to boost your brand visibility.</p>
          </div>

        </div>
      </section>
      {/* our clients  */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-item">
            <p>"The team was fantastic! They exceeded our expectations and delivered on time."</p>
            <h4>- Jane Doe, CEO of Company A</h4>
          </div>
          <div className="testimonial-item">
            <p>"Their attention to detail and commitment to quality made all the difference in our project."</p>
            <h4>- John Smith, Founder of Company B</h4>
          </div>
          
        </div>
      </section>

      {/* About us section  */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>We are a dedicated team of professionals passionate about delivering quality services to our clients. Our focus is on innovation, creativity, and excellence, ensuring that every project meets the highest standards.</p>
        <button className="learn-more-button">Learn More</button>
      </section>





    </div>
  );
}
