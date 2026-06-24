import { useState } from 'react';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/send_email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="pt-20">
      <div className="relative flex flex-col justify-center items-center text-center mb-0 max-sm:px-4 text-white">
        <img
          alt="Background"
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full -z-10"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: 'cover',
            color: 'transparent'
          }}
          src="/Yogesh/contact.jpg"
        />
        <div className="max-sm:hidden absolute top-[1px] left-0 w-full h-full bg-black opacity-60"></div>
        <div className="max-sm:w-full max-[1024px]:h-[35vh] max-[1024px]:w-[90%] max-sm:h-[40vh] w-[60%] h-[65vh] flex flex-col justify-center items-center max-sm:justify-start text-center gap-4 overflow-hidden z-10">
          <p className="max-sm:text-3xl max-[1024px]:text-5xl max-sm:pt-0 pt-20 text-6xl font-semibold max-[1024px]:pt-0">
            Reach out to us anytime.
          </p>
        </div>
      </div>

      <section className="contact-form-section" style={{ padding: '3rem 1rem', backgroundColor: '#f4f4f4' }}>
        <div
          className="form-container"
          style={{
            maxWidth: '800px',
            margin: 'auto',
            backgroundColor: '#fff',
            padding: '2.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            opacity: 1,
            transform: 'translateY(50px)',
            marginBottom: '50px'
          }}
        >
          <h2 style={{ fontSize: '40px', textAlign: 'center', marginBottom: '1rem', color: '#2c3e50', position: 'relative' }}>
            Get in Touch
          </h2>
          <form id="contact-form" onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: '#2c3e50' }}>
                Your Name<span className="required" style={{ color: '#e74c3c', marginLeft: '2px' }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #bdc3c7',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease'
                }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: '#2c3e50' }}>
                Your Email<span className="required" style={{ color: '#e74c3c', marginLeft: '2px' }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane.doe@example.com"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #bdc3c7',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease'
                }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', color: '#2c3e50' }}>
                Your Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #bdc3c7',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease'
                }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', color: '#2c3e50' }}>
                Subject<span className="required" style={{ color: '#e74c3c', marginLeft: '2px' }}>*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Getting Some Help"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #bdc3c7',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease'
                }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: '#2c3e50' }}>
                Your Message<span className="required" style={{ color: '#e74c3c', marginLeft: '2px' }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="I'm interested in learning more about your available properties..."
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #bdc3c7',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease'
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn"
              style={{
                display: 'block',
                width: '100%',
                backgroundColor: '#1f2f39',
                color: '#fff',
                padding: '0.75rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                transition: 'background-color 0.3s ease, transform 0.2s ease'
              }}
            >
              Send Message
            </button>
            {status && <p style={{ marginTop: '1rem', textAlign: 'center' }}>{status}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};
