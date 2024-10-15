import React, { useState } from 'react';

const UserFeedbackForm = () => {
  const [fullname, setFullname] = useState('');
  const [contact, setContact] = useState('');
  const [comments, setComments] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!fullname.trim() || !contact.trim() || !comments.trim()) {
      setError('All fields are required');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = emailRegex.test(contact);
    
    // Indian phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    const isPhone = phoneRegex.test(contact.replace(/[^\d]/g, ''));

    if (!isEmail && !isPhone) {
      setError('Invalid contact format. Enter a valid email or phone number');
      return;
    }

    setError('');

    console.log('Form submitted:', { fullname, contact, comments });

    setFullname('');
    setContact('');
    setComments('');
  };

  return (
    <section className="full-screen-section">
      <div className="form-container">
        <form className="feedback-form" data-testid='feedback-form' onSubmit={handleSubmit}>
          <h2 className="form-header">Enter Feedback</h2>
          <div className="form-group">
            <label htmlFor="fullname" className="form-label">Full Name</label>
            <input
              type="text"
              id="fullname"
              className="form-input"
              placeholder="John Doe"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact" className="form-label">Phone Number / Email</label>
            <input
              type="text"
              id="contact"
              className="form-input"
              placeholder="e.g., john.doe@example.com or 9876543210"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div> 
         <div className="form-group">
            <label htmlFor="comments" className="form-label">Comments</label>
            <textarea
              id="comments"
              className="form-textarea"
              rows={3}
              placeholder="Enter your comments..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default UserFeedbackForm;
