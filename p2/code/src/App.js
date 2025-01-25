import './App.css';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Process form data here (e.g., send to a server)
    console.log('Form submitted:', Object.fromEntries(formData));
  };

  return (
    <div className="App">
      <h2>Flex Box</h2>
      <p>Contact methods (WhatsApp, Email, LinkedIn) are arranged in a row and adjust automatically when screen size changes.</p>
      <p>Form elements are stacked one below the other with enough space in between, creating a simple and user-friendly layout that works on any device.</p>
      <section id="contact">
        <ul>
          <li>
            <a href="https://wa.me/1234567890" className="color-whatsapp" aria-label="Contact via WhatsApp">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </li>
          <li>
            <a href="mailto:jpjstest@gmail.com" className="color-email" aria-label="Send an Email">
              <i className="fas fa-envelope"></i> Email
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/jyothiprasannakambam" target="_blank" rel="noopener noreferrer" className="color-linkedin" aria-label="Visit LinkedIn Profile">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
        </ul>
        <h3>Fill the details below to get in touch:</h3>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="from_name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email_id" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <br />
          <button type="submit">Connect</button>
        </form>
      </section>
      <div className="hobbies-container">
        <h2>Grid Layout for Hobbies</h2>
        <div className="hobbies-grid">
          <div className="hobby-item">Photography</div>
          <div className="hobby-item">Coding</div>
          <div className="hobby-item">Gaming</div>
          <div className="hobby-item">Traveling</div>
          <div className="hobby-item">Music</div>
          <div className="hobby-item">Reading</div>
        </div>
      </div>
    </div>
  );
}

export default App;
