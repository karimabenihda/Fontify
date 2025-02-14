import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { fonts } from './font.js';
import { IoCopy } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa6";

import logo from '/logo.png'
function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectedFont, setSelectedFont] = useState('gothic');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  const transformText = (text, fontType) => {
    if (!text || !fonts[fontType]) return text;

    return text
      .split('')
      .map((char) => fonts[fontType][char] || char)
      .join('');
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  return (
    <div className='container'>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
  <img src={logo} alt="Logo" style={{ width: '170px'}} />
  <h1 style={{ color: '#5c527f', margin: 0, textAlign: 'center', flex: 1 }}>Font Transformer</h1>
</div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-30px' }}>
  <textarea
    id="jj"
    className="form-control"
    placeholder="I wanna type ..."
    value={inputValue}
    onChange={handleInputChange}
    style={{ width: "80%", resize: "vertical", padding: "10px" }}
  />
</div>

      <br />
      <div  style={{
    margin: 'auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
  }}>
        <h2 className='text-center' style={{color:'#5c527f'}}>Transformed Texts:</h2>
  <ul style={{ padding: "20px" }}>
    {Object.keys(fonts).map((font) => {
      const transformedText = transformText(inputValue, font);
      return (
        <li
          key={font}
          style={{
            marginBottom: "10px",
            padding: "20px",
            fontSize: "1rem", 
            background: "#ffffff",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <strong>{font}:</strong>
          <p style={{ display: "inline", marginRight: "10px", flex: "1", margin: "0 10px" }}>
            {transformedText || "Type something to see transformation"}
          </p>
          <FaRegCopy
            onClick={() => handleCopy(transformedText)}
            id="copy-button"
            style={{ width: "45px", height: "45px", cursor: "pointer" }}
          />
        </li>
      );
    })}
  </ul>

      </div>
    </div>
  );
}

export default App;
