import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUppercase = () => {
    const updated = text.toUpperCase();
    setText(updated);
    props.showAlert && props.showAlert('Converted to Uppercase', 'success');
  };

  const handleLowercase = () => {
    const updated = text.toLowerCase();
    setText(updated);
    props.showAlert && props.showAlert('Converted to Lowercase', 'success');
  };

  const handleClear = () => {
    setText('');
    props.showAlert && props.showAlert('Text cleared', 'success');
  };

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
      props.showAlert && props.showAlert('Copied to clipboard', 'success');
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      props.showAlert && props.showAlert('Copied to clipboard', 'success');
    }
  };

  const handleRemoveExtraSpaces = () => {
    const updated = text.replace(/\s+/g, ' ').trim();
    setText(updated);
    props.showAlert && props.showAlert('Extra spaces removed', 'success');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  const containerStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743'
  };

  const textareaStyle = {
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    color: props.mode === 'dark' ? 'white' : '#042743'
  };

  return (
    <div className="container" style={containerStyle}>
      <h2 className="mb-3">Enter text to analyze</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          style={textareaStyle}
          id="textBox"
          rows="8"
          placeholder="Type or paste your text here..."
        ></textarea>
      </div>
      <div className="mb-3 d-flex flex-wrap gap-2">
        <button disabled={!text} className="btn btn-primary" onClick={handleUppercase}>Uppercase</button>
        <button disabled={!text} className="btn btn-primary" onClick={handleLowercase}>Lowercase</button>
        <button disabled={!text} className="btn btn-primary" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={!text} className="btn btn-secondary" onClick={handleCopy}>Copy</button>
        <button disabled={!text} className="btn btn-outline-danger" onClick={handleClear}>Clear</button>
      </div>

      <div className="my-3">
        <h3>Your text summary</h3>
        <p>{wordCount} words, {charCount} characters</p>
        <h3>Preview</h3>
        <p>{text || 'Nothing to preview.'}</p>
      </div>
    </div>
  );
}
