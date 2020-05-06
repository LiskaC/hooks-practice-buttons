
import React, { useState } from "react";

export default function Button() {
  const [buttonText, setButtonText] = useState('I\'m the function button');

  function handleClick() {
    return setButtonText('This is done via a separate function');
  }

  return <button onClick={handleClick}>{buttonText}</button>;
}