import React, { useState } from 'react';

export default function ButtonInline() {
  const [buttonText, setButtonText] = useState("I\'m a button");

  return (
    <button onClick={() => setButtonText('YES a button')}>
      {buttonText}
    </button>
  )
}