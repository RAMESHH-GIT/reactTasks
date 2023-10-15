
import Form from './task2';
import React, { useState, useEffect } from 'react';

function DataPage() {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const data = localStorage.getItem('formData');
    setFormData(JSON.parse(data));
  }, []);

  return (
    <div>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  )
}
export default DataPage