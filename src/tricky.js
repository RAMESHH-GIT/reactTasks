// import React, { useState } from 'react';

// function TrickyCode() {
//   const [value, setValue] = useState('');

//   const handleClick = () => {
//     setValue(prevValue => prevValue + '!');
//   }

//   return (
//     <div>
//       <p>{value}</p>
//       <button onClick={handleClick}>Add exclamation</button>
//     </div>
//   );
// }

// export default TrickyCode;
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const history = useHistory();

//   const handleChange = event => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     history.push({
//       pathname: '/confirmation',
//       state: { formData }
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Message:
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default ContactForm;
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
function YourComponent() {
  const history = useHistory();

  function handleClick() {
    history.push('/new-route');
  }

  return (
    <div>
      <p>d</p>
    <button onClick={handleClick}>Go to new route</button>
    </div>
  );
}

export default YourComponent;
