import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  // State for interactive heading
  const [headingColor, setHeadingColor] = useState("#333333");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Rotate through colors for the interactive heading
  useEffect(() => {
    const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6"];
    let colorIndex = 0;
    
    const interval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setHeadingColor(colors[colorIndex]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(`Thanks for submitting the form, ${formData.name}!`);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>My Landing Page</title>
        <meta name="description" content="Next.js Landing Page Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        {/* Interactive Heading */}
        <h1 
          className={styles.title}
          style={{ 
            color: headingColor,
            transition: 'color 0.5s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={() => setHeadingColor('#ff6b6b')}
          onMouseLeave={() => setHeadingColor('#333333')}
        >
          Welcome to My Landing Page!
        </h1>
        
        {/* Description with images */}
        <div className={styles.description}>
          <h2>About Our Service</h2>
          <p>
            We provide innovative solutions for your business needs. Our team of experts
            is dedicated to delivering high-quality services that exceed your expectations.
          </p>
          
          <div className={styles.imageGrid}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/public\placeholder-image1.jpg.jpg" 
                alt="Service 1" 
                width={400} 
                height={300}
                layout="responsive"
              />
              <p>Professional Design</p>
            </div>
            
            <div className={styles.imageWrapper}>
              <Image 
                src="/public\placeholder-image1.jpg.jpg" 
                alt="Service 2" 
                width={400} 
                height={300}
                layout="responsive"
              />
              <p>Reliable Support</p>
            </div>
          </div>
        </div>
        
        {/* Simple Form */}
        <div className={styles.formContainer}>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={styles.formTextarea}
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Landing Page. All rights reserved.</p>
      </footer>
    </div>
  );
}