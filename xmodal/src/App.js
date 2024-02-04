
import React, { useState } from 'react';

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    // Data validation
    if (!formData.username || !formData.email || !formData.phone || !formData.dob) {
      alert('Please fill in all the fields.');
      return;
    }

    if (!formData.email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    const today = new Date();
    const dob = new Date(formData.dob);

    if (dob > today) {
      alert('Invalid date of birth. Please enter a valid date.');
      return;
    }

    // Process the form data (you can customize this part based on your needs)
    alert('Form submitted successfully!');
    closeModal();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <button onClick={openModal}>Open Form</button>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" onChange={handleInputChange} />

              <label htmlFor="email">Email:</label>
              <input type="text" id="email" onChange={handleInputChange} />

              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" onChange={handleInputChange} />

              <label htmlFor="dob">Date of Birth:</label>
              <input type="text" id="dob" onChange={handleInputChange} />

              <button type="button" className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
