import React, { useState } from 'react';

function PalindromeChecker() {
  const [input, setInput] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const checkPalindrome = () => {
    const reversedInput = input.split('').reverse().join('');
    setIsPalindrome(input === reversedInput);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={checkPalindrome}>Check</button>
      {isPalindrome && <p>The input is a palindrome.</p>}
      {!isPalindrome && <p>The input is not a palindrome.</p>}
    </div>
  );
}

export default PalindromeChecker;
