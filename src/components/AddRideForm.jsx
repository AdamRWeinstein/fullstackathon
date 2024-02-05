import React, { useState } from 'react';

function AddRideForm() {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    thrill: '',
    height: '',
    pass: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/rides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Ride added successfully');
        // Reset form fields after successful submission
        setFormData({
          name: '',
          image: '',
          description: '',
          thrill: '',
          height: '',
          pass: ''
        });
      } else {
        console.error('Failed to add ride');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add a New Ride</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Thrill Level:</label>
          <input type="text" name="thrill" value={formData.thrill} onChange={handleChange} />
        </div>
        <div>
          <label>Height Requirement:</label>
          <input type="text" name="height" value={formData.height} onChange={handleChange} />
        </div>
        <div>
          <label>Pass Requirement:</label>
          <input type="text" name="pass" value={formData.pass} onChange={handleChange} />
        </div>
        <button type="submit">Add Ride</button>
      </form>
    </div>
  );
}

export default AddRideForm;
