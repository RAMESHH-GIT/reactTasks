
import React, { useState, useEffect } from 'react';


function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    localStorage.removeItem(formData)
  }

  return (
    <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} />
            <input type="email" name="email" onChange={handleChange} />
            <button type="submit">Submit</button>
            </form>
    </div>
  )
}
export default Form;