const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>Let’s build something great together! Feel free to reach out.</p>

      <form className="contact-form">
        <label>
          Name:<br />
          <input type="text" placeholder="Your Name" required />
        </label>
        <br /><br />
        <label>
          Email:<br />
          <input type="email" placeholder="Your Email" required />
        </label>
        <br /><br />
        <label>
          Message:<br />
          <textarea placeholder="Your Message" rows="5" required></textarea>
        </label>
        <br /><br />
        <button type="submit">Send Message</button>
      </form>

      <h2>Social Links</h2>
      <ul>
        <li><a href="mailto:nischalb169@gmail.com">📧 nischalb169@gmail.com</a></li>
        <li><a href="https://github.com/neeschal73" target="_blank">🐙 GitHub</a></li>
        <li><a href="https://linkedin.com/in/Nischal Bhujel" target="_blank">🔗 LinkedIn</a></li>
        <li><a href="https://instagram.com/neeschal_73" target="_blank">📸 Instagram</a></li>
      </ul>

      <h3>📍 Kathmandu, Nepal</h3>
    </div>
  );
};

export default Contact;
